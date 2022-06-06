---
layout: side_drawer.liquid
options: mdl highlight
tags: documentation
group: documentation
order: 3
icon: smart_button
title: Component
summary: Custom elements, standalone components, the <em>default</em> component.
description: Components, custom elements, shadow DOM, standalone components, the <em>default</em> component.
keywords:
- documentation
- api
- component
- lazy
- default
- theming
---

A *component*, here intended as a reusable part of a web page, consists of a **[View](../view)**, that is implemented
as HTML template with its own CSS, and a **[Controller](../controller)** that is the Javascript code that controls the *view*,
its presentation and interaction logic.

Component's files are placed in the same *path* location and their base name is the same, and it represents itself
the *component's name*:
- `[<path>/]<component_name>.html`
- `[<path>/]<component_name>.css` <small>(optional)</small>
- `[<path>/]<component_name>.js`

The *unique component's identifier* is then its full path, formed by the component's `<path>` plus the `<component_name>`,
without any extension.

```
<component_id> :== [<path>/]<component_name>
```

Components can be loaded by adding the `z-load` attribute to a host element, with its value containing a valid *component
identifier*:

```html
<div z-load="<component_id>"></div> 
```

The `<path>` of the component, can be either relative to the page requesting the component, or an absolute path, even
if pointing to a different server. In the latter case, [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) must
be enabled on the server end in order to allow fetching of components from the remote server.


As an example, consider this *time-clock* component with its view and controller files placed inside a *widgets* folder:
- `widgets/time-clock.html`
- `widgets/time-clock.css`
- `widgets/time-clock.js`

the `<component_id>` is `widgets/time-clock`, and the component can be loaded using the following code in the HTML page:

```html
<div z-load="widgets/time-clock"></div>
```

{% unpre '---------------------------------' %}
```html
<script>
    testOptions = {
        on: {
            'view:create': function(e, data) {
                data.addClass('animate__animated animate__fadeInDown animate__faster');
                //console.log('view:create', e, data);
            },
            'component:ready': function(e, data) {
                //console.log('component:ready', e, data);
            },
        },
        ready: function(ctx) {
            /* ... */
        }
    };
</script>
<div>
  <label class="mdl-color-text--primary">Result</label>
  <div z-load="widgets/time-clock" style="width: 100%;min-height: 121px" z-options="testOptions" layout="column center-center">
      <div class="animate__animated animate__flash animate__infinite margin-8px">
          Loading <code>widgets/time-clock</code>...
      </div>
  </div>
</div>
```
{% endunpre %}

so, basically, the component's view template's files (*time-clock.html* + *time-clock.css*) are rendered inside the host
element `div`, and the controller code (*time-clock.js*) is activated and begins to animate the clock's digits.


## Custom element

