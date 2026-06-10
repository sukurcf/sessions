/**
 * diagram.js — Interactive framework view.
 * Three stages: Diagnosis (cost drivers) -> Six Pillars (clickable hub) -> Outcomes.
 * The pillar hub is generated from TO.data.uiConfig.pillars, so adding a pillar
 * adds a node automatically.
 */
(function (TO) {
  "use strict";

  var el = TO.utils.el;
  var store = TO.store;
  var t = function (k, vars) { return TO.i18n ? TO.i18n.t(k, vars) : k; };
  var tryT = function (k, vars) { return TO.i18n ? TO.i18n.tryT(k, vars) : undefined; };
  var SVGNS = "http://www.w3.org/2000/svg";

  function svg(tag, attrs) {
    var node = document.createElementNS(SVGNS, tag);
    Object.keys(attrs || {}).forEach(function (k) { node.setAttribute(k, attrs[k]); });
    return node;
  }

  function driverCard(d) {
    return el("div", { class: "driver-card reveal" }, [
      el("div", { class: "driver-rank", text: String(d.rank) }),
      el("div", { class: "driver-body" }, [
        el("div", { class: "driver-head" }, [
          el("span", { class: "driver-name", text: d.name }),
          el("span", { class: "driver-impact", text: d.impact })
        ]),
        el("p", { class: "driver-detail", text: d.detail })
      ])
    ]);
  }

  /** Build the clickable hub-and-spoke SVG of pillars. */
  function buildHub(pillars, onSelect) {
    var W = 580, H = 500, cx = W / 2, cy = H / 2, ring = 180, nodeR = 46, coreR = 60;
    var s = svg("svg", { viewBox: "0 0 " + W + " " + H, class: "hub-svg",
      role: "group", "aria-label": t("diagram.hubAria") });

    var positions = pillars.map(function (_, i) {
      var ang = -Math.PI / 2 + i * (2 * Math.PI / pillars.length);
      return { x: cx + ring * Math.cos(ang), y: cy + ring * Math.sin(ang) };
    });

    // connector spokes (animated token flow)
    positions.forEach(function (p, i) {
      s.appendChild(svg("line", { x1: cx, y1: cy, x2: p.x, y2: p.y,
        class: "hub-spoke", "data-spoke": pillars[i].id }));
    });

    // core
    s.appendChild(svg("circle", { cx: cx, cy: cy, r: coreR + 12, class: "hub-core-halo" }));
    s.appendChild(svg("circle", { cx: cx, cy: cy, r: coreR, class: "hub-core" }));
    var coreT1 = svg("text", { x: cx, y: cy - 6, class: "hub-core-t1", "text-anchor": "middle" });
    coreT1.textContent = tryT("diagram.coreTop")    || "Token";
    var coreT2 = svg("text", { x: cx, y: cy + 16, class: "hub-core-t2", "text-anchor": "middle" });
    coreT2.textContent = tryT("diagram.coreBottom") || "discipline";
    s.appendChild(coreT1); s.appendChild(coreT2);

    // pillar nodes
    pillars.forEach(function (p, i) {
      var pos = positions[i];
      var g = svg("g", { class: "hub-node", "data-pillar": p.id, tabindex: "0", role: "button",
        "aria-label": tryT("diagram.pillarAria", { num: p.num, name: p.name })
          || ("Pillar " + p.num + ": " + p.name) });
      g.style.setProperty("--pillar-color", p.color);
      g.appendChild(svg("circle", { cx: pos.x, cy: pos.y, r: nodeR, class: "hub-node-bg" }));
      g.appendChild(svg("circle", { cx: pos.x, cy: pos.y, r: nodeR, class: "hub-node-ring" }));
      var num = svg("text", { x: pos.x, y: pos.y - 6, class: "hub-node-num", "text-anchor": "middle" });
      num.textContent = p.num;
      var contrib = svg("text", { x: pos.x, y: pos.y + 15, class: "hub-node-contrib", "text-anchor": "middle" });
      contrib.textContent = p.contribution;
      g.appendChild(num); g.appendChild(contrib);

      function select() { onSelect(p.id); }
      g.addEventListener("click", select);
      g.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); select(); }
      });
      s.appendChild(g);
    });

    return s;
  }

  var view = {
    id: "diagram",

    mount: function (root) {
      var cfg = TO.data.uiConfig;

      // Stage 1 — diagnosis
      var diagnosis = el("section", { class: "section" }, [
        el("div", { class: "container" }, [
          el("div", { class: "section-head reveal" }, [
            el("span", { class: "eyebrow", text: t("diagram.stage1Eyebrow") }),
            el("h2",   { text: t("diagram.stage1Title") }),
            el("p",    { class: "section-lead", text: t("diagram.stage1Lead") })
          ]),
          el("div", { class: "driver-grid" }, cfg.costDrivers.map(driverCard))
        ])
      ]);

      // Stage 2 — pillar hub + detail panel
      var detailPanel = el("div", { class: "pillar-panel", id: "pillar-panel" });
      var hub = buildHub(cfg.pillars, function (id) { TO.router.go("diagram", id); });

      var pillarSection = el("section", { class: "section section--alt" }, [
        el("div", { class: "container" }, [
          el("div", { class: "section-head reveal" }, [
            el("span", { class: "eyebrow", text: t("diagram.stage2Eyebrow") }),
            el("h2",   { text: t("diagram.stage2Title") }),
            el("p",    { class: "section-lead", text: t("diagram.stage2Lead") })
          ]),
          el("div", { class: "hub-layout reveal" }, [
            el("div", { class: "hub-wrap" }, [hub]),
            detailPanel
          ])
        ])
      ]);

      // Stage 3 — outcomes
      var outcomesSection = el("section", { class: "section" }, [
        el("div", { class: "container" }, [
          el("div", { class: "section-head reveal" }, [
            el("span", { class: "eyebrow", text: t("diagram.stage3Eyebrow") }),
            el("h2",   { text: t("diagram.stage3Title") })
          ]),
          el("div", { class: "outcome-grid" }, cfg.outcomes.map(function (o) {
            return el("div", { class: "outcome-card reveal" }, [
              el("div", { class: "outcome-metric", text: o.metric }),
              el("div", { class: "outcome-label",  text: o.label }),
              el("div", { class: "outcome-note",   text: o.note })
            ]);
          }))
        ])
      ]);

      root.appendChild(diagnosis);
      root.appendChild(pillarSection);
      root.appendChild(outcomesSection);

      // keep the hub highlight in sync with selection
      store.subscribe("activePillar", function (id) {
        TO.utils.qsa(".hub-node", root).forEach(function (n) {
          n.classList.toggle("is-active", n.dataset.pillar === id);
        });
        TO.utils.qsa(".hub-spoke", root).forEach(function (sp) {
          sp.classList.toggle("is-active", sp.dataset.spoke === id);
        });
        view.renderPanel(detailPanel, id);
      });
    },

    renderPanel: function (host, pillarId) {
      TO.utils.clear(host);
      var pillar = (TO.data.uiConfig.pillars || []).filter(function (p) {
        return p.id === pillarId;
      })[0];

      if (!pillar) {
        host.appendChild(el("div", { class: "pillar-panel-empty" }, [
          el("div", { class: "pillar-panel-empty-mark", text: "✲" }),
          el("p", { text: t("diagram.emptyPanel") })
        ]));
        return;
      }

      var related = (TO.data.scenarios || []).filter(function (s) {
        return (pillar.scenarios || []).indexOf(s.id) !== -1;
      });
      var scenarioLinks = el("div", { class: "panel-scenarios" }, related.map(function (s) {
        var b = el("button", { type: "button", class: "panel-scenario-link" }, [
          el("span", { class: "panel-scenario-title", text: s.title }),
          el("span", { class: "panel-scenario-impact", text: s.impact.headline })
        ]);
        b.addEventListener("click", function () { TO.router.go("scenarios", s.id); });
        return b;
      }));

      var panel = el("div", { class: "pillar-panel-inner" }, [
        el("div", { class: "panel-top" }, [
          el("span", { class: "panel-num", text: pillar.num }),
          el("div", {}, [
            el("h3", { class: "panel-name", text: pillar.name }),
            el("p", { class: "panel-principle", text: pillar.principle })
          ])
        ]),
        el("p", { class: "panel-detail", text: pillar.detail }),
        el("div", { class: "panel-meta" }, [
          el("div", { class: "panel-meta-item" }, [
            el("span", { class: "panel-meta-label", text: t("diagram.primaryLever") }),
            el("span", { class: "panel-meta-value", text: pillar.lever })
          ]),
          el("div", { class: "panel-meta-item" }, [
            el("span", { class: "panel-meta-label", text: t("diagram.contribution") }),
            el("span", { class: "panel-meta-value", text: pillar.contribution })
          ])
        ]),
        el("h4", { class: "detail-subhead", text: t("diagram.scenariosHere") }),
        scenarioLinks
      ]);
      panel.style.setProperty("--pillar-color", pillar.color);
      host.appendChild(panel);
    },

    show: function (param) {
      var root = document.getElementById("view-diagram");
      TO.utils.observeReveals(root);
      var valid = (TO.data.uiConfig.pillars || []).some(function (p) { return p.id === param; });
      store.set("activePillar", valid ? param : (store.get("activePillar") || null));
      // ensure panel reflects current state even if value unchanged
      view.renderPanel(document.getElementById("pillar-panel"), store.get("activePillar"));
      TO.utils.qsa(".hub-node", root).forEach(function (n) {
        n.classList.toggle("is-active", n.dataset.pillar === store.get("activePillar"));
      });
      TO.utils.qsa(".hub-spoke", root).forEach(function (sp) {
        sp.classList.toggle("is-active", sp.dataset.spoke === store.get("activePillar"));
      });
    }
  };

  TO.views = TO.views || {};
  TO.views.diagram = view;
})(window.TO = window.TO || {});
