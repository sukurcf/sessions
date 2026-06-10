/**
 * i18n.js — Tiny localization shim for a no-build, file://-safe SPA.
 *
 * Exposes window.TO.i18n with:
 *   register(lng, catalog)   — merge a key→string map for a language
 *   t(key, vars)             — resolve a key with {{var}} interpolation
 *                              and fallback chain: current → 'en' → key
 *   changeLanguage(lng)      — persist + emit 'langchange' on window
 *   currentLng()             — active BCP-47 code
 *   applyTo(root)            — fill [data-i18n] / [data-i18n-html] in a subtree
 *   format.number / .usd / .tokens — locale-aware number formatters
 *
 * Catalogs ship as JS files (so the page works under file://) — each calls
 * TO.i18n.register("xx", { ... }) before the app boots.
 *
 * Language list lives in TO.i18n.supported; "ar" is the only RTL entry.
 */
(function (TO) {
  "use strict";

  var STORAGE_KEY = "to.lang";
  var FALLBACK = "en";
  var SUPPORTED = ["en", "es", "fr", "de", "ja", "zh-CN", "pt-BR", "ar"];
  var RTL = { ar: true, he: true, fa: true, ur: true };

  var catalogs = {};        // { en: {...}, es: {...}, ... }
  var current = FALLBACK;

  function getNested(obj, key) {
    if (!obj) return undefined;
    if (obj[key] != null) return obj[key];     // flat keys allowed too
    var parts = key.split(".");
    var node = obj;
    for (var i = 0; i < parts.length; i++) {
      if (node == null || typeof node !== "object") return undefined;
      node = node[parts[i]];
    }
    return node;
  }

  function interpolate(str, vars) {
    if (typeof str !== "string" || !vars) return str;
    return str.replace(/\{\{\s*(\w+)\s*\}\}/g, function (_, name) {
      return vars[name] != null ? String(vars[name]) : "";
    });
  }

  function normalize(lng) {
    if (!lng) return FALLBACK;
    if (SUPPORTED.indexOf(lng) !== -1) return lng;
    var base = String(lng).split("-")[0].toLowerCase();
    // common region maps
    if (base === "zh") return "zh-CN";
    if (base === "pt") return "pt-BR";
    if (SUPPORTED.indexOf(base) !== -1) return base;
    return FALLBACK;
  }

  function deepMerge(target, src) {
    Object.keys(src || {}).forEach(function (k) {
      if (src[k] != null && typeof src[k] === "object" && !Array.isArray(src[k])
          && typeof target[k] === "object" && target[k] != null && !Array.isArray(target[k])) {
        deepMerge(target[k], src[k]);
      } else {
        target[k] = src[k];
      }
    });
    return target;
  }

  var i18n = {
    supported: SUPPORTED,
    fallback: FALLBACK,

    register: function (lng, catalog) {
      if (!lng || !catalog) return;
      catalogs[lng] = catalogs[lng] || {};
      deepMerge(catalogs[lng], catalog);
    },

    currentLng: function () { return current; },

    isRtl: function (lng) { return !!RTL[String(lng || current).split("-")[0]]; },

    t: function (key, vars) {
      if (!key) return "";
      var val = getNested(catalogs[current], key);
      if (val == null && current !== FALLBACK) val = getNested(catalogs[FALLBACK], key);
      if (val == null) return key;                  // last resort: the key itself
      return interpolate(val, vars);
    },

    /**
     * Try a key — return undefined if missing (no fallback to key). Useful for
     * data refactors where we want to keep the original literal if the key
     * isn't translated yet.
     */
    tryT: function (key, vars) {
      if (!key) return undefined;
      var val = getNested(catalogs[current], key);
      if (val == null && current !== FALLBACK) val = getNested(catalogs[FALLBACK], key);
      if (val == null) return undefined;
      return interpolate(val, vars);
    },

    changeLanguage: function (lng) {
      var next = normalize(lng);
      if (next === current) return;
      current = next;
      try { localStorage.setItem(STORAGE_KEY, current); } catch (e) {}
      document.documentElement.lang = current;
      document.documentElement.dir = i18n.isRtl(current) ? "rtl" : "ltr";
      i18n.applyTo(document);
      window.dispatchEvent(new CustomEvent("langchange", { detail: { lng: current } }));
    },

    /** Walk a subtree and fill [data-i18n] / [data-i18n-html] tokens. */
    applyTo: function (root) {
      root = root || document;
      var nodes = root.querySelectorAll ? root.querySelectorAll("[data-i18n]") : [];
      for (var i = 0; i < nodes.length; i++) {
        var el = nodes[i];
        var tokens = el.getAttribute("data-i18n").split(";");
        for (var j = 0; j < tokens.length; j++) {
          var raw = tokens[j].trim();
          if (!raw) continue;
          var m = raw.match(/^\[(.+?)\](.+)$/);
          if (m) {
            el.setAttribute(m[1], i18n.t(m[2]));
          } else {
            el.textContent = i18n.t(raw);
          }
        }
      }
      var htmlNodes = root.querySelectorAll ? root.querySelectorAll("[data-i18n-html]") : [];
      for (var k = 0; k < htmlNodes.length; k++) {
        htmlNodes[k].innerHTML = i18n.t(htmlNodes[k].getAttribute("data-i18n-html"));
      }
    },

    /** Locale-aware number formatters. */
    format: {
      number: function (n, opts) {
        if (n == null || isNaN(n)) return "0";
        try { return new Intl.NumberFormat(current, opts || {}).format(n); }
        catch (e) { return String(n); }
      },
      usd: function (n) {
        if (n == null || isNaN(n)) {
          try { return new Intl.NumberFormat(current, { style: "currency", currency: "USD" }).format(0); }
          catch (e) { return "$0.00"; }
        }
        var abs = Math.abs(n);
        var min = abs >= 1 ? 2 : abs >= 0.01 ? 4 : 6;
        try {
          return new Intl.NumberFormat(current, {
            style: "currency", currency: "USD",
            minimumFractionDigits: min, maximumFractionDigits: min
          }).format(n);
        } catch (e) { return "$" + n.toFixed(min); }
      },
      tokens: function (n) {
        if (n == null || isNaN(n)) return "0";
        if (Math.abs(n) >= 1e6) return i18n.format.number(n / 1e6, { maximumFractionDigits: 2 }) + "M";
        if (Math.abs(n) >= 1e3) return i18n.format.number(n / 1e3, { maximumFractionDigits: 1 }) + "k";
        return i18n.format.number(n, { maximumFractionDigits: 0 });
      }
    },

    /** Boot: pick the best available language. Called by app.init(). */
    init: function () {
      var stored = null;
      try { stored = localStorage.getItem(STORAGE_KEY); } catch (e) {}
      var chosen = normalize(stored || (navigator.language || navigator.userLanguage));
      current = chosen;
      document.documentElement.lang = current;
      document.documentElement.dir = i18n.isRtl(current) ? "rtl" : "ltr";
      i18n.applyTo(document);
    }
  };

  TO.i18n = i18n;
})(window.TO = window.TO || {});
