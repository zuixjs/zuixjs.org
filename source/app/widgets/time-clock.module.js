const setup = () => {
  customElements.define('time-clock', class extends HTMLElement {
    connectedCallback() {
      zuix.loadComponent(this, '{{ app.siteRoot }}app/widgets/time-clock', undefined, {
        container: this.attachShadow({mode: 'closed'})
      });
    }
  });
};
if (self.zuix === undefined) {
  const zv = '{{ pkg.dependencies["zuix-dist"] }}'.substring(1);
  import(`https://cdn.jsdelivr.net/npm/zuix-dist@${zv}/js/zuix.module.min.js`)
      .then(() => setup());
} else setup();
