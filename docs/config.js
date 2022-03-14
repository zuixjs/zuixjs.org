/* eslint-disable quotes */
(function() {
  zuix.store('config', {
    "title": "zUIx.js presentation and documentation website.",
    "baseUrl": "/",
    "resourcePath": "/app/",
    "libraryPath": {
      "@lib": "/lib/1.1/",
      "@hgui": "https://genielabs.github.io/homegenie-web-ui/app/",
      "@cdnjs": "https://cdnjs.cloudflare.com/ajax/libs/"
    },
    "zuixjs.github.io": {
      "baseUrl": "/zuixjs.org/",
      "resourcePath": "/zuixjs.org/app/",
      "libraryPath": {
        "@lib": "/zuixjs.org/lib/1.1/"
      }
    },
    "siteMapUrl": "https://zuixjs.org",
    "googleSiteId": "UA-92520304-1"
  });
  // Check that service workers are registered
  if ('serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js');
    });
  }
})();
