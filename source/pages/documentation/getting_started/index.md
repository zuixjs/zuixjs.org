---
layout: side_drawer.liquid
options: mdl highlight sponsor
tags: documentation
group: documentation
order: 2
icon: outlined_flag
title: Getting started
summary: Creating a new project using the CLI, bare library usage.
description: Creating a new project using *zuix.js* CLI tool and bare library usage.
keywords:
- documentation
- api
- getting started
- helper
---

Start playing with *zuix.js* right away on [StackBlitz](https://stackblitz.com/github/zuixjs/zuix-web-starter?terminal=start) or you can install the *zuix-cli* tool to create
a new website from the command line.

## Creating a new web project using the CLI

```bash
# Create a new website project named 'my-new-webapp'
npx zuix new my-new-webapp
```

A new folder named *my-new-webapp* will be created containing all files required to run the starter project.

From the new folder we can now start the local server that will watch, build and serve the web application files (by
default at *http://localhost:8080*).  

```bash
cd my-new-webapp
npx zuix start
```

Read more about all other `zuix` command functionality from [`zuix-cli`](../cli/) documentation page.

## Bare library usage on an existing site

*zuix.js* can also be used on an existing website project by including the library directly in the HTML page or a JavaScript
module:

### JsDeliver

```html
<script src="https://cdn.jsdelivr.net/npm/zuix-dist@{{ pkg.dependencies['zuix-dist'] | remove_first: '^' }}"></script>
```

or as a module:

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/zuix-dist@{{ pkg.dependencies['zuix-dist'] | remove_first: '^' }}/js/zuix.module.min.js"></script>
```

or as a dependency of another module:

```js
// file: my-class.module.js
import 'https://cdn.jsdelivr.net/npm/zuix-dist@{{ pkg.dependencies['zuix-dist'] | remove_first: '^' }}/js/zuix.module.min.js'; 
```


### NPM

```bash
npm install zuix-dist
```

then copy the library from `node_modules/zuix-dist/js` to your project's `js` folder and include it in your HTML page or
JavaScript module.
