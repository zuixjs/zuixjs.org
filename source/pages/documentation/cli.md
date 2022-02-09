---
layout: side_drawer.html
order: 7
icon: terminal
title: CLI / Templates
summary: Creating a new projects, pages and components.
description: "zuix.js getting started, documentation and api"
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

A new folder named *my-new-webapp* will be created containing all files required to run the starter project.

From the new folder we can now start the local server that will watch, build and serve the web application files (by
default at *http://localhost:8080*).

```bash
cd my-new-webapp
npm install
zx start
```

Enter `zx help` for a list of all available commands.


### Creating a new page

```shell
zx generate page "<template_name>" "<page_path>"
```

There is currently only one template: `side_drawer`. More templates will be added with next releases.

<label class="mdl-color-text--primary">Example</label>
```shell
zx g page side_drawer blog/my-new-post
```

The above command will create a new page `my-new-post.md` in the folder `./source/pages/blog`.


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

