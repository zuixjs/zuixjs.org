---
layout: side_drawer.html
order: 2
icon: outlined_flag
title: Getting started
summary: Creating a new project, bare library usage, reading this guide.
description: Getting started with *zUIx.js*, documentation and API.
keywords:
- documentation
- api
- getting started
- helper
---

Start playing with *zuix.js* right away on [CodeSandbox](https://codesandbox.io/s/starter-demo-sz0q3) or you can
install the *zuix-cli* tool to create a new website from the command line.

## Creating a new web project using the CLI

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
zx start
```

Read more about all other `zx` command functionality from [`zuix-cli`](../cli/) documentation page.

## Bare library usage on an existing site

*zuix.js* can also be used on an existing website project by including the library directly in your HTML page from one
of these sources:

### JsDeliver

```html
<script src="https://cdn.jsdelivr.net/npm/zuix-dist"></script>
```

### GitHub

```html
<script src="https://zuixjs.github.io/zuix/js/zuix.min.js"></script>
```

### NPM

```bash
npm install zuix-dist
```

then copy the library from `node_modules/zuix-dist/js` to your project's `js` folder and include it in your HTML page:

```html
<script src="js/zuix.min.js"></script>
```


## Reading this guide

This guide assumes a basic familiarity with HTML, CSS and Javascript. In some examples you might encounter references to
the built-in DOM helper class and a couple of external helpers.

### DOM Helper

*zuix.js* integrates a DOM helper class called [ZxQuery](../api/helpers/ZxQuery/). This class implements a very lite subset
of jQuery-like functionality, but it also provides additional features like fields caching. It is accessible via the static
object `zuix.$` and it can wrap elements of the DOM providing useful methods for manipulating them.

```js
const $body = zuix.$.find('body');
// selects all `div` elements in the `body`
// and prints them out in the console
$body.children('div').each((i, el, $el) => {
  console.log(i, el, $el);
});
```

The DOM Helper is also used in *zuix.js* components to access the view and its elements, and it is available through the
property `$` of the [ComponentContext](../api/zuix/ComponentContext/). To easily recognize `ZxQuery`-wrapped elements
in these examples, the symbol `$` is put in front of such variables. Like in the snippet above, `el` is the `HTMLElement`
object, while `$el` is its `ZxQuery`-wrapped instance.


### Helper libraries

Because *zuix.js* it's just a library for loading components, it will often be used with other libraries. For instance,
this website, besides *zuix.js*, is using three other libraries.


[Animate.css](https://animate.style)

<blockquote>
is a library of ready-to-use, cross-browser animations for use in your web projects. Great for emphasis, home pages,
sliders, and attention-guiding hints.
</blockquote>


[Flex Layout Attribute](https://progressivered.com/fla/)

<blockquote>
Layout helper based on CSS flexbox specification designed to serve you as quick flexbox shorthand by using two custom
html attributes — 'layout' and 'self'.
</blockquote>


[Material Design Lite](https://getmdl.io/index.html)

<blockquote>
Material Design Lite lets you add a Material Design look and feel to your websites. It doesn't rely on any JavaScript
frameworks and aims to optimize for cross-device use, gracefully degrade in older browsers, and offer an experience
that is immediately accessible.
</blockquote>

&nbsp;

You might also occasionally encounter in the code examples here, the method `$el.animateCss(..)`. This is a helper method
for using *Animate.css* animations programmatically. The method is added to `ZxQuery` prototype by loading a small *zuixjs*
extension:

```html
<script src="js/zuix/animation_css.js"></script>
```

then, the method, is available to any `ZxQuery` wrapped `Element` and it takes three arguments:

```js
function animateCss(animationName, options, callback) { /* .. */ };
```

where `animationName` is one of the names listed at *Animate.css* home page, but without the `animate__` prefix, and the
`options` object is a JSON containing a list of the [CSS animation properties](https://www.w3schools.com/cssref/css3_pr_animation.asp),
but without the `animation-` prefix. The last parameter is a `callback` that will be called once the animation has ended.

<label class="mdl-color-text--primary">Example</label>
{% unpre %}
```html
<div layout="column center-center">
    <div z-options="{ ready: animationTest }">
        <code>zuix.js + animate.css</code>
    </div>
</div>
<script>
animationTest = (ctx) => {
  ctx.$.animateCss('bounceIn', {
    duration: '1s',
    //delay: '1s',
    'iteration-count': 10,
    direction: 'alternate'
  }, () => console.log('Animation ended.'));
};
</script>
```
{% endunpre %}

```html
<div z-options="{ ready: animationTest }">
    <code>zuix.js + animate.css</code>
</div>

<script>
animationTest = (ctx) => ctx
        .$.animateCss('bounceIn', {
            duration: '1s',
            delay: '1s',
            'iteration-count': 10,
            direction: 'alternate'
        }, () => console.log('Animation ended.'));
</script>
```
