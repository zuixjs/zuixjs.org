---
layout: side_drawer.liquid
options: mdl sponsor
tags: documentation
group: documentation
order: 1
icon: info_outline
title: About zuix.js
summary: Library and CLI features in brief.
description: zuix.js is a lightweight library for creating component based websites and applications by using standard HTML, CSS and JavaScript.
keywords:
- documentation
- introduction
- about
---

🐝 `zuix.js` is a lightweight library for creating modular and component based websites and applications
by using standard HTML, CSS and JavaScript.

By default, components, resources and dependencies are loaded only when they are actually being used, and this also applies
to any single functionality of a component that involves loading of external resources or dependencies.

Since it's possible to load components over existing HTML content, web pages can be designed so that a page can even work
with JavaScript disabled, and where JavaScript is enabled, the same page is brought to life with components that use the
very page content as its data source.

Components can also be loaded from external websites, making infinite the possibilities in sharing and reusing them
across a network of sites.

Write once and reuse anywhere without ever duplicating a single file!

**Features in brief**
- Components loading either from a local or remote servers
- View templates (featuring hot swapping)
- Data binding
- Lazy loading
- Events, Behaviors, Refresh *@* Handlers, Scoped scripts
- Automatic events unbinding
- Resource loader with caching
- Integrated DOM helper
- Animations and transitions handling
- Inline components definition
- Standalone components

**zuix.js** does not require any bundler, dependency manager or transpiling to work. It's framework-agnostic and can be
used with your favorite web development stack. Optionally it offers a *CLI* tool with some basic features and templates.


&nbsp;

🧰 `zuix-cli` is a tool for the command line for creating new projects, adding pages or components,
bundling and compressing into a single HTML file all resources used in a page, either local or remote ones.
Project starter templates are using [Eleventy](https://11ty.dev/) as site generator, which works very nicely
together with *zuix.js*.

**Features in brief**

- Page bundling (components, styles, scripts)
- Assets mirroring (creates a local copy of external resources such as scripts, images and videos)
- *Eleventy* site generator:
  * Integrated web server (*BrowserSync*)
  * Automatic rebuild and client refresh on files change
  * Partials and include
  * Front matter and external data files
  * Multiple template languages:
    - [Liquid](https://shopify.github.io/liquid/basics/introduction/)
    - [Nunjucks](https://mozilla.github.io/nunjucks/templating.html)
    - Markdown
    - Handlebars
    - Mustache
    - Pug
    - and more...
  * Custom filters and shortcodes
- [LESS](https://lesscss.org/) to CSS style compiler
- Page indexing and search engine [Fuse.js](https://fusejs.io/)
- Code linting and minifying
- Service worker generator for assets pre-caching and other optimizations
- Responsive starter templates optimized for both desktop and mobile
- Progressive Web App (PWA) templates with 95-100/100/100/100 score in *Lighthouse* test for mobile devices


{% unpre %}
```html
<style>
  main .content code {
    border: solid 2px var(--accent-color);
    padding: 2px 4px;
    border-radius: 8px;
    margin-right: 4px;
  }
</style>
```
{% endunpre %}


## Demos and templates

- [zuix.js playground component](/playground)
- [zKit web enhancing bits](https://zuixjs.github.io/zkit/)
- [Web Starter template](https://zuixjs.github.io/zuix-web-starter/)
- [Web App template](https://zuixjs.github.io/web-app/)
- [News-Blog template](https://zuixjs.github.io/news-blog/)


## Old demos

- [zuix.js playground on Glitch](https://glitch.com/@genemars)
- [Examples on CodePen](https://codepen.io/genielabs)
