---
layout: side_drawer.html
order: 6
icon: javascript
title: Controller
summary: Implementation types, lifecycle, options, events.
description: Controller implementation types, lifecycle, options, events.
keywords:
- documentation
- api
- controller
- lifecycle
---

A controller is a JavaScript piece of code that can be associated to a view, and it manages its data, presentation and the
usage/interaction logic. Through a controller, it's possible to customize all aspects of a component's lifecycle since
it's early initialization up to the disposal of the component itself. This can be done by implementing component's
[lifecycle callbacks](../api/zuix/ContextController/#init).

## Loading a controller

A controller can be loaded programmatically using the [`zuix-load(..)`](../api/zuix/Zuix/#load) method, or it can be
loaded directly from the HTML template, by using the attributes `ctrl z-load="<component_id>"` on the host element:

```html
<div ctrl z-load="path/of/controller"></div>
```

when the `ctrl` attribute is present, only the `.js` controller file will be loaded and the host element (a `div` in this case)
will be set as the view of the loaded controller. If the `ctrl` attribute is not present, then the view files will also
be loaded from `.html` + `.css` files, unless differently specified in the `init` callback of the controller.

After loading, a [ComponentContext](../api/zuix/ComponentContext) object will be created as instance of the loaded
component.
A reference to a *ComponentContext* can be obtained with the [`zuix.context(..)`](../api/zuix/Zuix/#context) method:

```js
let myControllerContext;
zuix.context(hostElement, (context) => {
  myControllerContext = context;
}); 
```

or through the `ready` callback in the controller's [loading options](../api/zuix/Zuix/#ContextOptions).


## Lifecycle callbacks 

### `<controller>.init()`

The `init` function gets called right after the JavaScript controller has been loaded and before any other resource is
loaded. This function can be used to get, set component's options, or to load additional dependencies.

```js
cp.init = function() {
  const opts = cp.options();
  // enable view style encapsulation
  opts.encapsulation = true;
  // do not inherit styles from parent
  opts.resetCss = true;
  // do not load template's CSS file
  opts.css = false;
  // custom option
  if (opts.myCustomOption === 'some-value') {
    // TODO: handle custom option
  }
};
```


### `<controller>.create()`

The `create` function gets called right after all component's resources have been loaded. At this stage it is already possible
to access the component's view and the data model. This method is also employed to register input event listeners and declare
methods to expose publicly.


### `<controller>.update(target, key, value, path, old)`

This function gets called anytime a bound field of the data model is updated.


### `<controller>.dispose()`

This function gets called right before the component is unloaded and disposed, and it's employed to clear timers and correctly
dispose other resources that are not automatically handled by *zuix.js*.



## Implementation

A controller can be implemented in a `<component_name>.js` **file** using the following code template (ES5 class-like example):

```js
'use strict';

/*
* Private static fields and functions
*/
// TODO: private static fields/methods declaration

/**
 * ComponentName class
 * 
 * @class
 * @author Author Name
 * @version v1.0
 * @constructor
 * @param {ContextController} [cp] Same as `this`
 * @this {ContextController}
 */
function ComponentName(cp) {

  /*
   * Private fields
   */
  // TODO: private fields declaration


  /*
   * Lifecycle callbacks declaration
   */

  // called before component is loaded and before applying context options
  this.init = function() { /* ... */ };

  // called after loading, when the component is created
  this.create = function() { /* ... */ };

  // called when the component is disposed
  this.dispose = function() { /* ... */ }

  // called each time the data model is updated
  this.update = function(target, key, value, path, old) { /* ... */ }


  /*
   * Private functions
   */
  // TODO: private methods implementation

};

module.exports = ComponentName;
```

Or it can also be implemented inline, directly in the HTML page, as shown in the following **inline component** template (view + controller):

```html
<div z-view="path/of/component_name">
  <!-- component's view template content -->
</div>
<style media="#path/of/component_name">
  /* styles definitions of this component's view */
</style>
<script>
zuix.controller(function(cp) {
    
  /*
   * Private fields
   */
  // TODO: private fields declaration
    
    
  /*
   * Lifecycle callbacks declaration
   */
    
  // called before component is loaded and before applying context options
  cp.init = function() { /* ... */ };
    
  // called after loading, when the component is created
  cp.create = function() { /* ... */ };
    
  // called when the component is disposed
  cp.dispose = function() { /* ... */ }
    
  // called each time the data model is updated
  cp.update = function(target, key, value, path, old) { /* ... */ }
    
    
  /*
   * Private functions
   */
  // TODO: private methods implementation

}).for('path/of/component_name');
</script>
```

Static members are not possible in the case of an inline controller declaration.

Within the controller's scope, the context object `this`, is the [ContextController](../api/zuix/ContextController) instance through which is possible to
access the view template's fields, querying its DOM, handling input events and triggering output events, exposing public interface
members, and other common component's implementation tasks.

### Common tasks

Consider this simple view
```html
<div z-load="default">
    
    <div #message></div>
    
</div>
```
where, in the controller's code, `cp` is the `ContextController` instance:

- getting the view:  
  `const $view = cp.view()`
- querying the view's DOM  
  `const $elements = $view.find('<filter>')` or
  `const $elements = cp.view('<filter>')`
- getting the view's field `#message`  
  `const $msg = cp.field('message')` or  
  `const $msg = cp.model().message`
- listening to events  
  `$msg.on('click', eventCallbackFn)`
- emitting custom component's events  
  `cp.trigger('myevent', myEventData)`;
- exposing public methods
- `cp.expose('methodName', handlerFn)` or  
  `cp.expose({ 
    methodName1: handlerFn1,
    methodName2: handlerFn2, 
    /* ... */ 
  })`


See the [ContextController API](../api/zuix/ContextController) for a list of all available properties and methods.


### Examples

As an example, the following controller's code, is the implementation of a Material Design Light [button](https://getmdl.io/components/index.html#buttons-section):


<label class="mdl-color-text--primary">EXAMPLE CONTROLLER</label>
```js
'use strict';
/**
 * MdlButton class.
 * @constructor
 * @this {ContextController}
 */
function MdlButton() {

  this.create = () => {

    const $view = this.view();
    const options = this.options();
    const type = options.type || 'raised';
    $view.addClass('mdl-button mdl-js-button mdl-button--' + type + ' mdl-js-ripple-effect');
    if (options.class) {
      $view.addClass('mdl-button--' + options.class);
    }

  }

}
module.exports = MdlButton;
// file: "controllers/mdl_button.js"
```


This controller just adds the required CSS classes to turn the host element into an MDL button.
The same thing could be similarly done for Bootstrap, Materialize.CSS, or any other CSS UI Framework.


```html
<a ctrl z-load="controllers/mdl_button"> With </a>
... or ...
<a> Without </a>
```
{% unpre %}
```html
<a ctrl z-load="controllers/mdl_button">With</a>
... or ...
<a>Without</a>
```
{% endunpre %}


So, in the `create` lifecycle callback, the controller can access the [view](../api/zuix/ContextController#view) element and the component's 
[options](../api/zuix/ContextController#options), and in this example the controller recognizes two option fields, `type` and `class`,
that control the button appearance:

```html
<a ctrl z-load="controllers/mdl_button"
   z-options="{ type: 'fab', class: 'mini-fab' }">
  <i class="material-icons">mail</i>
</a>

<a ctrl z-load="controllers/mdl_button"
   z-options="{ type: 'flat' }">
    Flat
</a>

<a ctrl z-load="controllers/mdl_button">
    Regular
</a>
```
{% unpre %}
```html
<div layout="row center-spread">
    <div>
        <a ctrl z-load="controllers/mdl_button" z-options="{ class: 'mini-fab colored' }">
            <i class="material-icons">mail</i>
        </a>
    </div>
    <div>
        <a ctrl z-load="controllers/mdl_button"
           z-options="{ type: 'flat' }">
            Flat
        </a>
    </div>
    <div>
        <a ctrl z-load="controllers/mdl_button">
          Regular
        </a>
    </div>
</div>
```
{% endunpre %}

In this other example of an [MDL menu](https://getmdl.io/components/index.html#menus-section), the main `div` container
loads the `mdl_menu` controller, and contains the menu's items list and a button to activate the menu itself:

```html
<div ctrl z-load="controllers/mdl_menu" z-lazy="false"
     z-behavior="menuButtonBehavior" class="visible-on-ready">

  <!-- the menu is defined as a simple UL list -->
  <ul>
    <li>Menu option 1</li>
    <li>Menu option 2</li>
  </ul>

  <!-- the menu's FAB button -->
  <a ctrl z-load="controllers/mdl_button"
     z-options="{ class: 'mini-fab colored' }">
    <i class="material-icons">add</i>
  </a>

</div>
```

this time, the menu controller, besides adding the required classes for the *Material Design* menu, it also intercepts
when the MDL menu opens/closes, so that it can [trigger](../api/zuix/ContextController/#trigger) the `menu:show` and `menu:hide` custom events. This controller
also improves the MDL menu by adding auto-positioning feature, so the menu will slide up or down, based on the actual position
of the button.


{% unpre %}
```html
<div z-load="default" layout="column center-left" style="padding: 32px">
    <div ctrl z-load="controllers/mdl_menu" z-lazy="false" class="visible-on-ready"
         z-behavior="menuButtonBehavior">
        <ul>
            <li>Menu option 1</li>
            <li>Menu option 2</li>
        </ul>
        <a ctrl z-load="controllers/mdl_button"
           z-options="{ class: 'mini-fab colored' }" class="mdl-color--pink">
            <i class="material-icons">menu</i>
        </a>
    </div>
</div>
<script>
menuButtonBehavior = {
  'menu:show': function() {
      this.find('.material-icons').html('add')
          .css({ transform: 'rotate(135deg)' });
  },
  'menu:hide': function() {
      this.find('.material-icons').html('menu')
          .css({ transform: 'rotate(0)' });
  }
}
</script>
```
{% endunpre %}

Custom events triggered by the component, can then be used, like in this example, to animate the button with a *behavior*:
when the `menu:show` event occurs, the behavior's code will rotate the button element (`a`) by 135 degrees and will set
the icon *"close"*. When instead, the `menu:hide` event occurs, the button element is rotated back to 0 degrees and the
icon is set back to *"menu"*.


```html
<script>
menuButtonBehavior = {
  'menu:show': function() {
      this.find('.material-icons').html('add')
          .css({ transform: 'rotate(135deg)' });
  },
  'menu:hide': function() {
      this.find('.material-icons').html('menu')
          .css({ transform: 'rotate(0)' });
  }
}
</script>
```


### Global event hooks

While component events are local to each instance, global events have only one global listener (hook) and this kind of event
is usually employed to get notified about certain task progress, or to transform input data.  

There are three types of global events:
- *zuix.js* loader events
- component's allocation events
- component's custom events

Loader's events can be used to determine whether *zuix.js* is actually loading components or not, and, for instance, to
show a visible feedback to the user.

Component's allocation events can be used to process the view's HTML template and style before they are attached to the
DOM, and also to process the view's DOM after the component is loaded and before the component is actually created.

Custom component's global events can be used to allow notification or transformation for a type of components.

For an example on how to use this kind of events, see [zuix.hook(..)](../api/zuix/Zuix/#hook) in the API documentation page.


### Global resources and singleton components

Like the examples in these pages, where some components depend on MDL library, a controller implementation might depend
on some external libraries. To correctly deploy such a component then, a list of its dependencies should be provided as
pre-requisites, so that these dependencies can be added to the page hosting these components.

Alternatively, a component can declare all resources it requires in order to work properly, so that if not already loaded
in the page, these resources will be automatically loaded along with the component.

For this purpose the [`zuix.using(..)`](../api/zuix/Zuix/#using) method can be used to load common dependencies such as utility scripts,
stylesheets or utility/service controllers that are accessible application-wide. [Library shortcuts](../component#libraries-and-theming) can
also be used in the URL path.

Some examples:

```js
// Load library from CDN if not already included in the document
zuix.using('script', 'https://some.cdn.js/moment.min.js', function(resourcePath, hashId) {
  // can start using moment.js
});
// Load styles from CDN if not already included in the document
if (!zuix.$.classExists('.animate__animated .animate__bounce')) {
  zuix.using('style', '@cdnjs/animate.css/4.1.1/animate.min.css', function(resourcePath, hashId) {
    // AnimateCSS animation classes loaded
  });
}
if (!zuix.$.classExists('[layout]')) {
  const flexLayoutUrl = '@cdnjs/flex-layout-attribute/1.0.3/css/flex-layout-attribute.min.css';
  zuix.using('style', flexLayoutUrl, function(resourcePath, hashId) {
    // Flex Layout Attribute loaded
  });
}
// Load a singleton component (application-wide service)
myService = null; 
zuix.using('component', 'controllers/my-service-api', function(resourcePath, ctx) {
  // component loaded
  myService = ctx;
  myService.publicMethod1();
  myService.publicMethod2('test');
  // ...
});
```
