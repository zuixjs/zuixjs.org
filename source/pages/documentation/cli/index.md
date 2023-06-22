---
layout: side_drawer.liquid
options: mdl highlight
tags: documentation
group: documentation
order: 8
icon: terminal
title: CLI / Templates
summary: Creating a new projects, pages and components.
description: Command Line Interface, creating a new projects, pages, templates and components.
keywords:
- Documentation
- API
- CLI
- Templates
- Eleventy
- zuix
---

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
  main p:first-of-type code {
    border: solid 2px var(--accent-color);
    padding: 2px 4px;
    border-radius: 8px;
    margin-right: 4px;
  }
</style>
```
{% endunpre %}


## Prerequisites

- [Install Node.js](https://nodejs.org/en/download/) version 14 or higher
- Install `zuix`, command-line tool:

```shell
npx zuix
```


## Creating a new project

```bash
# Create a new website project named 'my-new-webapp'
npx zuix new my-new-webapp
```

A new folder named *my-new-webapp* will be created containing all files required to run the web-starter project.

Different starter project templates are available and can be specified using the `-t` option. See *zuix.js* [Web Starter documentation](https://zuixjs.github.io/zuix-web-starter/content/docs/getting-started/)
for a list of available templates and a complete overview of commands and features.


You can also try the web-starter template live on [StackBlitz](https://stackblitz.com/github/zuixjs/zuix-web-starter?terminal=start).


### Adding a new component

```shell
npx zuix generate component "<component_name>"
```

<label class="mdl-color-text--primary">Examples</label>
```shell
npx zuix g component cards/my-new-card
```

will generate three files for the component `MyNewCard`:

- `./source/app/components/cards/my-new-card.html`
- `./source/app/components/cards/my-new-card.css`
- `./source/app/components/cards/my-new-card.js`

To generate only the view template `ArticleHeader`:

```shell
npx zuix g template article-header
```

will generate:

- `./source/app/templates/article-header.html`
- `./source/app/templates/article-header.css`

To generate the controller `MyServiceApi`:

```shell
npx zuix g controller my-service-api
```

- `./source/app/controllers/my-service-api.js`
