---
layout: side_drawer.liquid
options: mdl highlight
tags: documentation
group: documentation
order: 2
icon: rule
title: Terms and concepts
summary: Component, reusable parts, view rendering, Web Components.
description: Rendering components with a SSG or with SSR, and differences with client-side components loading. About reusability. 
keywords:
- documentation
- basic concepts
- component rendering
- static site generator rendering
- server-side rendering
- client-side loading
- reusability
---

This is a brief introduction to some terms and concepts commonly used in web development and related to *zuix.js*
functionality.
For a better understanding of these pages a basic knowledge of HTML, CSS and JavaScript is required.  


## Component

We can think of a component as a **reusable part** of the page that can be defined once and then added to
any page, one or more times, by just referencing it.

In a component there are two kind of reusable parts:

- a visible part (*view*), which is a block of HTML and CSS code that is rendered in the page
- a program-logic part (*controller*), which is a block of JavaScript code used to control and animate the associated *view*

A complete component is therefore formed by the combo *view* + *controller*, although as described later
in these pages, we can also have *view-only* components that do not contain any JavaScript code, or *controller-only*
components that are associated to a generic element of the page instead of a specific view template.

### Component implementation

A component can be implemented with various methods:

- using a distinct file for each reusable part (`.html`, `.css`, `.js`)
- using a single `.js` file which will also generate the output of the HTML and CSS code for the view
- declaring all parts inline, on the HTML page itself

The first method, among other advantages, maximizes the maintainability, reusability, and customizability of each part.
This design pattern, that reckons on loading all bits of a component from external files, is not directly supported by
the web platform, and in order to be implemented it requires a *resource loader* such as *zuix.js*.


### View rendering

"Rendering" is the process of outputting the view of a component instance into the page.
This process can be implemented using one of the following methods:


- **Client-side**  
  the view is dynamically added using JavaScript
- **Server-side**  
  the view is pre-rendered on the server before the requested page is sent to the client
- **Build-side**  
  the view is pre-rendered during the build process of the page, using a static-site generator or similar tool

The first method is the standard approach in *zuix.js*, but it also allows to pre-render a component's view
either server-side or during the build process, by simply outputting the component's *HTML*
inside a container element with some special directive attributes (`ctrl z-load`), so that *zuix.js* will
then instantiate the controller of the component and bind it to the pre-rendered view instance.


## Web Components

The term [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) identifies a set of
*Web Platform* APIs that allow to create custom HTML elements.  
The main advantage in using custom elements is encapsulation &dash;
"being able to keep the markup structure, style, and behavior hidden and separate from other code on the page so that
different parts do not clash, and the code can be kept nice and clean." ([MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM))  
*zuix.js* also implements *emulated encapsulation* through which is possible to load the same component either
using a custom element or by using any standard element as host.
