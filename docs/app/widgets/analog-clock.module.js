const setup = () => {
  customElements.define('analog-clock', class extends HTMLElement {
    connectedCallback() {
      zuix.loadComponent(this, 'https://zuixjs.org/app/widgets/analog-clock', undefined, {
        container: this.attachShadow({mode: 'closed'})
      });
    }
  });
};
if (self.zuix === undefined) {
  const zv = '^1.1.27'.substring(1);
  import(`https://cdn.jsdelivr.net/npm/zuix-dist@${zv}/js/zuix.module.min.js`)
      .then(() => setup());
} else setup();

