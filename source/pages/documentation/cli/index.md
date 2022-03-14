---
layout: side_drawer.liquid
options: mdl highlight
tags: documentation
group: documentation
order: 7
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
- zx
---

## Creating a new project

Install *zuix.js CLI* as a global package:

```shell
npm install -g zuix-cli
```

The `zx` command can now be used from command shell to create a new web application project:

```bash
# Create a new website project named 'my-website'
zx new my-new-webapp
```

A new folder named *my-new-webapp* will be created containing all files required to run the web-starter project.  
See *zuix.js* [Web Starter documentation](https://zuixjs.github.io/zuix-web-starter/) for a complete overview of 
commands and features.


### Creating a new component

```shell
zx generate component "<component_name>"
```

<label class="mdl-color-text--primary">Examples</label>
```shell
zx g component cards/my-new-card
```

will generate three files for the component `MyNewCard`:

- `./source/app/components/cards/my-new-card.html`
- `./source/app/components/cards/my-new-card.css`
- `./source/app/components/cards/my-new-card.js`

To generate only the view template `ArticleHeader`:

```shell
zx g template article-header
```

will generate:

- `./source/app/templates/article-header.html`
- `./source/app/templates/article-header.css`

To generate the controller `MyServiceApi`:

```shell
zx g controller my-service-api
```

- `./source/app/controllers/my-service-api.js`
