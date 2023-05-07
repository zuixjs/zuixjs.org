import 'https://cdn.jsdelivr.net/npm/zuix-dist@1.1.24/js/zuix.module.min.js';

customElements.define('time-clock', class extends HTMLElement {
  connectedCallback() {
    zuix.loadComponent(this, 'https://zuixjs.org/app/widgets/time-clock', undefined, {
      container: this.attachShadow({mode: 'closed'})
    });
  }
});
