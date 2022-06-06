---
layout: side_drawer.liquid
options: mdl highlight
tags: documentation
group: documentation
order: 6
icon: loop
title: Events and Active&rarr;Refresh
summary: Events, scoped scripts, interop., active <code>@</code> refresh, observables.
description: About scoped scripts, dependencies, refresh-handlers, built-in @ handlers, custom handlers.
keywords:
- documentation
- api
- active
- refresh
- handlers
---

<a name="scripting_scope"></a>

Inside the view of a component, other than standard HTML event handlers, it's possible to add event handlers that live
in the component's context scripting scope, where the following predefined objects are available: 


| Name            | Description                                                                                                                |
|-----------------|----------------------------------------------------------------------------------------------------------------------------|
| `this`          | The target HTMLElement                                                                                                     | 
| `$this`         | Same as `"this"`, but *ZxQuery-wrapped*                                                                                    |
| `_this`         | If this element is also a component, `_this` is its component's context object                                             |
| `<field_name>`  | For each element in the view with a `#` (`z-field`) attribute, there will be a variable (only one for each distinct field) |
| `$<field_name>` | Same as above but *ZxQuery-wrapped*, allowing multiple element instances for each field                                    |
| `_<field_name>` | If the field is also a component, then, this will be its component's context object                                        |
| `context`       | The component's context that contains the target element                                                                   |
| `<context_id>`  | Alias of `context`, with the name of the component's `contextId` transformed to *camelCase*                                
| `model`         | The component's data model, shortcut of `context.model()`                                                                  |
| `$`             | The component's view as *ZxQuery* object, shortcut of `context.$`                                                          |
| `args`          | Optional arguments object                                                                                                  |


This kind of event handler can be added to an element as tag's attribute with the same name of the event enclosed in
parentheses: 

`(<event_name>)="<inline_code_or_handler_fn>"`

The value o such event attribute is evaluated as JavaScript expression and can contain reference to variables and functions
defined in the component's scripting scope.


## Scoped scripts

Scoped scripts are executed inside the component's context, and anything declared in it is only visible within the same
component's context. They can only be declared inline, wrapped in a `<script>` tag, with the attribute `type="jscript"`
and as direct children of the component's host element, or outside it, if the script tag's attribute `for="<context_id>"`
is added (where `<context_id>` is the value of `z-context` attribute).  
If multiple `jscript` occurrences are found, they will be merged into a single script.


{% capture example %}
```html
<div z-context="scope-test">

  <mdl-button :class="'primary'"
              (click)="localFunctionTest">
    Test Local
  </mdl-button>
  
  <mdl-button :class="'primary'"
              (click)="globalFunctionTest">
    Test Global
  </mdl-button>

  <div #test-message></div>
  
</div>

<script type="jscript" for="scope-test">

  function localFunctionTest(e, $el) {
    $testMessage
      .html(`I run inside the "${scopeTest.contextId}"'s component context.`);
          
    setTimeout(() => testMessage.innerHTML = '', 3000);
  }

</script>

<script>

  function globalFunctionTest(e, $el) {
    alert('I run in the global scope and cannot access component-local members.');
  }

</script>
```
{% endcapture %}

{{ example }}


<script>
customElements.define('mdl-button', class extends HTMLElement {
  static get observedAttributes() { return ['disabled']; }
  context = null;
  connectedCallback() {
      this.classList.add('visible-on-ready');
      this.style.display = 'inline-block';
      this.style.margin = '4px';
      zuix.loadComponent(this, '@lib/controllers/mdl-button', 'ctrl', {
          container: this.attachShadow({mode: 'closed'}),
          ready: (ctx) => this.context = ctx
      });
  }
  attributeChangedCallback(name, oldValue, newValue) {
    this.context.$.attr(name, newValue);
  }
});
</script>
<div style="min-height: 64px">
{% unpre %}
{{ example }}
{% endunpre %}
</div>

So, in the above example, the `localFunctionTest` runs inside the component's context and can access the
objects `scopeTest`, `testMessage`, `$testMessage` and other members available in the [scripting scope](#scripting_scope)
of the component.

The type `jscript` might sound unusual, but that's just because this way the browser will not recognize the type and
will ignore this script without the need of wrapping it inside a `<template>` container.
Furthermore, the `jscript` type, will be automatically recognized as
JavaScript syntax by some IDE, without requiring additional plugins for syntax highlighting.

<a name="default_refresh_handler"></a>
### The default *refresh()* handler

Inside its scripting scope, a component can be provided with a *default refresh handler*, a function that will be
called only when the component is visible in the viewport.

The *default refresh handler* can be implemented by adding the `refresh()` callback function to a scoped script.

When the component is not visible in the viewport, the refresh handler will enter a paused state and the event
`refresh:inactive` will be triggered. If it becomes visible again, the event `refresh:active` will be triggered.

While the main body of a scoped script is executed only once as initialization code, the `refresh()` function,
if defined, will be executed as long as the component is visible, with a delay of 100ms between each call or as
differently specified by the `refreshdelay` attribute of the enclosing `<script>` tag (value is expressed in
milliseconds).

{% capture example %}
```html
<div z-context="refresh-example">
  
  <mdl-button #button 
              :class="'primary'"
              :on:click="model.counter = 0"
              :model:counter="0">

    <span #counter></span>

  </mdl-button>

  <script type="jscript" refreshdelay="250">

    function refresh() {
      _button.model().counter++;
    }
    
  </script>

