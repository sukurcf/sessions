/**
 * utils.js — Small, dependency-free helpers shared across views.
 * Exposed on TO.utils. No framework, no build step.
 */
(function (TO) {
  "use strict";

  var utils = {};

  /** Create an element with attributes and children in one call. */
  utils.el = function (tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (key) {
        if (key === "class") node.className = attrs[key];
        else if (key === "html") node.innerHTML = attrs[key];
        else if (key === "text") node.textContent = attrs[key];
        else if (key.indexOf("on") === 0 && typeof attrs[key] === "function") {
          node.addEventListener(key.slice(2).toLowerCase(), attrs[key]);
        } else if (attrs[key] != null && attrs[key] !== false) {
          node.setAttribute(key, attrs[key]);
        }
      });
    }
    if (children != null) {
      (Array.isArray(children) ? children : [children]).forEach(function (child) {
        if (child == null) return;
        node.appendChild(typeof child === "string" ? document.createTextNode(child) : child);
      });
    }
    return node;
  };

  /** Query helpers. */
  utils.qs = function (sel, root) { return (root || document).querySelector(sel); };
  utils.qsa = function (sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  };

  /** Remove every child of a node. */
  utils.clear = function (node) {
    while (node && node.firstChild) node.removeChild(node.firstChild);
    return node;
  };

  /** Escape text destined for innerHTML. */
  utils.escape = function (str) {
    var d = document.createElement("div");
    d.textContent = str == null ? "" : String(str);
    return d.innerHTML;
  };

  /** Format a number with locale-aware grouping (via Intl.NumberFormat when the
   *  i18n shim is loaded; falls back to a plain en-US regex grouping otherwise). */
  utils.formatNumber = function (n, decimals) {
    if (n == null || isNaN(n)) return "0";
    if (TO.i18n && TO.i18n.format) {
      var opts = decimals != null
        ? { minimumFractionDigits: decimals, maximumFractionDigits: decimals }
        : { maximumFractionDigits: 0 };
      return TO.i18n.format.number(Number(n), opts);
    }
    var fixed = decimals != null ? Number(n).toFixed(decimals) : Math.round(n).toString();
    var parts = fixed.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  };

  /** Format a USD amount, scaling precision to magnitude. Locale-aware
   *  currency formatting via Intl when available — symbol position, decimal
   *  marker, and grouping all follow the active language. */
  utils.formatUsd = function (n) {
    if (TO.i18n && TO.i18n.format) return TO.i18n.format.usd(n);
    if (n == null || isNaN(n)) return "$0.00";
    var abs = Math.abs(n);
    var decimals = abs >= 100 ? 2 : abs >= 1 ? 2 : abs >= 0.01 ? 4 : 6;
    return "$" + utils.formatNumber(n, decimals);
  };

  /** Compact token count: 12500 -> "12.5k". */
  utils.formatTokens = function (n) {
    if (TO.i18n && TO.i18n.format) return TO.i18n.format.tokens(n);
    if (n == null || isNaN(n)) return "0";
    if (Math.abs(n) >= 1e6) return utils.formatNumber(n / 1e6, 2) + "M";
    if (Math.abs(n) >= 1e3) return utils.formatNumber(n / 1e3, 1) + "k";
    return utils.formatNumber(n);
  };

  /** clamp a number into [min, max]. */
  utils.clamp = function (v, min, max) { return Math.min(max, Math.max(min, v)); };

  /** Animate a number from 0 to `target` into `node`. Respects reduced-motion. */
  utils.countUp = function (node, target, opts) {
    opts = opts || {};
    var decimals = opts.decimals || 0;
    var suffix = opts.suffix || "";
    var prefix = opts.prefix || "";
    var duration = opts.duration || 1100;
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      node.textContent = prefix + utils.formatNumber(target, decimals) + suffix;
      return;
    }
    var start = null;
    function step(ts) {
      if (start === null) start = ts;
      var p = utils.clamp((ts - start) / duration, 0, 1);
      var eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      node.textContent = prefix + utils.formatNumber(target * eased, decimals) + suffix;
      if (p < 1) requestAnimationFrame(step);
      else node.textContent = prefix + utils.formatNumber(target, decimals) + suffix;
    }
    requestAnimationFrame(step);
  };

  /**
   * Reveal-on-scroll. Add class `reveal` to elements, then call observe(root).
   * Elements gain `is-visible` as they enter the viewport.
   */
  utils.observeReveals = function (root) {
    var targets = utils.qsa(".reveal", root);
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      targets.forEach(function (t) { t.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    targets.forEach(function (t, i) {
      t.style.transitionDelay = Math.min(i * 55, 440) + "ms";
      io.observe(t);
    });
  };

  /** Stable slug from arbitrary text. */
  utils.slug = function (str) {
    return String(str).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  };

  TO.utils = utils;
})(window.TO = window.TO || {});
