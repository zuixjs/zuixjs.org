/* eslint-disable quotes */
(function() {
    zuix.store("config", {
        "title": "zUIx.js presentation and documentation website.",
        "googleSiteId": "UA-92520304-1",
        "resourcePath": "./app/",
        "libraryPath": "https://zuixjs.github.io/zkit/lib/",
        "zuixjs.github.io": {
                "resourcePath": "/zuix/app/",
                "libraryPath": "https://zuixjs.github.io/zkit/lib/"
        },
        "zuixjs.org": {
                "resourcePath": "/zuix/app/",
                "libraryPath": "https://zuixjs.github.io/zkit/lib/"
        }
});

    // Check that service workers are registered
    if ('serviceWorker' in navigator) {
        // Use the window load event to keep the page load performant
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./service-worker.js');
        });
    }
})();