</div>
```
{% endcapture %}

{{ example }}

<div style="min-height: 64px">
{% unpre %}
{{ example }}
{% endunpre %}
</div>

So, when the above button is not visible on the screen, the component will be paused and the `refresh()` function will
not be called.

In this example, by using the context option `:on:click` it is possible to handle the `click` event from inside the
`mdl-button` component's context, and access the `model.counter` property directly. Otherwise, using the `(click)` event
handler, it would have been seen as an event handler running inside the context of the `refresh-example` component, where
to access the `#counter` field of the `mdl-button` component, we should have been using `_button.model().counter` in order
to address the field correctly.


### The default *ready()* handler

A component might be using other components, libraries and other dependencies. *zuix.js* tries to automatically detect
used dependencies and start the component only when all of them have been loaded to prevent runtime errors when
evaluating component's code that might reference one or more dependencies.

It's anyway possible to add custom code logic to determine when to start the component, by implementing the `ready()`
callback function, and that can be added to a scoped script to prevent errors from ahead of time evaluation of component's code.

When implemented, the `ready()` function, will simply return `false` if the conditions to start the component aren't
there yet, for instance if an asynchronously loaded object, used in the code of the view's template, is null.  
When the condition for starting the component are finally met, the `ready()` function will return `true` to let the
template's refresh handlers start safely.

As long as the `ready()` function returns `false`, the CSS class `.not-ready` will be applied to the
view of the component, and this can be used to customize a visible feedback of the *not ready* state.

<label class="mdl-color-text--primary">Example ready() handler</label>

{% capture example %}
```html
<div z-context="ready-example">

    <div #test>Not ready yet =/</div>
  
    <script type="jscript">
    let counter = 0;

    function refresh() {
        test.innerHTML = `Ready! =) ${counter++}`;
    }
    
    function ready() {
        return self.testIsReady;
    }
    </script>
</div>

<mdl-button @disable-if="self.testIsReady"
            (click)="self.testIsReady = true">
  Set ready
</mdl-button>
```
{% endcapture %}

{{ example }}

<div style="min-height: 120px">
{% unpre %}
{{ example }}
{% endunpre %}
</div>
<style>
  [z-context="ready-example"] {
    font-size: 200%;
    width: 200px;
    padding: 12px;
    margin-bottom:24px;
    border-radius: 4px;
    border: solid 1px purple; 
  }
</style>

This is the style used for the `.not-ready` class effect in the above example.

```html
<style>
  .not-ready {
    opacity: 0.5;
    animation: pulse .5s infinite ease-in-out;
  }
</style>
```


### Using a component from another

In a scoped script it's also possible to reference other components loaded in the page by adding the `using` attribute
to the `script` tag, with its value containing a comma separated list of the contexts' identifiers of required components.
A variable for each referenced context id, with its name equals to the component id converted to *camel case*, will be
available in the script scope.  

```html
<script type="jscript" for="my-component"
        using="color-select,other-component">
  
  // ...
  let color = colorSelect.getSelected();
  let test = otherComponent.test;
  // ...
  
</script>
```

### Exposing public methods or properties

With a scoped script it's also possible to add public methods and properties to a component so that these can be invoked
from other components as well:

```html
<script type="jscript">

  expose = {
    // adds a public property getter (read only)
    get test() {
      console.log('test getter');
      return 'ok';
    },
    // add a public method
    getSelected: function() {
      return _selected;
    }
  };

</script>
```





