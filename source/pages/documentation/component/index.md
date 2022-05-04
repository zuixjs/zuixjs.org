---
layout: side_drawer.liquid
options: mdl highlight
tags: documentation
group: documentation
order: 3
icon: smart_button
title: Component
summary: Custom elements, options, lazy-loading, the <em>default</em> component, theming.
description: Components, custom elements, loading options, lazy-loading, the <em>default</em> component, theming.
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

```html
<mdl-button primary>
    Hello
</mdl-button>
<mdl-button>
    Web
</mdl-button>
<mdl-button accent>
    Components
</mdl-button>
```

<label class="mdl-color-text--primary">Result</label>
{% unpre %}
```html
<script>
customElements.define('mdl-button', class extends HTMLElement {
  connectedCallback() {
      this.classList.add('visible-on-ready');
      this.style.display = 'inline-block';
      this.style.height = '36px';
      this.style.margin = '4px';
      let className = '';
      if (this.getAttribute('primary') != null) {
          className = 'primary';
      }
      if (this.getAttribute('accent') != null) {
          className = 'accent';
      }
      zuix.loadComponent(this, '@lib/controllers/mdl-button', 'ctrl', {class: className});
  }
});
</script>
<!-- unity -->
<mdl-button primary>
    Hello
</mdl-button>
<!-- freedom -->
<mdl-button>
    Web
</mdl-button>
<!-- justice -->
<mdl-button accent>
    Components
</mdl-button>

```
{% endunpre %}


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

