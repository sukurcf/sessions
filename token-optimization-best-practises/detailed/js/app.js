/**
 * app.js — Application bootstrap.
 * Builds the chrome (header, footer), registers views, wires the router, and
 * manages view lifecycle. Loaded last, after data + core + views.
 */
(function (TO) {
  "use strict";

  var el = TO.utils.el;
  var store = TO.store;
  // i18n helpers — gracefully no-op if the shim never loaded.
  var t = function (k, vars) { return TO.i18n ? TO.i18n.t(k, vars) : k; };

  // Endonyms (each language in its own script) for the picker.
  var LANG_LABELS = {
    "en":    "English",
    "es":    "Espa\u00f1ol",
    "fr":    "Fran\u00e7ais",
    "de":    "Deutsch",
    "ja":    "\u65e5\u672c\u8a9e",
    "zh-CN": "\u4e2d\u6587 (Chinese \u00b7 Mandarin)",
    "pt-BR": "Portugu\u00eas (BR)",
    "ar":    "\u0627\u0644\u0639\u0631\u0628\u064a\u0629"
  };

  function buildLangSwitcher() {
    if (!TO.i18n) return null;
    var sel = el("select", {
      class: "lang-switcher",
      "aria-label": t("app.language"),
      title: t("app.language")
    });
    (TO.i18n.supported || ["en"]).forEach(function (lng) {
      var opt = document.createElement("option");
      opt.value = lng;
      opt.textContent = LANG_LABELS[lng] || lng;
      if (lng === TO.i18n.currentLng()) opt.selected = true;
      sel.appendChild(opt);
    });
    sel.addEventListener("change", function () {
      TO.i18n.changeLanguage(sel.value);
    });
    return sel;
  }

  var app = {
    root: null,
    viewRoot: null,
    mounted: {} // viewId -> true once a view has been mounted
  };

  /** Inline SVG logo mark — a token compressing through an optimizer. */
  function logoMark() {
    var svgNS = "http://www.w3.org/2000/svg";
    var s = document.createElementNS(svgNS, "svg");
    s.setAttribute("viewBox", "0 0 32 32");
    s.setAttribute("class", "brand-mark");
    s.setAttribute("aria-hidden", "true");
    s.innerHTML =
      '<defs><linearGradient id="brandGrad" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0" stop-color="#22d3ee"/><stop offset="1" stop-color="#818cf8"/>' +
      '</linearGradient></defs>' +
      '<circle cx="16" cy="16" r="14" fill="none" stroke="url(#brandGrad)" stroke-width="2"/>' +
      '<path d="M9 12 H23 M9 16 H19 M9 20 H15" stroke="url(#brandGrad)" ' +
      'stroke-width="2.4" stroke-linecap="round"/>';
    return s;
  }

  function buildHeader() {
    var cfg = TO.data.uiConfig;

    var brand = el("a", {
      class: "brand",
      href: "#/home",
      "aria-label": t("app.homeAria", { name: cfg.app.name })
    }, [
      logoMark(),
      el("span", { class: "brand-name" }, [
        el("strong", { text: "GitHub copilot " }),
        el("span", { text: "token optimizer" })
      ])
    ]);

    var navLinks = cfg.nav.map(function (item) {
      var a = el("a", { class: "nav-link", href: "#/" + item.view, "data-view": item.view,
        text: t("nav." + item.view) || item.label });
      a.addEventListener("click", function () { app.closeMobileNav(); });
      return a;
    });
    var nav = el("nav", {
      class: "main-nav", id: "main-nav",
      "aria-label": t("app.primaryNav")
    }, navLinks);

    var quickGuideLink = el("a", {
      class: "quick-guide-link",
      href: "../index.html",
      text: t("app.backToQuickGuide"),
      "aria-label": t("app.backToQuickGuide")
    });

    var langSwitcher = buildLangSwitcher();

    var themeBtn = el("button", { class: "theme-toggle", type: "button",
      "aria-label": t("app.toggleTheme"), title: t("app.toggleTheme") });
    themeBtn.innerHTML = '<span class="theme-icon theme-icon--sun">☀</span>' +
      '<span class="theme-icon theme-icon--moon">☾</span>';
    themeBtn.addEventListener("click", function () { store.toggleTheme(); });

    var navToggle = el("button", { class: "nav-toggle", type: "button",
      "aria-label": t("app.toggleNav"), "aria-expanded": "false" });
    navToggle.innerHTML = "<span></span><span></span><span></span>";
    navToggle.addEventListener("click", function () {
      var open = app.root.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    var inspiredLink = el("a", {
      class: "inspired-link",
      href: "https://ashy-dune-0b4215a0f.7.azurestaticapps.net/",
      target: "_blank",
      rel: "noopener noreferrer",
      style: "font-size:.72rem;font-weight:600;color:var(--text-dim);text-decoration:none;opacity:.7;transition:opacity .2s;white-space:nowrap;"
    });
    inspiredLink.innerHTML = 'Inspired by <span style="text-decoration:underline;color:var(--primary);">ashy-dune-0b4215a0f</span>';
    inspiredLink.addEventListener("mouseenter", function () { inspiredLink.style.opacity = "1"; });
    inspiredLink.addEventListener("mouseleave", function () { inspiredLink.style.opacity = ".7"; });

    var actions = [inspiredLink, quickGuideLink];
    if (langSwitcher) actions.push(langSwitcher);
    actions.push(themeBtn, navToggle);

    return el("header", { class: "site-header" }, [
      el("div", { class: "header-inner container" }, [
        brand,
        nav,
        el("div", { class: "header-actions" }, actions)
      ])
    ]);
  }

  function buildFooter() {
    var f = TO.data.uiConfig.footer;
    var sourceLinks = f.sources.map(function (s) {
      return el("a", { href: s.url, target: "_blank", rel: "noopener noreferrer", text: s.label });
    });
    sourceLinks.unshift(el("a", {
      href: "../index.html",
      text: t("app.backToQuickGuide"),
      "aria-label": t("app.backToQuickGuide")
    }));
    var links = el("div", { class: "footer-links" }, sourceLinks);
    var inspiredEl = null;
    if (f.inspiredBy) {
      inspiredEl = el("p", { class: "footer-note", style: "margin-top:.5rem;font-size:.82rem;opacity:.7;" });
      inspiredEl.innerHTML = 'Inspired by <a href="' + f.inspiredBy.url + '" target="_blank" rel="noopener noreferrer" style="color:var(--accent,#58a6ff);text-decoration:underline;">' + f.inspiredBy.label + '</a>';
    }
    var footerInnerChildren = [
      el("p", { class: "footer-note", text: t("footer.note") || f.note }),
      links
    ];
    if (inspiredEl) footerInnerChildren.push(inspiredEl);
    return el("footer", { class: "site-footer" }, [
      el("div", { class: "container footer-inner" }, footerInnerChildren),
      el("div", { class: "container footer-disclaimer" }, [
        el("p", { class: "footer-note footer-disclaimer-text", text: (TO.i18n && TO.i18n.tryT && TO.i18n.tryT("footer.disclaimer")) || "This content has been authored by Microsoft Asia Developer GBB and is based on publicly available GitHub Copilot documentation. It has not been validated across all supported configurations. While the team makes continuous efforts to stay aligned with the latest documentation, users are advised to verify details against official GitHub documentation before making any decisions." })
      ])
    ]);
  }

  app.closeMobileNav = function () {
    if (app.root) app.root.classList.remove("nav-open");
    var n = TO.utils.qs(".nav-toggle");
    if (n) n.setAttribute("aria-expanded", "false");
  };

  /** Lifecycle: show one view, mount it on first visit. */
  app.activateView = function (viewId, param) {
    var view = TO.views[viewId];
    if (!view) return;

    var section = document.getElementById("view-" + viewId);
    if (!section) {
      section = el("section", { class: "view", id: "view-" + viewId });
      app.viewRoot.appendChild(section);
    }
    if (!app.mounted[viewId]) {
      view.mount(section);
      app.mounted[viewId] = true;
    }

    TO.utils.qsa(".view", app.viewRoot).forEach(function (v) {
      v.classList.toggle("view--active", v === section);
    });

    store.set("view", viewId);
    if (view.show) view.show(param);

    // scenario detail manages its own scroll; everything else jumps to top
    if (!(viewId === "scenarios" && param)) {
      window.scrollTo({ top: 0, behavior: app.firstRoute ? "auto" : "smooth" });
    }
    app.firstRoute = false;

    var navLabel = t("nav." + viewId);
    document.title = (t("app.title") && viewId === (TO.data.uiConfig.app.defaultView || "home"))
      ? t("app.title")
      : (t("app.name") || "Token-optimizer") + " \u00b7 " + (navLabel || viewId);

    TO.utils.qsa(".nav-link").forEach(function (a) {
      a.classList.toggle("is-active", a.dataset.view === viewId);
    });
    app.closeMobileNav();

    if (TO.analytics) {
      TO.analytics.trackPageView("Detailed: " + (navLabel || viewId), {
        section: "detailed",
        view: viewId,
        param: param || ""
      });
    }
  };

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
  }

  /** Rebuild chrome and re-mount the active view after a language change.
   *  Views read translated strings during mount, so the cleanest way to flip
   *  every label is to throw away cached DOM and re-run mount(). */
  app.rebuildOnLangChange = function () {
    if (!app.root) return;
    var oldHeader = TO.utils.qs(".site-header", app.root);
    var oldFooter = TO.utils.qs(".site-footer", app.root);
    if (oldHeader) app.root.replaceChild(buildHeader(), oldHeader);
    if (oldFooter) app.root.replaceChild(buildFooter(), oldFooter);
    if (app.viewRoot) TO.utils.clear(app.viewRoot);
    app.mounted = {};
    if (TO.router && TO.router.resolve) TO.router.resolve();
  };

  app.init = function () {
    app.root = document.getElementById("app");
    app.firstRoute = true;

    // Pick the language first so chrome strings render translated.
    if (TO.i18n) TO.i18n.init();

    applyTheme(store.loadTheme(TO.data.uiConfig.app.defaultTheme));
    store.subscribe("theme", applyTheme);

    app.root.appendChild(buildHeader());
    var main = el("main", { class: "site-main", id: "view-root" });
    app.viewRoot = main;
    app.root.appendChild(main);
    app.root.appendChild(buildFooter());

    // register every view module with the router
    Object.keys(TO.views).forEach(function (id) {
      TO.router.register(id, TO.views[id]);
    });
    TO.router.fallback = TO.data.uiConfig.app.defaultView || "home";
    TO.router.onChange = app.activateView;
    TO.router.start();

    window.addEventListener("langchange", app.rebuildOnLangChange);

    document.body.classList.add("app-ready");
  };

  // boot once the DOM is parsed
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", app.init);
  } else {
    app.init();
  }

  TO.app = app;
})(window.TO = window.TO || {});
