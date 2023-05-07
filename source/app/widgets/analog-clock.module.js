import 'https://cdn.jsdelivr.net/npm/zuix-dist@1.1.23/js/zuix.module.min.js';

customElements.define('analog-clock', class extends HTMLElement {
    connectedCallback() {
        zuix.loadComponent(this, 'https://zuixjs.org/app/widgets/analog-clock', undefined, {
            container: this.attachShadow({mode: 'closed'})
        });
    }
});