It is possible to define a [custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) for a *zuix.js* component
by using the [`zuix.loadComponent(..)`](../api/zuix/Zuix/#loadComponent) method:

```js
customElements.define('component-name', class extends HTMLElement {
  connectedCallback() {
    zuix.loadComponent(this, 'path/of/component-name');
  }
});
```

After defining a custom element, the component can be added to the page by using the custom element tag:

```html
<component-name></component-name>
```

which has the same effect of using the `z-load` attribute on a host element:

```html
<div z-load="path/of/component-name"></div>
```

<label class="mdl-color-text--primary">Example</label>

Defining a custom element for a Material Design button component.

```js
customElements.define('mdl-button', class extends HTMLElement {
  connectedCallback() {
    zuix.loadComponent(this, '@lib/controllers/mdl-button', 'ctrl');
  }
});
```

The third parameter `<type>` can be supplied to the [`zuix.loadComponent(..)`](../api/zuix/Zuix/#loadComponent) in case we are loading only a controller (`ctrl`)
or only a view template (`view`), rather than a complete component (*.html + .css + .js*).

Using the `mdl-button` element in the page:

{% capture example -%}
<mdl-button :class="'primary'">
    Hello
</mdl-button>

<mdl-button :type="'flat'">
    Web
</mdl-button>

<mdl-button :class="'accent'">
    Components
</mdl-button>
{% endcapture %}

```html
{{ example }}
```

<label class="mdl-color-text--primary">Result</label>
{% unpre %}
```html
<script>
customElements.define('mdl-button', class extends HTMLElement {
  connectedCallback() {
      this.classList.add('visible-on-ready');
      this.style.display = 'inline-block';
      this.style.margin = '4px';
      zuix.loadComponent(this, '@lib/controllers/mdl-button', 'ctrl', {
          container: this.attachShadow({mode: 'closed'})
      });
  }
});
</script>
<div style="min-height: 44px">
{{ example }}
</div>
```
{% endunpre %}


### Shadow DOM

With custom elements it is also possible to enable the [shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM).  
**zuix.js** will auto-detect if a custom element is using shadow DOM when the `attachShadow` method is called with the `mode`
option set to `open`. If the `mode` is otherwise set to `closed`, then the shadow DOM must be passed explicitly as a `container`
with the [`zuix.loadComponent(..)`](../api/zuix/Zuix/#loadComponent) options as shown in the following example:

**JS**
```js
customElements.define('time-clock', class extends HTMLElement {
    connectedCallback() {
        zuix.loadComponent(this, 'widgets/time-clock', '', {
            container: this.attachShadow({mode: 'closed'})
        });
    }
});
```

**HTML**
```html
<time-clock></time-clock>
```

<label class="mdl-color-text--primary">Result</label>
<div style="min-height: 120px">

{% unpre %}
```html
<script>
customElements.define('time-clock', class extends HTMLElement {
    connectedCallback() {
        zuix.loadComponent(this, 'widgets/time-clock', '', {
            container: this.attachShadow({mode: 'closed'})
        });
    }
});
</script>

<time-clock></time-clock>
```
{% endunpre %}

</div>

## Standalone components

Standalone components can be easily implemented as JavaScript modules. The name of the module will have the same
base name of the widget but ending with `.module.js`.

**File:** `widgets/time-clock.module.js`
<a name="import-example"></a>

```js
import 'https://cdn.jsdelivr.net/npm/zuix-dist@{{ pkg.dependencies['zuix-dist'] | remove_first: '^' }}/js/zuix.module.min.js';
customElements.define('time-clock', class extends HTMLElement {
    connectedCallback() {
        zuix.loadComponent(this, 'widgets/time-clock');
    }
});
```

Then the component module can be imported in the `head` section of the page

```html
...
<head>
    ...
    <script type="module" src="/app/widgets/time-clock.module.js"></script>
    ...
</head>
...
```

or using the `import` statement, or the dynamic `import()` function, inside another module

```js
import "/app/widgets/time-clock.module.js"
```

then, the component, can be added inside the page's `body` using the defined tag

```html
<time-clock></time-clock>
```

Since the component module is already loading `zuix.js` library with the `import` at line [#1](#import-example), there's no need to
include `zuix.min.js` in the `head` section of the page and so, the component can be loaded with just one line of
*JavaScript* `import` and the relative HTML tag.  
The *URL* of the component's module can also be an absolute *URL* pointing to a different server.

{% tryLink "Example on CodePen" "https://codepen.io/genielabs/pen/KKQZdga" %}


<a name="type_view"></a>
## View-only component

It's also possible to load just a view without the controller and so consisting of the two files:
- `<component_id>.html`
- `<component_id>.css` <small>(optional)</small>

To load a *view*, the type-attribute `view` is added to the host element.

```html
<div view z-load="<component_id>">
  <!-- loaded view content will be rendered here -->
</div> 
```

In the example below the view template named *links* is loaded using an absolute URL path:
```html
<div view z-load="https://zuixjs.org/app/content/docs/examples/links"></div>
```

{% unpre '---------------------------------' %}
```html
<!-- TODO: create a custom liquid tag for including examples -->
<label class="mdl-color-text--primary">Result</label>
<div class="example-container" style="min-height: 120px">
  <div view z-load="https://zuixjs.org/app/content/docs/examples/links" z-options="testOptions" layout="column center-stretch" style="min-height: 52px">
      <div class="animate__animated animate__flash animate__infinite" layout="row center-center">
          Loading component <code>examples/links</code>...
      </div>
  </div>
</div>
```
{% endunpre %}

<a name="type_ctrl"></a>
## Controller-only component

A *controller-only* component, or simply *controller*, is basically a component whose view is the host element itself.
To load a *controller* the type-attribute `ctrl` is added to the host element.

```html
<div ctrl z-load="<component_id>">
  <!-- host element content -->
</div> 
```

A *controller* consists only of a *Javascript* file:

- `<component_id>.js`

<a name="example_controller"></a>
<label class="mdl-color-text--primary">Example</label>
In the following example the [Gesture Helper](https://zuixjs.github.io/zkit/content/controllers/gesture-helper/) controller is added to a `div` container in order
to detect *swipe left* and *swipe right* gestures over it.

```html
<div ctrl z-load="@lib/controllers/gesture-helper"
     :on:gesture:swipe="swipeGestureHandler">
  <strong>
      Gesture detection area
  </strong>
  <p>
      Try swiping left or right.
  </p>
</div>

<script>
    function swipeGestureHandler(e, tp) {
        switch (tp.direction) {
            case 'left':
                this.playAnimation('animate__fadeOutLeft');
                break;
            case 'right':
                this.playAnimation('animate__fadeOutRight');
                break;
        }
    }
}
</script>
```
{% unpre '---------------------------------' %}
```html
<label class="mdl-color-text--primary">Result</label>
<div class="example-container" style="overflow-x: hidden">
  <div layout="row center-center">
  <div ctrl z-load="@lib/controllers/gesture-helper"
       z-options="opts"
       :on:gesture:swipe="console.log(event, args, context)"
       class="no-select visible-on-ready"
       style="border: solid 1px lightgray;border-radius:24px;height:120px;background:aliceblue;padding:16px;cursor:ew-resize;margin-top: 12px;"
       self="size-1of2 sm-full">
    <strong>Gesture detection area</strong>
    <p class="animate__animated animate__flash animate__infinite animate__slower">Try swiping left or right.</p>
  </div>
  </div>
  <script>
  opts = {
    on: {
      'view:create': function(e, element) {
        element.addClass('animate__animated animate__fadeInDown animate__faster');
        console.log('view:create', e, element);
      },
      'component:ready': function(e, element) {
        console.log('component:ready', e, element);
      },
      'gesture:swipe': function(e, tp) {
        // TODO: handle swipe
        switch(tp.direction) {
          case 'up':
            break;
          case 'down':
            break;
          case 'left':
            this.playAnimation('animate__fadeOutLeft');
            break;
          case 'right':
            this.playAnimation('animate__fadeOutRight');
            break;
        }
      }
    },
    ready: function(ctx) {
      /* ... */
    }
  }
  </script>
</div>
```
{% endunpre %}


<a name="defaultComponent"></a>
## The `default` component

By using the internal `default` component, it is possible to get advantage of *zuix.js* components' features, also on
standard HTML elements.  
For instance, adding the attribute `z-load="default"` to a `div`, will turn that `div` into a *zuix.js* component's view,
where it will be possible to use all templating and scripting capabilities of *zuix.js* components:



{% capture example %}
```html
<div z-load="default"
    :model:number="0">
    
    <mdl-button :type="'fab'"
                (pointerdown)="model.number--">
        remove
    </mdl-button>

    <strong #number></strong>

    <mdl-button :type="'fab'"
                (pointerdown)="model.number++">
        add
    </mdl-button>

    <style media="#">
        :host {text-align: center}
        strong {margin: 12px}
    </style>
</div>
```
{% endcapture %}

{{ example }}

<label class="mdl-color-text--primary">Result</label>
<div style="min-height: 64px">
{% unpre %}
{{ example }}
{% endunpre %}
</div>


The `z-load="default"` attribute can be omitted if any of the other `z-*` option attributes are in place (`z-behavior`, `z-on`,
`z-options`, `z-model`).  
