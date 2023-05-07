/* eslint-disable quotes */
(function() {
  zuix.store('config', {
    "title": "zuix.js",
    "subtitle": "Presentation and documentation website.",
    "language": "en",
    "baseUrl": "/",
    "resourcePath": "/app/",
    "libraryPath": {
      "@lib": "https://zuixjs.github.io/zkit/lib/1.2/",
      "@hgui": "https://genielabs.github.io/homegenie-web-ui/app/",
      "@cdnjs": "https://cdnjs.cloudflare.com/ajax/libs/"
    },
    "zuixjs.github.io": {
      "baseUrl": "/zuixjs.org/",
      "resourcePath": "/zuixjs.org/app/"
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
