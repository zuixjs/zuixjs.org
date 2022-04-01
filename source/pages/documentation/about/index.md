---
layout: side_drawer.liquid
options: mdl
tags: documentation
group: documentation
order: 1
icon: info_outline
title: About zuix.js
summary: Library and CLI features in brief.
description: zuix.js is a lightweight library for creating component based web applications by using standard HTML, CSS and JavaScript.
keywords:
- documentation
- introduction
- about
---

`zuix.js` is a lightweight library for creating modular and component based web applications
by using standard HTML, CSS and JavaScript.

One of the main feature of *zuix.js* is the ability to transform basic HTML content into components,
at runtime and progressively, only when needed (lazy-loading components).

This enables designing web pages that can work even with JavaScript disabled, and where JavaScript is enabled,
the same page is animated and brought to life with components that use the very page content as its data source.

What even more interesting, is that is possible to load such components also from external websites, making infinite
the possibilities in sharing and reusing components.

**Features in brief**
- Components loading either from a local or remote servers
- View templates (featuring hot swapping)
- Data binding
- Lazy loading
- Events, Behaviors, Refresh *@* Handlers
- Automatic events unbinding
- Resource loader with caching
- Integrated DOM helper
- Animations and transitions handling
- Inline components definition


&nbsp;

`zuix-cli` is a tool for the command-line shell for creating a starter project, adding new pages or components,
bundling and compressing into a single HTML file all resources used in a page, either local or remote.
The web starter project is based on [Eleventy](https://11ty.dev/), a versatile static site generator that works
very nicely together with *zuix.js*.

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
    - and [more](https://11ty.dev/docs/)
  * Custom filters and shortcodes
- [LESS](https://lesscss.org/) to CSS style compiler
- Page indexing and search engine [ElasticLunr](http://elasticlunr.com/)
- Code linting and minifying
- Service worker generator for assets pre-caching and other optimizations
- Responsive templates optimized for both desktop and mobile
- Progressive Web App (PWA) with 95-100/100/100/100 score in Lighthouse test for mobile devices


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


## Demos

- [zKit web enhancing bits](https://zuixjs.github.io/zkit/)
- [zuix.js Web Starter](https://zuixjs.github.io/zuix-web-starter/)
- [News-Blog template](https://zuixjs.github.io/news-blog/)


## Old demos

- [zuix.js playground on Glitch](https://glitch.com/@genemars)
- [Examples on CodePen](https://codepen.io/genielabs)