<!-- TODO: create a custom liquid tag for including examples -->
<label class="mdl-color-text--primary">Result</label>
<div class="example-container">
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
In the following example a [Gesture Helper](https://zuixjs.github.io/zkit/docs/controllers/gesture_helper) controller is added to a `div` container in order
to detect *swipe left* and *swipe right* gestures over it.

```html
<div ctrl z-load="@lib/controllers/gesture-helper"
     z-options="opts">
  <strong>Gesture detection area</strong>
  <p>Try swiping left or right.</p>
</div>
<script>
opts = {
  on: {
    'gesture:swipe': function(e, tp) {
      switch(tp.direction) {
        case 'left':
          this.playAnimation('animate__fadeInDown animate__fadeOutLeft');
          break;
        case 'right':
          this.playAnimation('animate__fadeInDown animate__fadeOutRight');
          break;
      }
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
      'gesture:touch': function(e, tp) {
        // TODO: handle touch
        console.log(e, tp);
      },
      'gesture:pan': function(e, tp) {
        // TODO: handle pan
        console.log(e, tp);
      },
      'gesture:release': function(e, tp) {
        // TODO: handle release
        console.log(e, tp);
      },
      'gesture:tap': function(e, tp) {
        // TODO: handle tap
        console.log(e, tp);
      },
      'gesture:swipe': function(e, tp) {
        console.log(e, tp);
        // TODO: handle swipe
        switch(tp.direction) {
          case 'up':
            break;
          case 'down':
            break;
          case 'left':
            this.playAnimation('animate__fadeInDown animate__fadeOutLeft');
            break;
          case 'right':
            this.playAnimation('animate__fadeInDown animate__fadeOutRight');
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

<a name="options"></a>
## Options

In the previous example the *z-options* attribute was used to provide a handler for events emitted by the gesture
controller (*"gesture:swipe"* event).

`z-options` attribute is used to provide options for a component. The value of this attribute can be the name of a
variable in the global scope that stores the options object, or it can be an inline JSON string of the options object.

<a name="events"></a>
### Event handlers

The `on` field can be provided in component's options to register handlers for DOM events and custom events emitted by
the component.

```html
<div z-load="my_component" z-options="opts"></div>
<script>
opts = {
  // Event handlers
  on: {
    // custom lifecycle events (created with "cp.trigger(..)")
    'my_component:event_1': function(e, data) {
      // handle event
    },
    'my_component:event_2': function(e, data) {
      // handle event
    },
    // standard lifecycle events
    'view:attach': function(e, element) {
      // the view has been attached to the host element
    },
    'component:loaded': function(e, element) {
      // the component has been loaded, but it might
      // be waiting for other dependencies before starting   
    },
    'component:ready': function(e, element) {
      // the component is now ready and fully operational
    },
    // standard DOM events
    'mouseout': function(e) {
      // component's view mouse-out event
    },
    'click': function(e) {
      // click over component's view
    },
    // ...
  },
  // Loader events callbacks
  ready: function(ctx) { // same as 'component:ready' event
    // ctx is the {ComponentContext} object
    // associated to the loaded component
    console.log('Loaded ' + ctx.componentId + ' with contextId = ' + ctx.contextId);
  },
  error: function(err) {
    // component loading error
    console.log('Oh-oh!', err);
  }
}
</script>
```

the `ready` and `error` option fields can be used to provide callbacks for handling component's loading events.  
*Event handlers* can also be directly provided using the `z-on` attribute.


### View's styles

The `css` option flag can be used for disabling the loading of the  view's style file. This is how the previous banner
example would look like without CSS file:

```html
<!-- 'links.css' file will not be loaded -->
<div view z-load="examples/links"
     z-options="{ css: false }"></div>
```
{% unpre '---------------------------------' %}
```html
<label class="mdl-color-text--primary">Result</label>
<div class="example-container">
  <div view z-load="https://zuixjs.org/app/content/docs/examples/links"
     z-options="{ css: false }" class="visible-on-ready"></div>
</div>
```
{% endunpre %}

and it can also be used to provide a custom CSS style for the view instance:

```html
<!-- 'links.css' file will not be loaded -->
<div view z-load="examples/links"
     z-options="my_test_options"></div>
<script>
my_test_options = {
  css: `
    :host {
      background-color: whitesmoke;
      padding: 8px;
    }
    a {
      color: darkgreen;
    }`
}
</script>
```
{% unpre '---------------------------------' %}
```html
<label class="mdl-color-text--primary">Result</label>
<div class="example-container">
  <div view z-load="https://zuixjs.org/app/content/docs/examples/links"
     z-options="my_test_options" class="visible-on-ready"></div>
</div>
<script>
my_test_options = {
  css: `
    :host {
      background-color: whitesmoke;
      padding: 8px;
    }
    a {
      color: darkgreen;
    }`
}
</script>
```
{% endunpre %}

### Priority

The `priority` option sets what the components' loading order will be. Its value is a number that can also have negative
values. The default value is zero and items with lesser value will get loaded first.

Loading priority can also be set directly on the host element tag through the `z-priority` attribute.

{% tryLink "Example on CodePen" "https://codepen.io/genielabs/pen/YQPxqJ" %}


### Lazy loading

If many components are placed on a page, the *lazy-loading* feature can be enabled in order to load components only if
they are visible in the page's viewport. This will speed up page booting time and increase responsiveness.

Lazy-loading can be automatic or manual.

**Automatic** &#8212; to automatically load components as they scroll into view, set the attribute `z-lazy="scroll"` on
the `body` element or the element that is actually hosting the scrollbars.

The attribute `z-lazy="false"` can be added on those child elements that we want to be loaded right away even if they
are not in the viewport area yet.

```html
<div class="vertical-scrollable" z-lazy="scroll">
    <!-- the first view will be loaded right away
         because of the 'z-lazy=false' option -->
    <div view z-load="content/preface" z-lazy="false"></div>
    <!-- other views inside the 'z-lazy' scroll container will
         be loaded only as the user scrolls the page down -->
    <div view z-load="content/chapter_01"></div>
    <div view z-load="content/chapter_02"></div>
    <!-- ... --->
    <div view z-load="content/chapter_12"></div>
    <div view z-load="content/appendix"></div>
</div>
```

{% tryLink "Example on CodePen" "https://codepen.io/genielabs/pen/jwbvdP" %}

**Manual** &#8212; to manually load components that are actually visible in the viewport, set the `z-lazy="true"` on the
container where lazy-loaded elements are hosted. Then `zuix.componentize()` method must be called in order to check for
visible components to load.

```js
zuix.componentize(host_element);
```

Lazy loading can also be set in the component's options using the `lazyLoad` option field.

With the `zuix.lazyLoad(false)` method is possible to disable lazy loading at a global level, and a following
`zuix.componentize()` call, will make all components to be loaded in one shot.

{% tryLink "Example on CodePen" "https://codepen.io/genielabs/pen/pwyJaE" %}


### Other options

These described so far are the more commonly used options. A list of all available option fields is provided in the
[ContextOptions](../api/zuix/Zuix/#ContextOptions) API.


<a name="defaultComponent"></a>
## The `default` component

By using the internal `default` component, it is possible to get advantage of *zuix.js* components' features, also on
standard HTML elements.

<label class="mdl-color-text--primary">Example</label>
```html
<div z-load="default" z-options="{ ready: onSimpleDivReady }">
  I am a simple <code>div</code> element...
</div>

<script>
function onSimpleDivReady(ctx) {
  const msg = ' and now also a <code>zuix.js</code> component!';
  ctx.$.append(msg).addClass('animate__animated')
          .playAnimation({
              classes: 'animate__bounce',
              options: {
                delay: '1s',
                duration: '1s',
                'iteration-count': 5
              }
          });
}
</script>
```

<label class="mdl-color-text--primary">Result</label>
{% unpre %}
```html
<script>
function onSimpleDivReady(ctx) {
  const fn = function() {
    const msg = ' and now also a <code>zuix.js</code> component!';
    ctx.$
      .append(msg).addClass('animate__animated')
      .playAnimation({
          classes: 'animate__bounce',
          options: {
            delay: '1s',
            duration: '1s',
            'iteration-count': 5
          }
      });
  }
  setTimeout(fn, 2000);
}
</script>

<div z-options="{ ready: onSimpleDivReady, lazyLoad: true }">
  I am a simple <code>div</code> element...
</div>
```
{% endunpre %}


The `z-load="default"` attribute can be omitted if any of the other `z-` attributes are in place (`z-behavior`, `z-on`,
`z-options`, `z-model`).

```html
<div z-options="{ ready: onSimpleDivReady }">
  I am a simple <code>div</code> element...
</div>
// ...
```



<a name="libraries-and-theming"></a>
## Libraries and theming

*zuix.js* has an internal session store used to store *zuix.js* configuration, that can also be used to store any other
custom data.

```js
// to store a session object
zuix.store('<object_name>', <object_value>);
// to get a session object
const myStoreObject = zuix.store('<object_name>');
```

The store named '**config**' is reserved for *zuix.js* configuration data, and it has the following format:
```js
zuix.store('config', {
  // default values
  "resourcePath": "/app/",
  "libraryPath": {
    "@lib": "https://zuixjs.github.io/zkit/lib/",
    "@hgui": "https://genielabs.github.io/homegenie-web-ui/app/",
    "@cdnjs": "https://cdnjs.cloudflare.com/ajax/libs/"
  },
  // override default config for a given <host_name> 
  "my_repo.github.io": {
    "resourcePath": "/my_repo/app/",
    "libraryPath": {
      "@lib": "https://zuixjs.github.io/zkit/lib/",
      "@hgui": "https://genielabs.github.io/homegenie-web-ui/app/",
      "@cdnjs": "https://cdnjs.cloudflare.com/ajax/libs/"
    }
  }
});
```

where `resourcePath` is the default base path when loading components from a relative location, and `libraryPath` is a
list of shortcuts that can be used as prefix in component's [*&lt;path&gt;*](../component/#) to load components from
different locations.

This is how the `@lib` prefix was used in the [controller example](../component/#type_ctrl), as a shortcut to [ZKit](https://zuixjs.github.io/zkit/)
component's library.

This way it's also possible to change a components' set by just changing those paths to another location where components
preserve the same files and folders structure.

So, theming become not just a matter of changing styles and graphics, but also a whole set of components and functionality
could be customized for a different theme by just pointing to a different library path in *zuix.js* configuration store.

