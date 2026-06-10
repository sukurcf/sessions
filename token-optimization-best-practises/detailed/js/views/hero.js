/**
 * hero.js — Landing view.
 * Hero with an animated token-flow pipeline, headline stats, the three token
 * types, and entry points into the other views.
 */
(function (TO) {
  "use strict";

  var el = TO.utils.el;
  var t  = function (k, vars) { return TO.i18n ? TO.i18n.t(k, vars) : k; };
  var tryT = function (k, vars) { return TO.i18n ? TO.i18n.tryT(k, vars) : undefined; };

  /** Build the animated SVG pipeline: many input tokens -> optimizer -> few bright outputs. */
  function buildPipeline() {
    var svgNS = "http://www.w3.org/2000/svg";
    function n(tag, attrs) {
      var node = document.createElementNS(svgNS, tag);
      Object.keys(attrs || {}).forEach(function (k) { node.setAttribute(k, attrs[k]); });
      return node;
    }

    var svg = n("svg", { viewBox: "0 0 480 340", class: "hero-pipeline", role: "img",
      "aria-label": t("home.pipelineAria") });

    // gradient + glow defs
    var defs = n("defs");
    var grad = n("linearGradient", { id: "toFlowGrad", x1: "0", y1: "0", x2: "1", y2: "0" });
    grad.appendChild(n("stop", { offset: "0", "stop-color": "#22d3ee" }));
    grad.appendChild(n("stop", { offset: "1", "stop-color": "#818cf8" }));
    defs.appendChild(grad);
    var glow = n("filter", { id: "toGlow", x: "-60%", y: "-60%", width: "220%", height: "220%" });
    glow.appendChild(n("feGaussianBlur", { stdDeviation: "3.4", result: "b" }));
    var merge = n("feMerge");
    merge.appendChild(n("feMergeNode", { in: "b" }));
    merge.appendChild(n("feMergeNode", { in: "SourceGraphic" }));
    glow.appendChild(merge);
    defs.appendChild(glow);
    svg.appendChild(defs);

    var inputLanes = [
      "M-10,60 Q140,60 222,170", "M-10,120 Q150,120 222,170",
      "M-10,220 Q150,220 222,170", "M-10,280 Q140,280 222,170"
    ];
    var outputLanes = ["M258,170 Q380,170 500,110", "M258,170 Q380,170 500,230"];

    // faint lane guides
    inputLanes.concat(outputLanes).forEach(function (d, i) {
      svg.appendChild(n("path", { d: d, class: "hero-lane", "data-out": i >= inputLanes.length ? "1" : "0" }));
    });

    // travelling token dots
    function addDots(paths, count, cls, dur) {
      paths.forEach(function (d, laneIdx) {
        var pathId = "toPath-" + cls + "-" + laneIdx;
        var p = n("path", { id: pathId, d: d, fill: "none", stroke: "none" });
        svg.appendChild(p);
        for (var i = 0; i < count; i++) {
          var dot = n("circle", { r: cls === "out" ? 4.2 : 2.8, class: "hero-token hero-token--" + cls });
          var motion = n("animateMotion", {
            dur: dur + "s", repeatCount: "indefinite",
            begin: (-(i / count) * dur - laneIdx * 0.35).toFixed(2) + "s",
            keyPoints: "0;1", keyTimes: "0;1", calcMode: "linear"
          });
          motion.appendChild(n("mpath", { href: "#" + pathId }));
          // older browsers use xlink:href
          motion.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#" + pathId);
          dot.appendChild(motion);
          svg.appendChild(dot);
        }
      });
    }
    addDots(inputLanes, 5, "in", 4.6);
    addDots(outputLanes, 3, "out", 3.4);

    // central optimizer hexagon
    var cx = 240, cy = 170, R = 34;
    var pts = [];
    for (var a = 0; a < 6; a++) {
      var ang = Math.PI / 6 + a * Math.PI / 3;
      pts.push((cx + R * Math.cos(ang)).toFixed(1) + "," + (cy + R * Math.sin(ang)).toFixed(1));
    }
    svg.appendChild(n("circle", { cx: cx, cy: cy, r: R + 14, class: "hero-core-halo" }));
    svg.appendChild(n("polygon", { points: pts.join(" "), class: "hero-core", filter: "url(#toGlow)" }));
    var label = n("text", { x: cx, y: cy + 4, class: "hero-core-label", "text-anchor": "middle" });
    label.textContent = tryT("hero.optimize") || "OPTIMIZE";
    svg.appendChild(label);
    return svg;
  }

  function statCard(stat, idx) {
    var label = tryT("stats.label" + idx) || stat.label;
    var note  = tryT("stats.note"  + idx) || stat.note;
    var value = el("div", { class: "stat-value", "data-count": stat.value,
      "data-suffix": stat.suffix || "", "data-decimals": stat.decimals || 0, text: "0" });
    return el("div", { class: "stat-card reveal" }, [
      value,
      el("div", { class: "stat-label", text: label }),
      el("div", { class: "stat-note", text: note })
    ]);
  }

  function tokenTypeCard(tt) {
    var ns = "tokenTypes." + tt.id + ".";
    return el("div", { class: "ttype-card reveal", "data-type": tt.id }, [
      el("div", { class: "ttype-head" }, [
        el("span", { class: "ttype-name", text: tryT(ns + "name") || tt.name }),
        el("span", { class: "ttype-cost", text: tryT(ns + "cost") || tt.cost })
      ]),
      el("p", { class: "ttype-behavior", text: tryT(ns + "behavior") || tt.behavior }),
      el("div", { class: "ttype-lever" }, [
        el("span", { class: "ttype-lever-tag", text: t("leverWord") }),
        el("span", { text: tryT(ns + "lever") || tt.lever })
      ])
    ]);
  }

  function featureCard(item) {
    var ns = "home.feature." + item.view + ".";
    var title = tryT(ns + "title") || item.title;
    var body  = tryT(ns + "body")  || item.body;
    var open  = tryT(ns + "open")  || ("Open " + title.toLowerCase() + " \u2192");
    var card = el("button", { class: "feature-card reveal", type: "button" }, [
      el("div", { class: "feature-icon", html: item.icon }),
      el("h3", { text: title }),
      el("p",  { text: body }),
      el("span", { class: "feature-go", text: open })
    ]);
    card.addEventListener("click", function () { TO.router.go(item.view); });
    return card;
  }

  var FEATURES = [
    { view: "scenarios", title: "Context Rot Scenarios", icon: "◈",
      body: "The six cost drivers and the scenarios that address each one — problem, recommendation, takeaway." },
    { view: "calculator", title: "Cost Calculator", icon: "◑",
      body: "Price a turn across every model, compare side by side, and see the AI-credit impact." },
    { view: "playbook", title: "Model Playbook", icon: "⚙",
      body: "Answer six questions; get a model strategy and the optimization techniques that fit it." }
  ];

  var view = {
    id: "home",
    mount: function (root) {
      var cfg = TO.data.uiConfig;
      var hero = cfg.hero;

      var ctaRow = el("div", { class: "hero-ctas" }, hero.ctas.map(function (c) {
        var b = el("button", { type: "button",
          class: "btn " + (c.primary ? "btn--primary" : "btn--ghost"),
          text: tryT("hero.cta." + c.view) || c.label });
        b.addEventListener("click", function () { TO.router.go(c.view); });
        return b;
      }));

      var heroLeft = el("div", { class: "hero-copy" }, [
        el("span", { class: "hero-kicker", text: tryT("hero.kicker") || hero.kicker }),
        el("h1", { class: "hero-title" }, [
          document.createTextNode((tryT("hero.title") || hero.title) + " "),
          el("span", { class: "hero-title-accent", text: tryT("hero.titleAccent") || hero.titleAccent })
        ]),
        el("p", { class: "hero-sub", text: tryT("hero.subtitle") || hero.subtitle }),
        ctaRow
      ]);

      var heroRight = el("div", { class: "hero-visual" }, [buildPipeline()]);

      var heroSection = el("section", { class: "hero" }, [
        el("div", { class: "hero-grid container" }, [heroLeft, heroRight])
      ]);

      var tokenSection = el("section", { class: "section" }, [
        el("div", { class: "container" }, [
          el("div", { class: "section-head reveal" }, [
            el("span", { class: "eyebrow", text: t("home.tokenEconomy") }),
            el("h2",   { text: t("home.tokenTypesTitle") }),
            el("p",    { class: "section-lead", text: t("home.tokenTypesLead") })
          ]),
          el("div", { class: "ttype-grid" }, cfg.tokenTypes.map(tokenTypeCard))
        ])
      ]);

      var featureSection = el("section", { class: "section section--alt" }, [
        el("div", { class: "container" }, [
          el("div", { class: "section-head reveal" }, [
            el("span", { class: "eyebrow", text: t("home.whatsInside") }),
            el("h2",   { text: t("home.waysTitle") })
          ]),
          el("div", { class: "feature-grid" }, FEATURES.map(featureCard))
        ])
      ]);

      root.appendChild(heroSection);
      root.appendChild(tokenSection);
      root.appendChild(featureSection);
    },

    show: function () {
      var root = document.getElementById("view-home");
      TO.utils.observeReveals(root);
      // run the count-up once stat cards become visible
      TO.utils.qsa(".stat-value", root).forEach(function (node) {
        if (node.dataset.done) return;
        var io = new IntersectionObserver(function (entries) {
          entries.forEach(function (e) {
            if (!e.isIntersecting || node.dataset.done) return;
            node.dataset.done = "1";
            TO.utils.countUp(node, parseFloat(node.dataset.count), {
              suffix: node.dataset.suffix, decimals: parseInt(node.dataset.decimals, 10) });
            io.disconnect();
          });
        }, { threshold: 0.5 });
        io.observe(node);
      });
    }
  };

  TO.views = TO.views || {};
  TO.views.home = view;
})(window.TO = window.TO || {});
