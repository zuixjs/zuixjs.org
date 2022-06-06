---
layout: side_drawer.liquid
options: mdl highlight
tags: documentation
group: documentation
order: 4
icon: bolt
title: Context Options
summary: Options, component's events, style, lazy-loading, priority, theming.
description: Component's loading options, event handlers, styles, priority, theming.
keywords:
- documentation
- api
- component
- options
- lazy
---

<!--
Each instance of a component can be loaded using different options
-->

When loading a component some options might be provided, some of which are available for all components,
some others are custom options that can be implemented by the component for its own purpose.

In either case, these options (*context options*), can be passed adding the attribute `z-options` to the component's
host element.

The value of the `z-options` attribute can be the name of a variable in the global scope with the value of a JSON object
implementing one or more option fields described in the [ContextOptions](../api/zuix/Zuix/#ContextOptions) API. The value
can also be an inline JSON object, like in the following example where the `model` and `on` option-fields are used to set the
component's data model and event handlers for component emitted events:

```html
<div z-options="{model: testData, on: testEventHandlers}">

    <strong #title></strong>
    <p #text></p>

</div>
<script>

    testData = {
        title: 'Test',
        text: 'Just testing component options'
    }

    testEventHandlers = {
        'pointerdown': (e, el, $el) => $el.addClass('highlight'),
        'pointerup': (e, el, $el) => $el.removeClass('highlight')
    }

</script>
```

{% unpre %}
```html
<div z-options="{model: testData}" style="height: 80px"
     z-on="testEventHandlers">
    <strong #title></strong>
    <p #text></p>
    <style media="#">
        :host {
            background-color: #f7f7f7;
            user-select: none;
            -webkit-tap-highlight-color: transparent;
            cursor: pointer;
            border: solid 2px lime;
            border-radius: 12px;
            padding: 12px;
            display: inline-block;
            box-shadow: 0 2px 8px 4px rgba(0, 0, 0, 0.3);
            transition: box-shadow 75ms linear, background-color 250ms ease, border-color 175ms ease-in-out;
        }
        p { margin: 0; }
        :host.highlight {
            background-color: #fff;
            border-color: green;
            box-shadow: 0 1px 4px 1px rgba(0, 0, 0, 0.3);
        }
    </style>
</div>
<script>
    testData = {
        title: 'Test',
        text: 'Just testing component options'
    }
    testEventHandlers = {
        'pointerdown': (e, el, $el) => $el.addClass('highlight'),
        'pointerup': (e, el, $el) => $el.removeClass('highlight')
    }
</script>
```
{% endunpre %}


For convenience, next to the `z-options` attribute, also a few more attributes are available as  shortcuts to directly
address most commonly used option fields:

| HTTML Attribute | ContextOptions field | description                                        |
|-----------------|----------------------|----------------------------------------------------|
| `z-context`     | `contextId`          | Assigns an identifier name to the loaded component |
| `z-priority`    | `priority`           | Sets the loading priority                          |
| `z-lazy`        | `lazyLoad`           | Enables or disables lazy-loading                   |
| `z-on`          | `on`                 | Sets component's events handlers                   |
| `z-behavior`    | `behavior`           | Sets component's behaviors handlers                |
| `z-model`       | `model`              | Sets the data model                                |

So, using shortcuts, the `z-options` attribute in the previous example can be replaced by:

```html
<div z-model="testData"
     z-on="testEventHandlers">

    <!-- ... -->

</div>
```


### The generic option setter "`:`"

Using the generic option setter `:` it's possible to address and assign a value to any given option field.  
So, the previous example can be written also like this:

```html
<div :model:title=" 'Test' "
     :model:text=" 'Just testing component options' "
     :on="testEventHandlers"
     :on:click="() => console.log('clicked')">

    <!-- ... -->

</div>
```

While `z-*` attributes are simple static strings that are evaluated before the component is loaded, options attributes
specified via `:` setter, are evaluated as JavaScript expression and can contain any reference to the enclosing component
context's data.  
That's why, in the example above, string values are enclosed with single quote character `'`, because otherwise they would
get evaluated as a variable name rather than a string value, and a warning would be reported in the console if that variable
is not defined. 

As another example, the `mdl-button` component, already introduced in previous chapter, implements the `type`,
`class` and `theme` options to customize the appearance of the button:

{% capture example -%}
<mdl-button :type=" 'fab' "
            :class=" 'primary' "
            :theme=" 'deep_purple-indigo' ">
    flag
</mdl-button>
{% endcapture %}

```html
{{ example }}
```

{% unpre %}
```html
<script>
    customElements.define('mdl-button', class extends HTMLElement {
        connectedCallback() {
            this.classList.add('visible-on-ready');
            this.style.display = 'inline-block';
            //this.style.height = '56px';
            this.style.margin = '4px';
            zuix.loadComponent(this, '@lib/controllers/mdl-button', 'ctrl', {
                container: this.attachShadow({mode: 'closed'})
            });
        }
    });
</script>

{{ example }}

```
{% endunpre %}


It's also possible to create new option fields that are not declared elsewhere in the component, so in the following example
it is possible to create a counter and display the current date without actually writing any script: 

{% capture example %}
```html
<div z-load="default"

     :model:counter="0"
     :model:today-date="new Date().toLocaleDateString()">

    <h4>
        <strong #counter @set="model.counter++"
                         @delay="1000"></strong>
        -
        <span #today-date></span>
    </h4>

</div>
```
{% endcapture %}

{{ example }}

{% unpre %}
{{ example }}
{% endunpre %}

The attributes starting with `@` in this example, are [*Active Refresh Handlers*](../active_refresh/) and are explained later in this guide.


<a name="events"></a>
### Component's events

In the `{ContextOptions}` object there are three fields to for handling component's events:

- `ready`
- `error`
- `on`

Loading events can be trapped using the `ready` and `error` option fields, while DOM events, including component's
life-cycle and custom events, can be trapped using the `on` field.

Note that life-cycle events `view:create` and `component:loaded` can be only trapped when used from a `z-*` attribute,
because these events are triggered before the component is actually ready and won't work from a `:` option setter.

<div layout="row center-left">
  <label class="mdl-color-text--primary">Example</label>
  <div style="margin-top: 24px; margin-left: 8px">Component's options with event handlers</div>
</div>

```html
<div z-load="my_component" z-options="opts"></div>

<script>

opts = {

  // Event handlers
  on: {

    // standard lifecycle events
    'view:create': function(e, element) {
      // the view has been attached to the host element
    },
    'component:loaded': function(e, element) {
      // the component has been loaded, but it might
      // be waiting for other dependencies before starting   
    },
    'component:ready': function(e, element) {
      // the component is now ready and fully operational
    },
    
    // custom component events (created with "$.trigger(..)")
    'my_component:event_1': function(e, data) {
      // handle event
    },
    'my_component:event_2': function(e, data) {
      // handle event
    },

    // standard DOM events
    'mouseout': function(e) {
      // component's view mouse-out event
    },
    'click': function(e) {
      // click over component's view
    },
    // ... any other standard event

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


### View's style

The `css` option field can be used to disable the loading of the view's `.css` style file.
For instance, this is how the banner in the previous chapter example would look like without CSS file:

```html
<!-- 'links.css' file will not be loaded -->
<div view z-load="examples/links"
     :css="false">
 </div>
```
{% unpre '---------------------------------' %}
```html
<label class="mdl-color-text--primary">Result</label>
<div class="example-container">
  <div view z-load="https://zuixjs.org/app/content/docs/examples/links"
       :css="false" class="visible-on-ready">
  </div>
</div>
```
{% endunpre %}

and it can also be used to provide a custom CSS style for the view instance:

```html
<!-- 'links.css' file will not be loaded -->
<div view z-load="examples/links"
     :css="my_test_css"></div>
<script>
my_test_css = `
    :host {
        background-color: whitesmoke;
        padding: 8px;
    }
    a {
        color: darkgreen;
    }`;
</script>
```
{% unpre '---------------------------------' %}
```html
<label class="mdl-color-text--primary">Result</label>
<div class="example-container">
  <div view z-load="https://zuixjs.org/app/content/docs/examples/links"
       :css="my_test_css" class="visible-on-ready"></div>
</div>
<script>
my_test_css = `
    :host {
        background-color: whitesmoke;
        padding: 8px;
    }
    a {
        color: darkgreen;
    }`;
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


<a name="libraries-and-theming"></a>
## Libraries and theming

*zuix.js* has an internal, volatile, session store used to store *zuix.js* configuration, and that can also be used to store
any other custom data.

```js
// to store a session object
zuix.store('<object_name>', <object_value>);
// to get a session object
const myStoreObject = zuix.store('<object_name>');
```

The store named '**config**' is reserved for *zuix.js* configuration, and it has the following format:
```js
zuix.store('config', {
  // default values
  "resourcePath": "/app/",
  "libraryPath": {
    "@lib": "https://zuixjs.github.io/zkit/lib/1.1/",
    "@hgui": "https://genielabs.github.io/homegenie-web-ui/app/",
    "@cdnjs": "https://cdnjs.cloudflare.com/ajax/libs/"
  },
  // override default config for a given <host_name> 
  "my_repo.github.io": {
    "resourcePath": "/my_repo/app/",
    "libraryPath": {
      "@lib": "https://zuixjs.github.io/zkit/lib/1.1/",
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

