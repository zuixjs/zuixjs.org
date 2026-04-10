---
layout: side_drawer.liquid
options: mdl sponsor highlight
tags: documentation
group: documentation
order: 0
icon: info_outline
title: About zuix.js
summary: Library and CLI features in brief.
description: zuix.js is a lightweight library for creating component based websites and applications by using standard HTML, CSS and JavaScript.
keywords:
  - documentation
  - introduction
  - about
---

🐝 `zuix.js` is a lightweight library for building modular, component-based websites and applications using standard HTML, CSS, and JavaScript. It provides a set of powerful features designed to dramatically speed up development, code reusability, and maintainability.

**Zero Configuration Required:** It is completely framework-agnostic. You do not need any bundlers, package managers, or complex transpiling pipelines. The magic is built-in, allowing you to integrate it seamlessly into your favorite web development stack.

**Performance First:** Engineered to maximize rendering speed, `zuix.js` automatically lazy-loads components and dependencies only when they enter the viewport or are actively required by the application logic.

**Clean Architecture:** Write truly reusable, standalone Web Components without creating messy, monolithic codebases that mix JavaScript, HTML, and CSS in the same file.

**Ultimate Portability:** Because components are encapsulated and standalone, they can be dynamically loaded from external servers. You can reuse and share UI elements across a network of different websites without ever duplicating a single file!


### Vibe Coding with `zuix.js`

Because `zuix.js` requires zero build tools and uses standard web languages, it is incredibly efficient
for AI code generation.

The **Widget Editor in [HomeGenie 2.0](https://homegenie.it/learn/ai)** leverages this to enable **Vibe Coding**.
By describing your intent in natural language, HomeGenie's AI autonomously generates modular `zuix.js` code
(View, Style, Controller) and instantly deploys complex, reactive Web Components directly to your dashboard.
No manual coding required.

<style>
.showcase-frame {
  justify-self: center;
  background: #111;
  display: block;
  width: 100%;
  max-width: 600px;
  height: 400px;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  margin-bottom: 32px;
  border: 1px solid rgba(255,255,255,0.1);
}
</style>

#### Breakout Arcade Game
Physics, score tracking, and reactive UI updates, all encapsulated in a single component.

```html
<script type="module" src="https://homegenie.it/app/widgets/break-out.module.js"></script>
<games-break-out></games-break-out>
```

<script type="module" src="https://homegenie.it/app/widgets/break-out.module.js"></script>
<games-break-out class="showcase-frame"></games-break-out>


#### Cyberdeck Weather Station
A data-driven, beautifully styled UI component using flex-layouts and custom CSS variables (requires *Material Symbols Outlined*).

```html
<script type="module" src="https://homegenie.it/app/widgets/weather-station.module.js"></script>
<demo-weather-station></demo-weather-station>
```

<script type="module" src="https://homegenie.it/app/widgets/weather-station.module.js"></script>
<demo-weather-station class="showcase-frame"></demo-weather-station>

---

<a id="zuix-cli"></a>
&nbsp;

{% unpre %}
```html
<style>
  main p:first-of-type code {
    border: solid 2px var(--accent-color);
    padding: 2px 4px;
    border-radius: 8px;
    margin-right: 4px;
  }
</style>
```
{% endunpre %}

## Demos and templates

- [HomeGenie Vibe Coding examples](https://homegenie.it/learn/ai)
- [zuix.js playground component](/playground)
- [zKit web enhancing bits](https://zuixjs.github.io/zkit/)
- [Web Starter template](https://zuixjs.github.io/zuix-web-starter/)
- [Web App template](https://zuixjs.github.io/web-app/)
- [News-Blog template](https://zuixjs.github.io/news-blog/)

## Old demos

- [Examples on CodePen](https://codepen.io/genielabs)
