/* eslint-disable quotes */
(function() {
  zuix.store('config', {
    "title": "zUIx.js presentation and documentation website.",
    "googleSiteId": "UA-92520304-1",
    "siteMapUrl": "https://zuixjs.org",
    "baseUrl": "/",
    "resourcePath": "/app/",
    "libraryPath": {
      "@lib": "https://zuixjs.github.io/zkit/lib/",
      "@hgui": "https://genielabs.github.io/homegenie-web-ui/app/",
      "@cdnjs": "https://cdnjs.cloudflare.com/ajax/libs/"
    },
    "zuixjs.github.io": {
      "baseUrl": "/zuixjs.org/",
      "resourcePath": "/zuixjs.org/app/"
    },
    "zuixjs.org": {
      "resourcePath": "/app/"
    }
  });
  // Check that service workers are registered
  const app = zuix.store('config');
  if ('serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener('load', () => {
      navigator.serviceWorker.register(app.baseUrl + 'service-worker.js');
    });
  }
})();
