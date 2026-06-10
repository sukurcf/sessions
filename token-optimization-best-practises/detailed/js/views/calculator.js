/**
 * calculator.js — Cost & Pricing Calculator.
 * Prices a turn across selected models, compares them, and recommends a fit.
 * All rates come from TO.data.pricing — no price is hard-coded here.
 */
(function (TO) {
  "use strict";

  var el = TO.utils.el;
  var fmtUsd = TO.utils.formatUsd;
  var fmtTok = TO.utils.formatTokens;
  var fmtNum = TO.utils.formatNumber;
  var t  = function (k, vars) { return TO.i18n ? TO.i18n.t(k, vars) : k; };
  var tryT = function (k, vars) { return TO.i18n ? TO.i18n.tryT(k, vars) : undefined; };

  function pricingText(path, fallback, vars) {
    return tryT("pricing." + path, vars) || fallback;
  }
  function tierName(tier) { return pricingText("tiers." + tier.id + ".name", tier.name); }
  function tierBlurb(tier) { return pricingText("tiers." + tier.id + ".blurb", tier.blurb); }
  function effortName(effort) { return pricingText("effort." + effort.id + ".name", effort.name); }
  function effortBlurb(effort) { return pricingText("effort." + effort.id + ".blurb", effort.blurb); }

  // Quick-fill presets — typical token mixes for common workloads.
  // `label` is the en fallback; the translated label is resolved via calc.presets.<id>.
  var PRESETS = [
    { id: "qa",     label: "Quick Q&A",     input: 1500,  cached: 8000,  output: 400,  turns: 1,  effort: "low" },
    { id: "refactor", label: "Daily refactor", input: 6000, cached: 20000, output: 1200, turns: 6,  effort: "medium" },
    { id: "agent",  label: "Agent task",    input: 15000, cached: 30000, output: 3000, turns: 20, effort: "medium" },
    { id: "session", label: "Long session", input: 50000, cached: 40000, output: 2000, turns: 30, effort: "medium" }
  ];

  var view = {
    id: "calculator",
    state: {
      input: 6000, cached: 20000, output: 1200, turns: 6,
      effort: "low", autoMode: true, planId: "business",
      selected: {} // modelId -> true
    },

    mount: function (root) {
      var pricing = TO.data.pricing;
      // default selection: one model per tier
      ["gpt-5-mini", "claude-sonnet-4-6", "claude-opus-4-7"].forEach(function (id) {
        view.state.selected[id] = true;
      });

      var resultsHost = el("div", { class: "calc-results", id: "calc-results" });

      root.appendChild(el("section", { class: "section" }, [
        el("div", { class: "container" }, [
          el("div", { class: "section-head reveal" }, [
            el("span", { class: "eyebrow", text: t("calc.eyebrow") }),
            el("h2", { text: t("calc.title") }),
            el("p", { class: "section-lead", text: t("calc.lead") })
          ]),
          el("div", { class: "calc-layout reveal" }, [
            view.buildControls(),
            resultsHost
          ]),
          el("p", { class: "calc-disclaimer reveal", text:
            pricingText("meta.note", pricing.meta.note) + " · " + t("calc.sourceLabel") + ": " +
            pricingText("meta.source", pricing.meta.source) + " · " +
            pricingText("meta.effective", pricing.meta.effective) })
        ])
      ]));

      view.recalc();
    },

    /** Left-hand control column: token inputs, presets, options, model picker. */
    buildControls: function () {
      var pricing = TO.data.pricing;

      function tokenField(key, label, min, max, step) {
        var range = el("input", { type: "range", min: min, max: max, step: step,
          value: view.state[key], class: "calc-range", "aria-label": label });
        var number = el("input", { type: "number", min: min, max: max * 4, step: step,
          value: view.state[key], class: "calc-number", "aria-label": t("calc.exactAria", { label: label }) });
        function sync(v, fromNumber) {
          v = TO.utils.clamp(parseInt(v, 10) || 0, 0, max * 4);
          view.state[key] = v;
          if (!fromNumber) number.value = v;
          range.value = TO.utils.clamp(v, min, max);
          view.recalc();
        }
        range.addEventListener("input", function () { sync(range.value, false); });
        number.addEventListener("input", function () { sync(number.value, true); });
        return el("div", { class: "calc-field" }, [
          el("label", { class: "calc-field-label" }, [
            el("span", { text: label }),
            number
          ]),
          range
        ]);
      }

      // presets
      var presetRow = el("div", { class: "preset-row" }, PRESETS.map(function (p) {
        var b = el("button", { type: "button", class: "chip chip--preset",
          text: tryT("calc.presets." + p.id) || p.label });
        b.addEventListener("click", function () {
          view.state.input = p.input; view.state.cached = p.cached;
          view.state.output = p.output; view.state.turns = p.turns;
          view.state.effort = p.effort;
          view.refreshControls();
          view.recalc();
        });
        return b;
      }));

      // effort selector
      var effortSel = el("select", { class: "calc-select", "aria-label": t("calc.reasoningEffort") },
        pricing.effortLevels.map(function (e) {
           return el("option", { value: e.id }, effortName(e) + " — " + effortBlurb(e));
        }));
      effortSel.value = view.state.effort;
      effortSel.addEventListener("change", function () {
        view.state.effort = effortSel.value; view.recalc();
      });

      // plan selector
      var planSel = el("select", { class: "calc-select", "aria-label": t("calc.plan") },
        pricing.plans.map(function (p) {
          return el("option", { value: p.id }, t("calc.planOption", {
            name: pricingText("plans." + p.id, p.name),
            credits: fmtNum(p.includedCredits)
          }));
        }));
      planSel.value = view.state.planId;
      planSel.addEventListener("change", function () {
        view.state.planId = planSel.value; view.recalc();
      });

      // turns
      var turnsInput = el("input", { type: "number", min: 1, max: 200, value: view.state.turns,
        class: "calc-number calc-number--wide", "aria-label": t("calc.sessionTurns") });
      turnsInput.addEventListener("input", function () {
        view.state.turns = TO.utils.clamp(parseInt(turnsInput.value, 10) || 1, 1, 999);
        view.recalc();
      });

      // auto mode toggle
      var autoToggle = el("input", { type: "checkbox", class: "calc-check" });
      autoToggle.checked = view.state.autoMode;
      autoToggle.addEventListener("change", function () {
        view.state.autoMode = autoToggle.checked; view.recalc();
      });

      // model picker grouped by vendor → tier, collapsible, with select all/none
      var vendors = [];
      var vendorMap = {};
      pricing.models.forEach(function (m) {
        if (!vendorMap[m.vendor]) {
          vendorMap[m.vendor] = [];
          vendors.push(m.vendor);
        }
        vendorMap[m.vendor].push(m);
      });

      var modelGroups = vendors.map(function (vendor) {
        var vendorModels = vendorMap[vendor];
        // sub-group by tier within vendor
        var tierGroups = pricing.tiers.map(function (tier) {
          var models = vendorModels.filter(function (m) { return m.tier === tier.id; });
          if (!models.length) return null;
          var rows = models.map(function (m) {
            var cb = el("input", { type: "checkbox", class: "calc-check", "data-model": m.id });
            cb.checked = !!view.state.selected[m.id];
            cb.addEventListener("change", function () {
              view.state.selected[m.id] = cb.checked;
              updateVendorToggle();
              view.recalc();
            });
            return el("label", { class: "model-pick" }, [
              cb,
              el("span", { class: "model-pick-name", text: m.name }),
              el("span", { class: "model-pick-rate",
                text: t("calc.outputRate", { rate: "$" + m.output }) }),
              m.included ? el("span", { class: "model-pick-badge", text: t("calc.included") }) : null
            ]);
          });
          return el("div", { class: "model-tier-sub" }, [
            el("div", { class: "model-tier-label" }, [
              el("span", { class: "tier-dot", style: "background:" + tier.color }),
              el("span", { text: tierName(tier) })
            ]),
            el("div", { class: "model-group-list" }, rows)
          ]);
        }).filter(Boolean);

        // vendor header with toggle all / expand-collapse
        var toggleBtn = el("button", { type: "button", class: "chip chip--vendor-toggle",
          text: "All" });
        var listWrap = el("div", { class: "model-vendor-body" }, tierGroups);

        function updateVendorToggle() {
          var all = vendorModels.every(function (m) { return view.state.selected[m.id]; });
          toggleBtn.textContent = all ? "None" : "All";
        }
        toggleBtn.addEventListener("click", function () {
          var all = vendorModels.every(function (m) { return view.state.selected[m.id]; });
          var next = !all;
          vendorModels.forEach(function (m) { view.state.selected[m.id] = next; });
          // sync checkboxes
          var cbs = listWrap.querySelectorAll("input[data-model]");
          for (var i = 0; i < cbs.length; i++) cbs[i].checked = next;
          updateVendorToggle();
          view.recalc();
        });

        var expandBtn = el("button", { type: "button", class: "chip chip--vendor-expand",
          "aria-label": "Expand " + vendor });
        expandBtn.innerHTML = "&#9662;";
        expandBtn.addEventListener("click", function () {
          var open = group.classList.toggle("is-collapsed");
          expandBtn.innerHTML = open ? "&#9656;" : "&#9662;";
        });

        updateVendorToggle();

        var group = el("div", { class: "model-group" }, [
          el("div", { class: "model-group-head" }, [
            expandBtn,
            el("span", { class: "model-group-name", text: vendor }),
            el("span", { class: "model-group-count", text: vendorModels.length + " models" }),
            toggleBtn
          ]),
          listWrap
        ]);
        return group;
      });

      view._controls = {
        inputField: tokenField("input", t("calc.inputTokens"), 0, 60000, 500),
        cachedField: tokenField("cached", t("calc.cachedTokens"), 0, 60000, 500),
        outputField: tokenField("output", t("calc.outputTokens"), 0, 8000, 100),
        effortSel: effortSel, planSel: planSel, turnsInput: turnsInput, autoToggle: autoToggle
      };

      return el("div", { class: "calc-controls" }, [
        el("h3", { class: "calc-block-title", text: t("calc.tokenMix") }),
        el("div", { class: "preset-label", text: t("calc.quickFill") }),
        presetRow,
        view._controls.inputField,
        view._controls.cachedField,
        view._controls.outputField,
        el("div", { class: "calc-options" }, [
          el("div", { class: "calc-opt" }, [
            el("span", { class: "calc-opt-label", text: t("calc.reasoningEffort") }), effortSel
          ]),
          el("div", { class: "calc-opt" }, [
            el("span", { class: "calc-opt-label", text: t("calc.sessionTurns") }), turnsInput
          ]),
          el("div", { class: "calc-opt" }, [
            el("span", { class: "calc-opt-label", text: t("calc.plan") }), planSel
          ]),
          el("label", { class: "calc-opt calc-opt--toggle" }, [
            autoToggle,
            el("span", {}, [
              el("span", { class: "calc-opt-label", text: t("calc.autoLabel") }),
              el("span", { class: "calc-opt-hint", text: t("calc.autoHint") })
            ])
          ])
        ]),
        el("h3", { class: "calc-block-title", text: t("calc.modelsToCompare") }),
        el("div", { class: "model-picker" }, modelGroups)
      ]);
    },

    /** Reflect state back into the control DOM (used after a preset). */
    refreshControls: function () {
      var c = view._controls;
      ["input", "cached", "output"].forEach(function (key) {
        var field = c[key + "Field"];
        TO.utils.qs(".calc-range", field).value = view.state[key];
        TO.utils.qs(".calc-number", field).value = view.state[key];
      });
      c.effortSel.value = view.state.effort;
      c.turnsInput.value = view.state.turns;
    },

    /** Pure cost function for one model given current state. */
    computeModel: function (m) {
      var pricing = TO.data.pricing;
      var P = pricing.meta.rateUnit;
      var st = view.state;
      var effort = pricing.effortLevels.filter(function (e) { return e.id === st.effort; })[0];
      var mult = effort ? effort.multiplier : 1;
      var billedOutput = st.output * mult;

      var inCost = st.input / P * m.input;
      var cacheCost = st.cached / P * m.cached;
      var outCost = billedOutput / P * m.output;
      var discount = st.autoMode ? (1 - pricing.meta.autoModeDiscount) : 1;

      var perTurn = (inCost + cacheCost + outCost) * discount;
      var total = perTurn * st.turns;
      return {
        model: m,
        inCost: inCost * discount, cacheCost: cacheCost * discount, outCost: outCost * discount,
        perTurn: perTurn, total: total,
        credits: total / pricing.meta.creditValueUsd,
        billedOutput: billedOutput
      };
    },

    recalc: function () {
      var host = document.getElementById("calc-results");
      if (!host) return;
      TO.utils.clear(host);

      var pricing = TO.data.pricing;
      var chosen = pricing.models.filter(function (m) { return view.state.selected[m.id]; });

      if (!chosen.length) {
        host.appendChild(el("div", { class: "calc-empty" }, [
          el("p", { text: t("calc.emptyModels") })
        ]));
        return;
      }

      var rows = chosen.map(view.computeModel).sort(function (a, b) {
        return a.total - b.total;
      });
      var cheapest = rows[0], priciest = rows[rows.length - 1];
      var maxTotal = priciest.total || 1;
      var plan = pricing.plans.filter(function (p) { return p.id === view.state.planId; })[0];

      // headline
      var spread = cheapest.total > 0 ? (priciest.total / cheapest.total) : 1;
      host.appendChild(el("div", { class: "calc-headline" }, [
        el("div", { class: "calc-headline-main" }, [
          el("span", { class: "calc-headline-label", text: t("calc.lowestCost") }),
          el("span", { class: "calc-headline-value", text: fmtUsd(cheapest.total) }),
          el("span", { class: "calc-headline-model", text: cheapest.model.name })
        ]),
        el("div", { class: "calc-headline-sub" }, [
          el("div", { class: "calc-kpi" }, [
            el("span", { class: "calc-kpi-v", text: fmtNum(cheapest.credits, cheapest.credits < 10 ? 1 : 0) }),
            el("span", { class: "calc-kpi-l", text: t("calc.aiCredits") })
          ]),
          el("div", { class: "calc-kpi" }, [
            el("span", { class: "calc-kpi-v", text: spread.toFixed(1) + "×" }),
            el("span", { class: "calc-kpi-l", text: t("calc.spreadLabel") })
          ]),
          el("div", { class: "calc-kpi" }, [
            el("span", { class: "calc-kpi-v",
              text: (cheapest.credits / plan.includedCredits * 100).toFixed(2) + "%" }),
            el("span", { class: "calc-kpi-l", text: t("calc.monthlyAllowance", {
              plan: pricingText("plans." + plan.id, plan.name)
            }) })
          ])
        ])
      ]));

      // comparison bars
      var bars = el("div", { class: "calc-bars" }, rows.map(function (r) {
        var tier = pricing.tiers.filter(function (t) { return t.id === r.model.tier; })[0];
        var fill = el("div", { class: "calc-bar-fill" });
        fill.style.background = tier ? tier.color : "#818cf8";
        fill.style.width = "0%";
        fill.dataset.target = (r.total / maxTotal * 100).toFixed(1);
        return el("div", { class: "calc-bar-row" + (r === cheapest ? " is-best" : "") }, [
          el("div", { class: "calc-bar-name" }, [
            el("span", { text: r.model.name }),
            r === cheapest ? el("span", { class: "best-tag", text: t("calc.bestValue") }) : null
          ]),
          el("div", { class: "calc-bar-track" }, [fill]),
          el("div", { class: "calc-bar-cost", text: fmtUsd(r.total) })
        ]);
      }));
      host.appendChild(el("div", { class: "calc-result-block" }, [
        el("h3", { class: "calc-block-title", text: t("calc.sessionCost", { count: view.state.turns }) }),
        bars
      ]));

      // breakdown cards
      var cards = el("div", { class: "calc-breakdown" }, rows.map(function (r) {
        var sum = r.inCost + r.cacheCost + r.outCost || 1;
        function seg(cls, val) {
          var d = el("div", { class: "split-seg split-seg--" + cls });
          d.style.width = (val / sum * 100) + "%";
          return d;
        }
        return el("div", { class: "breakdown-card" }, [
          el("div", { class: "breakdown-head" }, [
            el("span", { class: "breakdown-name", text: r.model.name }),
            el("span", { class: "breakdown-vendor", text: r.model.vendor })
          ]),
          el("div", { class: "split-bar" }, [
            seg("in", r.inCost), seg("cache", r.cacheCost), seg("out", r.outCost)
          ]),
          el("dl", { class: "breakdown-list" }, [
            el("div", {}, [el("dt", { text: t("calc.inputShort") }), el("dd", { text: fmtUsd(r.inCost * view.state.turns) })]),
            el("div", {}, [el("dt", { text: t("calc.cachedShort") }), el("dd", { text: fmtUsd(r.cacheCost * view.state.turns) })]),
            el("div", {}, [el("dt", { text: t("calc.outputShort") }), el("dd", { text: fmtUsd(r.outCost * view.state.turns) })]),
            el("div", { class: "breakdown-total" }, [
              el("dt", { text: t("calc.perTurn") }), el("dd", { text: fmtUsd(r.perTurn) })])
          ])
        ]);
      }));
      host.appendChild(el("div", { class: "calc-result-block" }, [
        el("h3", { class: "calc-block-title", text: t("calc.costBreakdown") }),
        el("div", { class: "split-legend" }, [
          el("span", { class: "lg lg--in", text: t("calc.inputShort") }),
          el("span", { class: "lg lg--cache", text: t("calc.cachedShort") }),
          el("span", { class: "lg lg--out", text: t("calc.outputShort") })
        ]),
        cards
      ]));

      // recommendation
      host.appendChild(view.buildRecommendation(rows, cheapest, priciest));

      requestAnimationFrame(function () {
        TO.utils.qsa(".calc-bar-fill", host).forEach(function (f) {
          f.style.width = f.dataset.target + "%";
        });
      });
    },

    buildRecommendation: function (rows, cheapest, priciest) {
      var st = view.state;
      var outShare = (cheapest.inCost + cheapest.cacheCost + cheapest.outCost) > 0
        ? cheapest.outCost / (cheapest.inCost + cheapest.cacheCost + cheapest.outCost) : 0;
      var lines = [];

      lines.push(t("calc.recommend.lowest", {
        model: cheapest.model.name,
        total: fmtUsd(cheapest.total),
        delta: fmtUsd(priciest.total - cheapest.total),
        priciest: priciest.model.name
      }));

      if (outShare > 0.55) {
        lines.push(t("calc.recommend.outputDominates", { percent: Math.round(outShare * 100) + "%" }));
      } else if (st.cached > st.input * 1.5) {
        lines.push(t("calc.recommend.cachedHealthy"));
      } else {
        lines.push(t("calc.recommend.inputDrives"));
      }

      if (st.effort === "high" || st.effort === "max") {
        lines.push(t("calc.recommend.highEffort", { effort: st.effort.toUpperCase() }));
      }
      if (!st.autoMode) {
        lines.push(t("calc.recommend.autoOff"));
      }

      var goPlaybook = el("button", { type: "button", class: "btn btn--primary btn--sm",
        text: t("calc.guidedRecommendation") });
      goPlaybook.addEventListener("click", function () { TO.router.go("playbook"); });

      return el("div", { class: "calc-recommend reveal" }, [
        el("div", { class: "recommend-mark", text: "◑" }),
        el("div", { class: "recommend-body" }, [
          el("h3", { text: t("calc.recommendation") }),
          el("ul", { class: "recommend-list" }, lines.map(function (t) {
            return el("li", { text: t });
          })),
          goPlaybook
        ])
      ]);
    },

    show: function () {
      TO.utils.observeReveals(document.getElementById("view-calculator"));
      view.recalc();
    }
  };

  TO.views = TO.views || {};
  TO.views.calculator = view;
})(window.TO = window.TO || {});
