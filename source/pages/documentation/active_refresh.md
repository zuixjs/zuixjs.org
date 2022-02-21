---
layout: side_drawer.html
order: 5
icon: loop
title: Active&rarr;Refresh
summary: Built-in <code>@</code> handlers, scripting scope, custom handlers.
description: About refresh-handlers, built-in @ handlers, scripting scope, custom handlers.
keywords:
- documentation
- api
- active
- refresh
- handlers
---

*Active&rarr;Refresh* handlers are user-definable functions that are associated with elements of a component's view and
that get executed only when the component is visible on screen, or enter a *paused* state otherwise. Refresh handlers
can be activated on any component's element, directly in the HTML template by using the special element's attribute prefix
`@` (here thus intended as a symbol for "*refresh/loop*").

This kind of functions are very small and very little CPU time-consuming, even because they might get executed already a
bunch of times in a second. For instance think of a function that validates the user input and that enables/disables a
button accordingly:

```html
<form z-load="default">
  <label for="firstName">First name</label>
  <input id="firstName" type="text" minlength="3">
  <button @disable-if="!firstName.value || !firstName.validity.valid">
      Ok
  </button>
</form>
```

{% unpre %}
```html
<div z-load="default">
  <label for="firstName">Name</label>
  <input id="firstName" type="text" minlength="3" autocomplete="off">
  <button @disable-if="!firstName.value || !firstName.validity.valid">
      Ok
  </button>
</div>
```
{% endunpre %}

In the above example the built-in handler `@disable-if`, evaluates the condition specified in the attribute's value and
if the condition is truthy, then the button is disabled, in this case if the input text is less than 3 characters long.


## Built-in `@` handlers

Along with the *@disable-if* handler, the following active&rarr;refresh handlers are available:

- `@if` &rarr; evaluates the given condition; if true, executes the code specified by the `@then` attribute, otherwise
  the `@else` one
- `@hide-if` &rarr; sets element's visibility to hidden if the given expression is truthy
- `@disable-if` &rarr; sets element to disabled if the given expression is truthy
- `@sync` &rarr; synchronizes the value of the element with the data model's field specified by `#` (`z-field`) attribute or by
  the `@sync` value
- `@get` &rarr; gets new values from evaluating the given expression and passes them as arguments of the script specified by the `@set`
  attribute
- `@set` &rarr; sets code to execute (works also without *@get*)
- `@on:<event>` &rarr; sets an event handler 


In the next  example, a default component context is created using the *z-load="default"* attribute on the container
`div`. It's then possible to use `@` handlers and other component features inside its view.

There, four fields are declared using the `#<field_name>` attribute (equivalent of `z-field="<field_name>"`): `#check1`,
`#check2`, `#check3` and `#proceed-button`. Declared fields are then available as variables in the  script of type
"`jscript`", that is put at the end of the view and that adds a few more declarations.

<label class="mdl-color-text--primary">Example 1</label>
```html
<div z-load="default">

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
          @on:click="handleClick">
      Proceed
  </button>
  
  <div @hide-if="!proceedButton.disabled">
      Please check both options in order to proceed.
  </div>

  <!-- Main View's Refresh Script -->
  <script type="jscript" refreshDelay="150">
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
  
  <!-- This CSS will be applied only to this view -->
  <style media="#">
    :host {
      /* the special selector :host referrers to the component's view */
      border: solid 1px whitesmoke;
      max-width: 460px;
      padding: 8px;
    }
    label[disabled] {
      opacity: 0.5;
    }
  </style>
</div>
```

The type `jscript` might sound unusual, but that's just because this way the browser will not recognize the type and
will ignore this script, instead it will be loaded by *zuix.js* as the **default refresh handler** of the component.
Furthermore, the `jscript` type, will be automatically recognized as JavaScript syntax by some IDE, without requiring
additional plugins for syntax highlighting. Next to the *jscript*, it's also possible to add a scoped CSS that will be
so applied only to the component's view.

## The default refresh handler

