import 'https://cdn.jsdelivr.net/npm/zuix-dist@1.1.7/js/zuix.module.min.js';

customElements.define('time-clock', class extends HTMLElement {
  connectedCallback() {
    zuix.loadComponent(this, 'https://zuixjs.org/app/widgets/time-clock', '', {
      container: this.attachShadow({mode: 'closed'})
    });
  }
});
