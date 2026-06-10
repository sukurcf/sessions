(function (window) {
  "use strict";

  var TO = window.TO = window.TO || {};
  var appInsights = null;

  function getConnectionString() {
    var env = window.TO_ENV || {};
    return env.APPLICATIONINSIGHTS_CONNECTION_STRING || "";
  }

  function isLocalHost() {
    return /^(localhost|127\.0\.0\.1|\[::1\])$/.test(window.location.hostname);
  }

  function init() {
    var connectionString = getConnectionString();

    if (appInsights || isLocalHost() || !connectionString || !window.Microsoft || !window.Microsoft.ApplicationInsights) {
      return appInsights;
    }

    appInsights = new window.Microsoft.ApplicationInsights.ApplicationInsights({
      config: {
        connectionString: connectionString,
        disableAutoPageViewTracking: true,
        enableAutoRouteTracking: false
      }
    });
    appInsights.loadAppInsights();
    window.appInsights = appInsights;
    return appInsights;
  }

  function trackPageView(name, properties) {
    var client = init();
    if (!client) return;

    client.trackPageView({
      name: name || document.title,
      uri: window.location.href,
      properties: Object.assign({
        host: window.location.hostname,
        path: window.location.pathname,
        hash: window.location.hash || ""
      }, properties || {})
    });

    if (typeof client.flush === "function") {
      client.flush();
    }
  }

  TO.analytics = {
    init: init,
    trackPageView: trackPageView
  };
})(window);