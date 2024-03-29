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
- custom elements
- web components
- default
- standalone
---

A *component* consists of a **[View](../view)**, that is implemented as HTML template with its own CSS,
and a **[Controller](../controller)** that is the Javascript code that controls the *view*, its presentation
and the interaction logic.

Component's files are placed in the same *path* location and their base name is the same, and it represents itself
the *component's name*:
- `[<path>/]<component_name>.html`
- `[<path>/]<component_name>.css` <small>(optional)</small>
- `[<path>/]<component_name>.js`

The *unique identifier of the component* is therefore its full path, formed by the `<path>` of the component plus the
`<component_name>` without any extension.

```
<component_id> :== [<path>/]<component_name>
```

Components can be loaded by adding the `z-load` attribute to a host element, with its value containing a valid *component
identifier*:

```html
<div z-load="<component_id>"></div> 
```

The `<path>` of the component can be either relative to the page requesting the component, or an absolute path even
if pointing to a different server. In the latter case, [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) must
be enabled on the server end in order to allow fetching of components from the remote server.

If the `<path>` is relative and not starting with a "`.`", the lookup folder will be the application folder,
which is by default "`/app`".

For example, consider the following *time-clock* component with its files placed into a *widgets* folder:
- `/app/widgets/time-clock.html`
- `/app/widgets/time-clock.css`
- `/app/widgets/time-clock.js`

in this case the `<component_id>` is `widgets/time-clock`, so the component can be loaded into the HTML page by using
the following code:

```html
<div z-load="widgets/time-clock"></div>
```

{% unpre %}
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
  <div layout="row center-center">
      <div z-load="widgets/time-clock" z-options="testOptions" layout="column center-center" style="min-height: 90px">
          <div class="animate__animated animate__flash animate__infinite margin-8px">
              Loading <code>widgets/time-clock</code>...
          </div>
      </div>
  </div>
</div>
```
{% endunpre %}

so, basically, the view template (*time-clock.html* + *time-clock.css*) is rendered inside the host
element `div`, and the controller code (*time-clock.js*) is activated and begins to animate the clock's digits.

{% include "fragments/playground-button" component_id: "/app/widgets/time-clock" %}

<a name="custom_element"></a>
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

{% include "fragments/playground-button" component_id: "/app/examples/custom-elements-01" %}


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
<div layout="row center-center">

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

Standalone components are components that can be loaded by just importing a single JavaScript module.
They can be easily implemented by adding the following lines at the end of the controller code:

<a name="import-example"></a>
**File:** `widgets/time-clock.js` <small>(example)</small>

```js
// bottom of controller class code... 
const customTag = 'time-clock';
const componentId = 'widgets/time-clock';
// register component class
zuix.controller(TimeClock, {componentId});

const setup = () => {
  // Create custom element <time-clock></time-clock>
  customElements.define(customTag, class extends HTMLElement {
    connectedCallback() {
      zuix.loadComponent(this, componentId);
    }
  });
};
// Load zuix.js if not already loaded  
if (self.zuix === undefined) {
  import('https://cdn.jsdelivr.net/npm/zuix-dist@{{ pkg.dependencies['zuix-dist'] | remove_first: '^' }}/js/zuix.module.min.js')
    then(() => setup());
} else setup();
```

Then the component module can be imported in the `head` section of the page

```html
...
<head>
    ...
    <script type="module" src="/app/widgets/time-clock.js"></script>
    ...
</head>
...
```

or using the [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) statement,
or the dynamic [`import()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import) function,
inside another module

```js
import "/app/widgets/time-clock.module.js"
```

then, the component, can be added inside the page's `body` using the defined tag

```html
<time-clock></time-clock>
```

Since the code above is already loading `zuix.js` library with the `import` at line [#16](#import-example), there's no need to
include `zuix.min.js` in the `head` section of the page and so, the component can be loaded with just one line of
of code.

The *URL* of the imported module can also be an absolute *URL* pointing to a different server.

Note that the additional code above, can also be implemented into a separate file, e.g.
`time-clock.module.js`, but the registration of component class must be removed (lines [#4-5](#import-example)).  

{% tryLink "Example on CodePen" "https://codepen.io/genielabs/pen/KKQZdga" %}

{% include "fragments/playground-button" component_id: "/app/examples/custom-elements-02" %}




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

{% unpre %}
```html
<!-- TODO: create a custom liquid tag for including examples -->
<label class="mdl-color-text--primary">Result</label>
<div class="example-container" style="min-height: 120px">
  <div view z-load="https://zuixjs.org/app/content/docs/examples/links"
       z-options="testOptions" class="visible-on-ready"
       layout="column center-stretch" style="min-height: 52px">
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
     (gesture:swipe)="handleSwipeGesture">
  <strong>
      Gesture detection area
  </strong>
  <p>
      Try swiping left or right.
  </p>
</div>

<script>
  function handleSwipeGesture(e, tp) {
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
{% unpre %}
```html
<label class="mdl-color-text--primary">Result</label>
<div class="example-container" style="overflow-x: hidden">
  <div layout="row center-center">
  <div ctrl z-load="@lib/controllers/gesture-helper"
       z-options="opts"
       (gesture:swipe)="console.log(event, args, context)"
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

Using the internal `default` component it is possible to get advantage of *zuix.js* components' features also on
standard HTML elements.  
Adding the `z-load="default"` attribute or any other `z-*` attribute to a `div`, will create a new component context
where the `div` is its view template, and where it will be possible to use all templating and scripting capabilities
of *zuix.js* components:

{% capture example %}
```html
<div z-model="{number: 42}">
    
    <mdl-button :type="'fab'"
                (pointerdown)="model.number--">
        remove
    </mdl-button>

    <strong #number></strong>

    <mdl-button :type="'fab'"
                (pointerdown)="model.number++">
        add
    </mdl-button>

    <!-- SCOPED CSS: `media="#"` attribute 
         will apply styles only to the enclosing
         component context -->
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

{% include "fragments/playground-button" component_id: "/app/examples/default-component" %}
