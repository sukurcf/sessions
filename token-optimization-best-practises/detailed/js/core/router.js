/**
 * router.js — Hash-based view router.
 *
 * Hash routing works identically from file:// and from a static host, so the
 * app needs no server-side rewrite rules. Format: #/view  or  #/view/param.
 */
(function (TO) {
  "use strict";

  var router = {
    routes: {},   // viewId -> view module
    fallback: "home",
    onChange: null // fn(viewId, param) invoked after a route resolves
  };

  /** Register a view module under its id. */
  router.register = function (viewId, viewModule) {
    router.routes[viewId] = viewModule;
  };

  function parseHash() {
    var raw = (location.hash || "").replace(/^#\/?/, "");
    var parts = raw.split("/").filter(Boolean);
    return { view: parts[0] || router.fallback, param: parts[1] || null };
  }

  /** Resolve the current hash to a view; called on load and on hashchange. */
  router.resolve = function () {
    var route = parseHash();
    var viewId = router.routes[route.view] ? route.view : router.fallback;
    if (router.onChange) router.onChange(viewId, route.param);
  };

  /** Navigate programmatically. */
  router.go = function (viewId, param) {
    var hash = "#/" + viewId + (param ? "/" + param : "");
    if (location.hash === hash) router.resolve();   // same hash: re-resolve manually
    else location.hash = hash;
  };

  router.start = function () {
    window.addEventListener("hashchange", router.resolve);
    router.resolve();
  };

  TO.router = router;
})(window.TO = window.TO || {});