The *default refresh handler* of a component, like the others *active &rarr; refresh* handlers, will run only when the
component become visible in the viewport. The main body of the script's code will be executed only once, as initialization
code, while the `refresh()` function, if present, will be executed, as long as the component is visible, circa ten times
a second or as differently specified by the `refreshDelay` attribute of the `<script>` tag (value is expressed in milliseconds).

Any member declared in this script it's only visible to the component, and can be referenced also in `@` handlers' value
expression employed in the view's template. And so, the two state variables `validFormData`, `bothChecked`, and the
function `handleClick`, declared in the example script, can be employed in the template as values for `@disable-if`
and `@hide-if` handlers, so that basically, the "*Proceed*" button will be enabled only if all the three checkboxes are
checked.

```html
<button #proceed-button
        @disable-if="!validFormData"
        @on:click="handleClick"> Proceed </button>
```

<label class="mdl-color-text--primary">Result</label>
{% unpre %}
```html
<div z-load="default"
     class="example-container visible-on-ready" style="min-height:248px" layout="column top-start">
    <label #check1 ctrl z-load="controllers/mdl_checkbox" for="agreed1">
        <input type="checkbox" id="agreed1">
        Check this
    </label>
    <label #check2 ctrl z-load="controllers/mdl_checkbox" for="agreed2">
        <input type="checkbox" id="agreed2">
        Check that
    </label>
    <label #check3 ctrl z-load="controllers/mdl_checkbox" for="agreed3"
           @get="state.bothChecked as isInPlace"
           @set="if (!isInPlace && _this.checked) { _this.checked = false; } _this.disabled = !isInPlace">
      <input type="checkbox" id="agreed3">
      Everything is in place!
    </label>
    <div layout="rows center-left">
        <button ctrl z-load="controllers/mdl_button" style="min-width: 120px"
                @disable-if="!state.validFormData" #proceed-button
                @on:click="handleClick">
          <span #label>Proceed</span>
        </button>
        <i @hide-if="state.validFormData" class="material-icons animate__animated animate__flash animate__infinite mdl-color-text--orange-500 warning-sign">
          report
        </i>
        <div @hide-if="state.validFormData">
            Please check all options to proceed.
        </div>
    </div>
  <script type="jscript" refreshDelay="175">
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


## "Active &rarr; Refresh" scripting scope

When the code of a refresh handler is run, beside the context object `this`, which references the target HTML element itself,
also a few more predefined variables are available, either if it's the code of a *default refresh handler*, or an
expression in the value of a `@` handler:

| Member          | Description                                                                                                                |
|-----------------|----------------------------------------------------------------------------------------------------------------------------|
| `this`          | The target HTMLElement                                                                                                     | 
| `$this`         | Same as `"this"`, but *ZxQuery-wrapped*                                                                                    |
| `_this`         | If this element is also a component, `_this` is its component's context object                                             |
| `<field_name>`  | For each element in the view with a `#` (`z-field`) attribute, there will be a variable (only one for each distinct field) |
| `$<field_name>` | Same as above but *ZxQuery-wrapped*, allowing multiple element instances for each field                                    |
| `_<field_name>` | If the field is also a component, then, this will be its component's context object                                        |
| `context`       | The component's context that contains this element                                                                         |
| `model`         | The component's data model                                                                                                 |
| `$`             | The component's view as *ZxQuery* object                                                                                   |
| `args`          | Optional arguments object                                                                                                  |

additionally, like seen in the previous example, to the *default refresh handler* script, will be also available as variables,
all `#` fields declared in the view's template, and vice-versa, to any of the `@` handlers employed in the view, will be
also available all local variables and functions declared in the *default refresh handler*.

**Notice** that members starting with an underscore `_`, since they are components, are loaded asynchronously, so they will be `null`
until the component context of the underlying element has been loaded. So if there is any value's expression in the
template that involves such asynchronous objects, the `ready()` function should be provided in the *default refresh handler*
to prevent errors from evaluating expressions before async objects become available.

When implemented, the `ready()` function, will simply return `false` if any of the async objects used in template's value's
expressions is null, and otherwise, will finally return `true` to let the template's refresh handlers start safely.
As long as the `ready()` function returns `false`, the CSS class `.not-ready` will be applied to the
view of the component, and this can be used to customize a visible feedback of the *not ready* state.