## Active&rarr;Refresh handlers

*Active&rarr;Refresh* handlers are user-definable functions that are associated with elements of a component's view and
that, like the *[default refresh handler](#default_refresh_handler)*, get executed only when the component is visible on screen,
or enter a *paused* state otherwise. Refresh handlers can be activated on any component's element, directly in the HTML
template by using the special element's attribute prefix `@` (here thus intended as a symbol for "*refresh/loop*").

This kind of functions are very small and very little CPU time-consuming, even because they might get executed already a
bunch of times in a second.

### Built-in `@` handlers

The following active&rarr;refresh handlers are available:

- `@if` &rarr; evaluates the given condition; if true, executes the code specified by the `@then` attribute, otherwise
  the `@else` one
- `@hide-if` &rarr; sets element's visibility to hidden if the given expression is truthy
- `@disable-if` &rarr; sets element to disabled if the given expression is truthy
- `@sync` &rarr; synchronizes the value of the element with the data model's field specified by `#` (`z-field`) attribute or by
  the `@sync` value
- `@get` &rarr; gets new values from evaluating the given expression and passes them as arguments of the script specified by the `@set`
  attribute
- `@set` &rarr; sets code to execute (works also without *@get*)

Next to any active&rarr;refresh handler it is also possible to specify the following options:

- `@delay="<refresh_delay_ms>"`
- `@active`

The `@delay` option can be used to set the refresh rate in milliseconds (default is 100ms), while the `@active`
option will force the execution of the refresh handler even if the element is not visible on screen.


In the next example, a component context with id `form-test` is created on a `div` container. It's then possible to use
`@` handlers and other component features inside its view.

There, four fields are declared using the `#<field_name>` attribute: `#check1`, `#check2`, `#check3` and `#proceed-button`.
Declared fields are then available as variables in the scoped script that is put at the end of the view and
that adds a few more declarations to the scripting scope.

<label class="mdl-color-text--primary">Example 1</label>
```html
<div z-context="form-test">

  <label for="agreed1">
      <input id="agreed1" type="checkbox" #check1>
      Check this
  </label>

  <label for="agreed2">
      <input id="agreed2" type="checkbox" #check2>
      Check that
  </label>

  <label for="agreed3" @disable-if="!bothChecked">
    <input id="agreed3" type="checkbox" #check3>
    Everything is in place!
  </label>

  <button #proceed-button
          @disable-if="!validFormData"
          (click)="handleClick">
      Proceed
  </button>
  
  <div @hide-if="!proceedButton.disabled">
      Please check both options in order to proceed.
  </div>

  <script type="jscript">
    let validFormData;
    let bothChecked;
    
    function refresh() {
      validFormData =
              check1.checked
              && check2.checked
              && check3.checked;
      bothChecked =
              check1.checked
              && check2.checked;
    }
    
    function handleClick() {
      alert('Yay! This worked! =)');
    }
  </script>
</div>
```

The two state variables `validFormData`, `bothChecked`, and the function `handleClick`, declared in the scoped script,
can be employed in the view template as values for `@disable-if` and `@hide-if` handlers, so that basically, the "*Proceed*"
button will be enabled only if all the three checkboxes are checked.


```html
<button #proceed-button
        @disable-if="!validFormData"
        (click)="handleClick"> Proceed </button>
```

<label class="mdl-color-text--primary">Result</label>
{% unpre %}
```html
<div z-load="default"
     class="example-container visible-on-ready" style="min-height:248px" layout="column top-start">
    <label #check1 ctrl z-load="@lib/controllers/mdl-checkbox" for="agreed1">
        <input type="checkbox" id="agreed1">
        Check this
    </label>
    <label #check2 ctrl z-load="@lib/controllers/mdl-checkbox" for="agreed2">
        <input type="checkbox" id="agreed2">
        Check that
    </label>
    <label #check3 ctrl z-load="@lib/controllers/mdl-checkbox" for="agreed3"
           @get="state.bothChecked as isInPlace"
           @set="if (!isInPlace && _this.checked) { _this.checked = false; } _this.disabled = !isInPlace">
      <input type="checkbox" id="agreed3">
      Everything is in place!
    </label>
    <div layout="rows center-left">
        <button ctrl z-load="@lib/controllers/mdl-button" style="min-width: 120px"
                @disable-if="!state.validFormData" #proceed-button
                (click)="handleClick">
          <span #label>Proceed</span>
        </button>
        <i @hide-if="state.validFormData" class="material-icons animate__animated animate__flash animate__infinite mdl-color-text--orange-500 warning-sign">
          report
        </i>
        <div @hide-if="state.validFormData">
            Please check all options to proceed.
        </div>
    </div>
  <script type="jscript" refreshdelay="175">
    const $label = $.field('label');
    const state = zuix.observable({
      validFormData: false,
      bothChecked: false
    }).subscribe({
      change: function(target, key, value, path, old) {
        if (key === 'validFormData') {
          if (value === true) {
            $label.html('Let\'s go! =)');
          } else {
            $label.html('Proceed');
          }
        }
      }
    }).proxy;
    function refresh() {
      // these are async components!
      if (_check1 && _check2 && _check3) {
        state.validFormData =
                _check1.checked
                && _check2.checked
                && _check3.checked;
        state.bothChecked =
                _check1.checked
                && _check2.checked;
      }
    }
    function handleClick() {
      alert('Yay! This worked! =)');
    }
  </script>
  <style media="#">
    :host {
      border: solid 1px whitesmoke;
      max-width: 460px;
      padding: 8px;
    }
    .warning-sign {
      margin-left: 16px;
      margin-right: 16px
    }
    label[disabled] {
      opacity: 0.5;
    }
    label{
      text-transform: none;
      font-weight:400;
      max-width:200px;
    }
    button{
      margin: 24px 12px;
    }
  </style>
</div>
```
{% endunpre %}


### `@sync` and two-way binding

View's fields are also accessible through the "`model`" object, that is the component's data model. In this case the
two-way data binding will automatically sync and map any value's change, as shown in the next example.

When using the data model to update component's field, the update is instantaneous because data model is
implemented using the platform's built-in [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) object, there's no need in using any refresh loop.

{% assign colors = "Black,DarkRed,GoldenRod,LimeGreen,DarkGreen" | split:"," %}

<label class="mdl-color-text--primary">Example 2</label>
```html
<div z-context="color-select">

  <label for="color">Color</label>
  <select id="color" #color @sync>
  {% for c in colors %}  <option>{{ c }}</option>
  {% endfor %}</select>
  
  <div class="color-preview"
       @get="model.color as backgroundColor"
       @set="$this.css({backgroundColor})"></div>

</div>
```

The `@sync` handler on the `select` will update the bound field `color` in the component's data model, anytime a new option
is selected from the `select` control.
While the `@get` handler on the color preview rectangle, will read value changes from `model.color` field, and pass new values
to the `@set` handler. So, what happen is that whenever the value of the select is changed, also the background color of
the preview rectangle will change accordingly.


{% unpre %}
```html
<div z-context="color-select" z-model="{color:'{{colors[2]}}'}" class="example-container">
  <div layout="row bottom-left">
    <div>
      <label for="color">Color</label>
      <div class="select-dropdown">
        <select id="color" #color @sync>
          {% for c in colors %}<option>{{ c }}</option>{% endfor %}
        </select>
      </div>
    </div>
    <div class="color-preview"
         @get="model.color as backgroundColor"
         @set="$this.css({backgroundColor})"></div>
  </div>
  <style media="#">
    .color-preview {
      width: 16px;
      height: 16px;
      border-radius: 6px;
      margin: 0 6px 7px;
      border: solid 3px rgba(255,255,255,0.4);
    }
    .select-dropdown,
    .select-dropdown * {
      margin: 0;
      padding: 0;
      position: relative;
      box-sizing: border-box;
    }
    .select-dropdown {
      margin-top: 8px;
      position: relative;
      background-color: #E6E6E6;
      border-radius: 4px;
    }
    .select-dropdown select {
      font-size: 1rem;
      font-weight: normal;
      max-width: 100%;
      padding: 8px 24px 8px 10px;
      border: none;
      background-color: transparent;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }
    .select-dropdown select:active, .select-dropdown select:focus {
      outline: none;
      box-shadow: none;
    }
    .select-dropdown:after {
      content: "";
      position: absolute;
      top: 50%;
      right: 8px;
      width: 0;
      height: 0;
      margin-top: -2px;
      border-top: 5px solid #aaa;
      border-right: 5px solid transparent;
      border-left: 5px solid transparent;
    }
  </style>
</div>
```
{% endunpre %}

So, setting directly `model.color = '<color_name>'` will also synchronize any bound element of the view, with the new
field value, as shown in the following example where the `model` of the *color-select* component above, is accessed from
the following component to get or set the currently selected color:

{% unpre %}
```html
<div z-load="default" style="min-height: 120px">
  <label>
    Selected
    <span @get="cm.color as color" @set="$this.html(color).css({color})">
      ?
    </span>
  </label>
  <div layout="rows center-left">
    {% for c in colors %}<div class="color-preview" style="background-color: {{ c }}"
         @if="cm.color === '{{ c }}'"
         @then="$this.addClass('selected')"
         @else="$this.removeClass('selected')"
         (click)="cm.color = '{{ c }}'"></div>{% endfor %}
  </div>
  <script type="jscript" using="color-select">
    const cm = colorSelect.model();
  </script>
  <style media="#">
    :host {
      padding-top: 2px;
      padding-bottom: 24px;
    }
    .selected {
      border: solid 8px rgba(255,255,255,0.75) !important;
      transition: border 0.1s ease-out;
    }
    .color-preview {
      cursor: pointer;
      width: 40px;
      height: 40px;
      margin: 8px 4px 0;
      border-radius: 20px;
      border: solid 8px white;
    }
  </style>
</div>
```
{% endunpre %}

```html
<div z-load="default">
  <label>
    Selected: <span @get="cm.color as color" 
                    @set="$this.html(color).css({color})"> ? </span>
  </label>

  <div layout="rows center-left">
{% for c in colors %}    <div (click)="cm.color = '{{ c }}'" class="color-{{ c }}"></div>
{% endfor %}  </div>

  <script type="jscript" using="color-select">
    const cm = colorSelect.model();
  </script>
</div>
```

Clicking a color will then assign a new value to the "color" field of the data model, `(click)="cm.color = '<color_name>'"`,
and the data binding will do the rest by synchronizing the *color-select* component automatically.


### Adding or overriding a `@` handler

An [ActiveRefreshHandler](../api/zuix/Zuix/#ActiveRefreshHandler) can be global or component-local. In the first case, it's stored in the global [store](../api/zuix/Zuix/#store) named
"*handlers*" and can be employed in any component's view. Or it can be added to the [handlers](../api/zuix/ComponentContext/#handlers) list of a
component's context, in which case is recognized only within the view of the component.

Refresh handlers will call the [refreshCallback](../api/zuix/Zuix/#ActiveRefreshCallback) to request a new "refresh" after the given delay
or as soon as it becomes visible again. If the *refresh handler* does not call the *refreshCallback*, the refresh loop will end.  
This is the case of the `@sync` handler, that it's not a *refresh-based* handler, but rather an event based one, and
will not call the *refreshCallback*. 

The following code, for instance, is the built-in `@hide-if` handler that is a *refresh-based* handler:

```js
zuix.store('handlers')['hide-if'] = ($view, $el, lastResult, refreshCallback) => {
  const code = $el.attr('@hide-if');
  const result = zuix.runScriptlet(code, $el, $view);
  if (result !== lastResult) {
    result ? $el.css({visibility: 'hidden'})
            : $el.css({visibility: 'visible'});
    lastResult = result;
  }
  refreshCallback(lastResult);
};
```

that basically reads the code to evaluate from the `@hide-if` attribute's value, then it executes the code using the utility
method `zuix.runScriptlet(..)` and, if the result is truthy and not equal to the previous evaluation, then it will set the
target element's (`$el`) visibility to `hidden`, or, if the result is false and different from the previous evaluation, then
it will set the visibility to `visible`. It will finally call the method `refreshCallback(lastResult)` to request a new
refresh call, passing to it the last result.

<a name="#observables"></a>
## Observables

[`zuix.observable(...)`](../api/zuix/Zuix/#observable) is a helper method built around the [`Proxy`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
object, and returns an observable instance of the given object in order to be able to detect changes made to it.

```js

const formState = {
  validFormData: false,
  bothChecked: false
};

const state = zuix.observable(formState).subscribe({
  change: function(target, key, value, path, old) {
    if (key === 'validFormData') {
      if (value === true) {
        $label.html('Let\'s go! =)');
      } else {
        $label.html('Proceed');
      }
    }
  }
}).proxy;

// ...
// the line below, for example, will trigger
// the `change` callback implemented above 
state.validFormData = false;

// ...

```

