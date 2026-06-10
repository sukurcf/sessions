/**
 * extensibility.js — "Design for extensibility" view.
 * Communicates the data-driven architecture and how to extend the app.
 */
(function (TO) {
  "use strict";

  var el = TO.utils.el;
  var t  = function (k, vars) { return TO.i18n ? TO.i18n.t(k, vars) : k; };
  var tryT = function (k, vars) { return TO.i18n ? TO.i18n.tryT(k, vars) : undefined; };

  var ADD_SCENARIO_SNIPPET =
    "// data/scenarios.js — append one object, nothing else changes\n" +
    "{\n" +
    "  id: \"my-new-scenario\",\n" +
    "  title: \"My new optimization scenario\",\n" +
    "  category: \"Context\",          // becomes a filter automatically\n" +
    "  pillars: [\"context\"],          // links into the framework diagram\n" +
    "  tagline: \"One-line hook.\",\n" +
    "  problem: \"…\", whyHigh: [\"…\"],\n" +
    "  techniques: [{ name: \"…\", detail: \"…\" }],\n" +
    "  impact: { headline: \"30% less\", metricLabel: \"Tokens/turn\",\n" +
    "            before: 20000, after: 14000, unit: \"tokens\" },\n" +
    "  example: { type: \"diff\", label: \"…\", before: \"…\", after: \"…\" },\n" +
    "  recommendation: \"…\", takeaway: \"…\", modelFit: \"…\", source: \"…\"\n" +
    "}";

  var view = {
    id: "extensibility",

    mount: function (root) {
      var ext = TO.data.uiConfig.extensibility;

      var dataCards = el("div", { class: "ext-data-grid" }, ext.dataFiles.map(function (d) {
        return el("div", { class: "ext-data-card reveal" }, [
          el("code", { class: "ext-file", text: d.file }),
          el("div", { class: "ext-purpose", text: d.purpose }),
          el("p", { class: "ext-howto", text: d.howTo })
        ]);
      }));

      var principles = el("div", { class: "ext-principle-grid" }, ext.principles.map(function (p, i) {
        return el("div", { class: "ext-principle reveal" }, [
          el("span", { class: "ext-principle-num", text: "0" + (i + 1) }),
          el("h4", { text: p.name }),
          el("p", { text: p.detail })
        ]);
      }));

      var archLayers = [
        { name: "data/", role: "Declarative content — scenarios, pricing, playbook, config." },
        { name: "js/core/", role: "Plumbing — store, router, utilities. No content, no rendering." },
        { name: "js/views/", role: "Rendering — one module per section, each reads only from data + store." }
      ];
      var arch = el("div", { class: "ext-arch" }, archLayers.map(function (l) {
        return el("div", { class: "ext-arch-layer reveal" }, [
          el("code", { class: "ext-arch-name", text: l.name }),
          el("span", { class: "ext-arch-role", text: l.role })
        ]);
      }));

      root.appendChild(el("section", { class: "section" }, [
        el("div", { class: "container" }, [
          el("div", { class: "section-head reveal" }, [
            el("span", { class: "eyebrow", text: t("ext.eyebrow") }),
            el("h2", { text: t("ext.title") }),
            el("p", { class: "section-lead", text: tryT("ext.intro") || ext.intro })
          ]),

          el("h3", { class: "ext-block-title reveal", text: t("ext.archHead") }),
          arch,

          el("h3", { class: "ext-block-title reveal", text: t("ext.cfgHead") }),
          dataCards,

          el("div", { class: "ext-snippet reveal" }, [
            el("div", { class: "ext-snippet-head" }, [
              el("span", { class: "ext-snippet-title", text: t("ext.snippetTitle") }),
              el("span", { class: "ext-snippet-tag", text: t("ext.snippetTag") })
            ]),
            el("pre", { class: "ext-code" }, [el("code", { text: ADD_SCENARIO_SNIPPET })])
          ]),

          el("h3", { class: "ext-block-title reveal", text: t("ext.principlesHead") }),
          principles
        ])
      ]));
    },

    show: function () {
      TO.utils.observeReveals(document.getElementById("view-extensibility"));
    }
  };

  TO.views = TO.views || {};
  TO.views.extensibility = view;
})(window.TO = window.TO || {});