View's fields are also accessible through the "`model`" object, that is the component's data model. In this case the
two-way data binding will automatically sync and map any value's change, as shown in the next example.


{% assign colors = "Black,DarkRed,GoldenRod,LimeGreen,DarkGreen" | split:"," %}

<label class="mdl-color-text--primary">Example 2</label>
```html
<div z-load="default" z-context="color-select">

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
field value, as shown in the following example where the `model` of the *color-select* component, is accessed from the
following component to get or set the selected color:

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
         @on:click="cm.color = '{{ c }}'"></div>{% endfor %}
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
{% for c in colors %}    <div @on:click="cm.color = '{{ c }}'" class="color-{{ c }}"></div>
{% endfor %}  </div>

  <script type="jscript" using="color-select">
    const cm = colorSelect.model();
  </script>
</div>
```

As shown in the *jscript* above, to reference another component, the `using` attribute is added to the `script` tag, with
its value containing a comma separated list of the contexts' identifiers of the required components. 
In this example the *context id* is `color-select` and it was assigned to the color select component using the attribute
`z-context="color-select"` on its container.
Like in other cases, names containing the `-` symbol will be converted to *camel case*, so in this case the assigned
variable name will be `colorSelect`.

Like seen for the `ready()` function and view's `@` handlers, also in this case the *default refresh handler* of the
component will not be started until the components specified with the `using` attribute are loaded. And also in this case
the class `.not-ready` is added to the container and removed only once all components are loaded.
Then the default refresh handler is started, and so, in this example, the `const cm = colorSelect.model()`, will assign
to the local `cm` variable, the *data model* of the *color-select* component.

Clicking a color will then assign a new value to the "color" field of the data model, `@on:click="cm.color = '<color_name>'"`,
and the data binding will do the rest by synchronizing the *color-select* component automatically.


It's also possible to add public methods and properties to a component so that these can be invoked from other components
as well:

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


## Adding or overriding a `@` handler

An [ActiveRefreshHandler](../api/zuix/Zuix/#ActiveRefreshHandler) can be global or component-local. In the first case, it's stored in the global [store](../api/zuix/Zuix/#store) named
"*handlers*" and can be employed in any component's view. Or it can be added to the [handlers](../api/zuix/ComponentContext/#handlers) list of a
component's context, in which case is recognized only within the view of the component.

Refresh handlers will call the [refreshCallback](../api/zuix/Zuix/#ActiveRefreshCallback) to request a new "refresh" after the given delay
or as soon as it becomes visible again. If the *refresh handler* does not call the *refreshCallback*, the refresh loop will end.

For example, this is the built-in `@hide-if` handler that is a *refresh-based* handler:

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

that basically read the code to evaluate from the `@hide-if` attribute's value, then it executes the code using the utility
method `zuix.runScriptlet(..)` and if the result is truthy and not equal to the previous evaluation, then it will set the
target element (`$el`) visibility to `hidden`, or, if the result is false and different from the previous evaluation, then
it will set the visibility to `visible`. It will finally call the method `refreshCallback(lastResult)` to request a new
refresh call, passing to it the last result.

Instead below, the built-in `@on` handler is an *event-based* handler that gets executed only once, and will never call the `refreshCallback`: 

```html
<script>
zuix.store('handlers').on = ($view, $el, lastResult, refreshCallback, attributeName) => {
  const handlerArgs = zuix.parseAttributeArgs(attributeName, $el, $view, lastResult);
  const code = $el.attr(attributeName);
  const eventName = handlerArgs.slice(1).join(':');
  $el.on(eventName, (e) => {
    const eventHandler = zuix.runScriptlet(code, $el, $view);
    if (typeof eventHandler === 'function') {
      eventHandler.call($el.get(), e, $el);
    }
  });
};
</script>
```


{% tryLink "Examples on CodeSandbox" "https://codesandbox.io/s/zuix-js-3ix3o?file=/behavior-example-1.html" %}
