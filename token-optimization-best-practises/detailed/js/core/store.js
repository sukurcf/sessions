/**
 * store.js — Tiny observable state container.
 *
 * Single source of UI state. Views subscribe to the keys they care about and
 * re-render on change. Keeps view modules decoupled — they never reach into
 * each other, only into the store.
 */
(function (TO) {
  "use strict";

  var THEME_KEY = "token-optimizer.theme";

  var state = {
    view: null,            // active view id
    theme: "dark",         // 'dark' | 'light'
    activeScenario: null,  // scenario id open in the detail modal
    scenarioFilter: "all", // category filter in the gallery
    scenarioSearch: "",    // search query in the gallery
    activePillar: null     // pillar id selected in the diagram
  };

  var listeners = {};       // key -> [fn]

  function emit(key) {
    (listeners[key] || []).forEach(function (fn) { fn(state[key], state); });
    (listeners["*"] || []).forEach(function (fn) { fn(state); });
  }

  var store = {
    get: function (key) { return key ? state[key] : state; },

    set: function (key, value) {
      if (state[key] === value) return;
      state[key] = value;
      emit(key);
    },

    /** Subscribe to a state key (or '*' for any change). Returns an unsubscribe fn. */
    subscribe: function (key, fn) {
      (listeners[key] = listeners[key] || []).push(fn);
      return function () {
        listeners[key] = (listeners[key] || []).filter(function (f) { return f !== fn; });
      };
    },

    /** Theme is persisted; everything else is session-only. */
    loadTheme: function (fallback) {
      var saved;
      try { saved = localStorage.getItem(THEME_KEY); } catch (e) { saved = null; }
      state.theme = saved === "light" || saved === "dark" ? saved : (fallback || "dark");
      return state.theme;
    },

    toggleTheme: function () {
      state.theme = state.theme === "dark" ? "light" : "dark";
      try { localStorage.setItem(THEME_KEY, state.theme); } catch (e) { /* storage off */ }
      emit("theme");
      return state.theme;
    }
  };

  TO.store = store;
})(window.TO = window.TO || {});
