---
layout: side_drawer.liquid
options: mdl highlight
tags: documentation
group: documentation
order: 8
icon: extension
title: Using with Frameworks
summary: How to use zuix.js components in Angular, React, Vue as Custom Elements.
description: Integrate framework-agnostic zuix.js components into React, Angular, Vue, and other modern frameworks using Web Components (Custom Elements) and standard DOM events.
keywords:
- documentation
- integration
- react
- angular
- vue
- micro-frontends
- web components
- custom elements
---

Because **zuix.js** works directly with standard HTML, CSS, and JavaScript without requiring a custom Virtual DOM or a proprietary build pipeline, it is inherently **framework-agnostic**. 

While mixing different framework logic on the same DOM element is generally a bad practice, there is a modern, highly scalable architecture where integrating zuix.js with frameworks like **React**, **Angular**, or **Vue** makes perfect sense: **Web Components (Custom Elements)**.

This approach is perfectly aligned with the philosophy of **Micro-frontends** and framework-agnostic **Design Systems**.

## The Invisible Boundary

When you package your zuix.js component as a standard HTML5 Custom Element (e.g., `<counter-widget>`), the browser creates a "black box" (often isolated via Shadow DOM):
* **Inside the box:** zuix.js is the absolute master. It manages the internal DOM, applies its native Proxy reactivity (`@sync`), and performs lightning-fast updates.
* **Outside the box:** React, Angular, or Vue just see a standard HTML tag, exactly like they would see a `<video>` or `<select>` element. They know nothing about zuix.js and don't interfere with its internal DOM, completely avoiding rendering conflicts.

Communication across this boundary happens through standard Web interfaces:
1. **Inputs (Framework ➔ Zuix):** Calling public methods exposed by the zuix component.
2. **Outputs (Zuix ➔ Framework):** Listening to standard Custom Events triggered by the zuix component.


## 1. Preparing the zuix.js Component

To allow external frameworks to interact with your component, you need to define a **Public API** using the `this.expose(name, function)` method, and emit events using `this.trigger(eventName, data)`.

Let's assume we have packaged a component registered as the `<counter-widget>` Custom Element. Here is its internal controller:

**`counter-widget.js`**
```javascript
class CounterWidget extends ControllerInstance {

  onInit() {
    // Expose public methods to the outside world (React, Angular, etc.)
    this.expose('setValue', (v) => this.updateCounter(v));
    this.expose('reset', () => this.updateCounter(0));
  }

  onCreate() {
    this.counter = 0;
    
    // Bind an internal button click
    this.view().find('button').on('click', () => {
      this.updateCounter(this.counter + 1);
    });
  }

  updateCounter(value) {
    this.counter = value;
    this.view().find('.display').html(this.counter);
    
    // Emit a CustomEvent to notify the host framework
    this.trigger('counterChanged', { newValue: this.counter });
  }
}
```


## 2. Accessing the Component Interface

The cleanest and most idiomatic way to access a component's context in zuix.js is to assign it an explicit name using the `z-context` attribute directly on the HTML tag.

```html
<counter-widget z-context="my-counter"></counter-widget>
```

By doing this, you don't need to query the DOM or use framework-specific element references. You can just ask zuix.js for that context by its name from anywhere in your code:

```javascript
// Fetch the context by its z-context name and call the exposed method
zuix.context('my-counter', (ctx) => {
  // 'ctx' is the component context. 
  ctx.reset(); 
  ctx.setValue(42);
});
```
*Note: `zuix.context()` accepts a callback because the component initialization might be asynchronous.*


## 3. Integration Examples

Here is how you can mount, listen to, and control our `<counter-widget>` inside the three most popular frontend frameworks. We use the `z-context` name to grab a reference and the optional chaining operator (`?.`) to call its methods cleanly.

<div class="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
  <div class="mdl-tabs__tab-bar notranslate">
      <a href="#react-tab" class="mdl-tabs__tab is-active">React</a>
      <a href="#angular-tab" class="mdl-tabs__tab">Angular</a>
      <a href="#vue-tab" class="mdl-tabs__tab">Vue.js</a>
  </div>

  <!-- REACT TAB -->
  <div class="mdl-tabs__panel is-active" id="react-tab">

```jsx
import React, { useEffect, useState } from 'react';

export default function ReactHostApp() {
  const [val, setVal] = useState(0);
  let myCounter; // Cached reference

  useEffect(() => {
    window.zuix.context('my-counter', (ctx) => { myCounter = ctx; });
    const el = document.querySelector('[z-context="my-counter"]');
    const handler = (e) => setVal(e.detail.newValue);
    el.addEventListener('counterChanged', handler);
    return () => el.removeEventListener('counterChanged', handler);
  }, []);

  return (
    <div>
      <h3>React State: {val}</h3>
      <counter-widget z-context="my-counter"></counter-widget>
      <button onClick={() => myCounter?.reset()}>Reset</button>
    </div>
  );
}
```
  </div>

  <!-- ANGULAR TAB -->
  <div class="mdl-tabs__panel" id="angular-tab">

```typescript
@Component({ ... })
export class AppComponent implements OnInit {
  currentValue = 0;
  private myCounter: any;

  ngOnInit() {
    window.zuix.context('my-counter', (ctx) => { this.myCounter = ctx; });
  }

  onCounterChange(e: any) {
    this.currentValue = e.detail.newValue;
  }

  resetWidget() {
    this.myCounter?.reset();
  }
}
```
  </div>

  <!-- VUE TAB -->
  <div class="mdl-tabs__panel" id="vue-tab">

```html
<template>
  <h3>Vue State: {{ currentValue }}</h3>
  <counter-widget z-context="my-counter" @counterChanged="onCounterChange"></counter-widget>
  <button @click="myCounter?.reset()">Reset</button>
</template>

<script>
export default {
  data() { return { currentValue: 0, myCounter: null }; },
  mounted() {
    window.zuix.context('my-counter', (ctx) => { this.myCounter = ctx; });
  },
  methods: {
    onCounterChange(e) { this.currentValue = e.detail.newValue; }
  }
};
</script>
```
  </div>
</div>

## Summary

By combining `z-context` identification with the `?.` optional chaining operator, you achieve a clean, decoupled architecture. **zuix.js** components remain true, independent black-boxes, providing a robust and framework-agnostic way to share UI logic across any modern frontend stack.
