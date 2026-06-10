/**
 * scenarios.js — Context Rot Scenarios view.
 *
 * A searchable, filterable card grid of every scenario. Clicking a card opens
 * a detail popup (modal). Click the overlay, press Esc, or hit the close
 * button to dismiss. Deep-link via #/scenarios/<id> still opens the modal.
 */
(function (TO) {
  "use strict";

  var el = TO.utils.el;
  var store = TO.store;
  var t  = function (k, vars) { return TO.i18n ? TO.i18n.t(k, vars) : k; };

  // ----- modal infrastructure ---------------------------------------------
  var modalStack = [];
  var keydownBound = false;
  var prevFocus = null;

  function bindKeydown() {
    if (keydownBound) return;
    keydownBound = true;
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modalStack.length) {
        closeModal(modalStack[modalStack.length - 1]);
      }
    });
  }

  function openModal(content, opts) {
    bindKeydown();
    opts = opts || {};
    if (modalStack.length === 0) prevFocus = document.activeElement;

    var overlay = el("div", { class: "modal-overlay", role: "dialog",
      "aria-modal": "true" });
    var card = el("div", { class: "modal-card" +
      (opts.size ? " modal-card--" + opts.size : "") });

    var closeBtn = el("button", { type: "button", class: "modal-close",
      "aria-label": t("scenarios.close") });
    closeBtn.innerHTML = "&times;";
    closeBtn.addEventListener("click", function () { closeModal(overlay); });

    card.appendChild(closeBtn);
    card.appendChild(content);
    overlay.appendChild(card);

    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) closeModal(overlay);
    });

    document.body.appendChild(overlay);
    document.body.classList.add("modal-open");
    requestAnimationFrame(function () { overlay.classList.add("is-open"); });

    overlay._onClose = opts.onClose || null;
    modalStack.push(overlay);

    // focus the close button so Esc/Enter feel natural
    requestAnimationFrame(function () { closeBtn.focus(); });
    return overlay;
  }

  function closeModal(overlay) {
    var idx = modalStack.indexOf(overlay);
    if (idx === -1) return;
    modalStack.splice(idx, 1);
    overlay.classList.remove("is-open");
    var cb = overlay._onClose;
    setTimeout(function () {
      if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
      if (modalStack.length === 0) {
        document.body.classList.remove("modal-open");
        if (prevFocus && prevFocus.focus) { try { prevFocus.focus(); } catch (_) {} }
        prevFocus = null;
      }
    }, 220);
    if (cb) cb();
  }

  function closeAllModals(silent) {
    while (modalStack.length) {
      var m = modalStack[modalStack.length - 1];
      if (silent) m._onClose = null;
      closeModal(m);
    }
  }

  // ----- card builders -----------------------------------------------------
  function scenarioCard(scenario, onOpen) {
    var c = el("article", { class: "scenario-card reveal", tabindex: "0",
      role: "button",
      "aria-label": t("scenarios.open") + ": " + scenario.title }, [
      el("div", { class: "sc-card-top" }, [
        el("span", { class: "sc-cat", text: scenario.category })
      ]),
      el("h3", { class: "sc-title", text: scenario.title }),
      el("p", { class: "sc-tagline", text: scenario.tagline }),
      el("div", { class: "sc-card-foot" }, [
        el("span", { class: "sc-open", text: t("scenarios.open") })
      ])
    ]);
    function open() { onOpen(scenario); }
    c.addEventListener("click", open);
    c.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
    });
    return c;
  }

  // ----- modal content -----------------------------------------------------
  function buildDetailContent(s) {
    var whyHigh = el("ul", { class: "why-list" }, (s.whyHigh || []).map(function (w) {
      return el("li", { text: w });
    }));

    return el("div", { class: "modal-content" }, [
      el("div", { class: "modal-head" }, [
        el("span", { class: "sc-cat", text: s.category }),
        el("h2", { class: "modal-title", text: s.title }),
        el("p", { class: "modal-lead", text: s.tagline })
      ]),
      el("div", { class: "detail-grid detail-grid--modal" }, [
        el("div", { class: "detail-main" }, [
          el("h4", { class: "detail-subhead", text: t("scenarios.problem") }),
          el("p",  { class: "detail-text",   text: s.problem }),
          el("h4", { class: "detail-subhead", text: t("scenarios.whyHigh") }),
          whyHigh
        ]),
        el("aside", { class: "detail-side" }, [
          el("div", { class: "detail-card detail-card--accent" }, [
            el("h4", { class: "detail-subhead", text: t("scenarios.takeaway") }),
            el("p",  { class: "detail-takeaway", text: s.takeaway })
          ]),
          el("div", { class: "detail-card" }, [
            el("h4", { class: "detail-subhead", text: t("scenarios.modelFit") }),
            el("p",  { class: "detail-text", text: s.modelFit })
          ])
        ])
      ])
    ]);
  }

  function openDetailModal(scenario) {
    return openModal(buildDetailContent(scenario), { size: "medium" });
  }

  // ----- main view ---------------------------------------------------------
  var view = {
    id: "scenarios",
    _grid: null,
    _empty: null,
    _chipRow: null,

    mount: function (root) {
      var cfg = TO.data.uiConfig;

      // ---- Browser: search + filter chips + scenario grid ----
      var search = el("input", { class: "sc-search", type: "search",
        placeholder: t("scenarios.search"),
        "aria-label": t("scenarios.searchAria") });
      search.addEventListener("input", function () {
        store.set("scenarioSearch", search.value.trim().toLowerCase());
      });

      var cats = ["all"].concat(cfg.categories);
      var chipRow = el("div", { class: "filter-row", role: "tablist",
        "aria-label": t("scenarios.filterAria") });
      cats.forEach(function (cat) {
        var chip = el("button", { type: "button", class: "chip",
          "data-cat": cat,
          text: cat === "all" ? t("scenarios.all") : cat });
        chip.addEventListener("click", function () { store.set("scenarioFilter", cat); });
        chipRow.appendChild(chip);
      });

      var grid  = el("div", { class: "scenario-grid" });
      var empty = el("p", { class: "empty-note", text: t("scenarios.empty") });
      empty.style.display = "none";

      view._grid = grid;
      view._empty = empty;
      view._chipRow = chipRow;

      var browser = el("section", { class: "section" }, [
        el("div", { class: "container" }, [
          el("div", { class: "section-head reveal" }, [
            el("span", { class: "eyebrow", text: t("scenarios.eyebrow") }),
            el("h2",   { text: t("scenarios.title") }),
            el("p",    { class: "section-lead", text: t("scenarios.lead") })
          ]),
          el("div", { class: "sc-controls reveal" }, [chipRow, search]),
          grid, empty
        ])
      ]);

      root.appendChild(browser);

      function renderGallery() {
        var filter = store.get("scenarioFilter") || "all";
        var q = store.get("scenarioSearch") || "";
        TO.utils.qsa(".chip", chipRow).forEach(function (ch) {
          ch.classList.toggle("is-active", ch.dataset.cat === filter);
        });
        var list = TO.data.scenarios.filter(function (s) {
          var catOk = filter === "all" || s.category === filter;
          var haystack = (s.title + " " + s.tagline + " " + s.problem + " "
            + s.category + " " + (s.whyHigh || []).join(" ") + " "
            + (s.takeaway || "") + " " + (s.recommendation || "")
            ).toLowerCase();
          var qOk = !q || haystack.indexOf(q) !== -1;
          return catOk && qOk;
        });
        TO.utils.clear(grid);
        list.forEach(function (s) {
          grid.appendChild(scenarioCard(s, openDetailModal));
        });
        empty.style.display = list.length ? "none" : "block";
        TO.utils.observeReveals(grid);
      }

      store.subscribe("scenarioFilter", renderGallery);
      store.subscribe("scenarioSearch", renderGallery);
      if (!store.get("scenarioFilter")) store.set("scenarioFilter", "all");
      renderGallery();
    },

    /** Deep-link support: #/scenarios/<id> opens the detail modal directly. */
    show: function (param) {
      var root = document.getElementById("view-scenarios");
      TO.utils.observeReveals(root);
      closeAllModals(true);
      if (param) {
        var s = TO.data.scenarios.filter(function (x) { return x.id === param; })[0];
        if (s) openDetailModal(s);
      }
    }
  };

  TO.views = TO.views || {};
  TO.views.scenarios = view;
})(window.TO = window.TO || {});

