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

This page introduces core concepts used throughout the *zuix.js* documentation. While *zuix.js* simplifies component orchestration, a basic understanding of HTML, CSS, and JavaScript is recommended.

## Component

A component is a **reusable building block** that can be defined once and referenced multiple times across any page. A complete component typically consists of two parts:

*   **View:** The visible part, defined by HTML structure and CSS styles.
*   **Controller:** The logic part, defined by JavaScript, which manages the view's behavior and animations.

While the *View + Controller* combo is standard, *zuix.js* is flexible: you can also create **view-only** components (pure UI) or **controller-only** components (adding logic to generic page elements).

### Component Implementation

Components can be implemented using different patterns:
*   **Decoupled:** Using distinct files for each part (`.html`, `.css`, `.js`).
*   **Bundled:** Using a single `.js` file that programmatically generates the HTML/CSS.
*   **Inline:** Declaring all parts directly within the host HTML page.

The **decoupled method** maximizes maintainability and reusability. Since the web platform does not natively support loading a component's parts from separate external files, *zuix.js* acts as a **resource loader** to bridge this gap.

## Component Rendering

"Rendering" is the process of outputting a component instance into the page. *zuix.js* supports three main approaches:

*   **Client-side:** The view is dynamically injected and instantiated via JavaScript.
*   **Server-side (SSR):** The view is pre-rendered on the server before the page reaches the client.
*   **Build-side (SSG):** The view is rendered during the site's build process via a static site generator.

While **Client-side rendering** is the *zuix.js* standard, the framework supports SSR and SSG by allowing you to inject pre-rendered HTML into a container marked with a `z-load` directive. Once the page loads, *zuix.js* automatically "hydrates" the container, instantiating the controller and binding it to the pre-rendered view.

## Web Components

[Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) are a set of Web Platform APIs for creating custom, encapsulated HTML elements. Their main advantage is **encapsulation**: markup, styles, and behavior remain hidden and separate, preventing code clashes and keeping the project clean.

Beyond standard Web Components, *zuix.js* provides **emulated encapsulation**, allowing you to load the same component seamlessly as either a custom element or a standard HTML element.
