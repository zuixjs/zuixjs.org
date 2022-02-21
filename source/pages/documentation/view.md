---
layout: side_drawer.html
order: 4
icon: html
title: View
summary: Data binding, binding adapters, accessibility, behaviors.
description: View, Data binding, binding adapters, accessibility, behaviors.
keywords:
- documentation
- api
- view
- data binding
- adapters
- accessibility
- behavior
---

A *view* is the *visual* part of a component, and it consists of an `.html` template file, and a `.css` file for styles
definition, both with the same base name, which is also the name of the view:
- `<component_id>.html`
- `<component_id>.css` <small>(optional)</small>

A *view* can also be implemented inline, rather than in separate files, and can be declared by adding the `z-view`
attribute to its container element.

The value of `z-view` attribute is meant to be a unique identifier (`[<path>/]component_name`) and shall not match the
identifier of any other view placed in a file or inline in the same page, unless we want to *override* it.

<label class="mdl-color-text--primary">Example</label>
<small>Inline declaration of the view `inline/example/hello_world`:</small>
```html
<!-- HTML Template -->
<div z-view="inline/example/hello_world">
  <h1 class="animate__animated animate__bounceIn">
    Hello World!
  </h1>
</div>
<!-- CSS styles -->
<style media="#inline/example/hello_world">
h1 {
  color: steelblue;
  font-weight: 300;
}
</style>
```

the above code is just a declaration of a view and **will not produce any visible content**, to actually load an instance
of the `hello_word` view, the following code is used:

```html
<div view z-load="inline/example/hello_world"></div>
```

{% unpre %}
```html
<!-- BEGIN: Inline Template -->
<div z-view="inline/example/hello_world">
    <h1 #title class="animate__animated animate__bounceIn">Hello World!</h1>
</div>
<style media="#inline/example/hello_world">
/* TODO: view styles definitions */
h1 {
  color: steelblue;
  font-weight: 300;
  margin: 0;
}
</style>
<!-- END: Inline Template -->

<label class="mdl-color-text--primary">Result</label>
<div layout="row center-center" class="example-container">
    <div view z-load="inline/example/hello_world" class="visible-on-ready"></div>
</div>
```
{% endunpre %}

<a name="data_binding"></a>
## Data binding

In the previous example, the text "Hello World" is static and cannot be customized, but an *HTML template* can also have
elements of the view whose value is bound to fields of a *data model* that can be provided with the component's loading
options.

To bind the value of an element in the HTML template to a field of a *data model*, the `#<field_name>` attribute (shorthand
of `z-field="<field_name>"`), is added to the element in order to specify the name of the corresponding field in the data
model.

<label class="mdl-color-text--primary">Example</label>
<small>Declaration of an inline view with `title` and `subtitle` fields:</small> 
```html
<div z-view="inline/example/article_header">
  <h1 #title class="animate__animated animate__fadeInDown">
    Example title
  </h1>
  <p #subtitle class="animate__animated animate__fadeInUp">
    Example article subtitle
  </p>
</div>
```

{% unpre '----------------------------' %}
```html
<!-- BEGIN: Inline Template -->
<div z-view="inline/example/article_header">
  <h1 #title class="animate__animated animate__fadeInDown">
      Example title
  </h1>
  <p #subtitle class="animate__animated animate__fadeInUp">
      Example article subtitle
  </p>
</div>
<style media="#inline/example/article_header">
/* TODO: view styles definitions */
h1 {
  color: steelblue;
  font-weight: 300;
  margin: 0;
}
p { color: slategray; margin: 0 }
</style>
<!-- END: Inline Template -->

<label class="mdl-color-text--primary">Preview</label>
<div layout="row center-center" class="example-container">
  <div view z-load="inline/example/article_header" class="visible-on-ready"></div>
</div>
```
{% endunpre %}

Then, to set the actual data to display in `#<field_name>` elements, the `z-model` attribute can be added to the host element,
to pass a *JSON data object* with the actual data to display:

```html
<div view z-load="inline/example/article_header" z-model="{
  title: 'Image from Mars',
  subtitle: 'A Perseverance rover scientist’s favorite shot of Jezero Crater\'s \'Delta Scarp\'.'
}"></div>
```

{% unpre '----------------------------' %}
```html
<div layout="row center-center" class="example-container">
  <div view z-load="inline/example/article_header" z-model="{
    title: 'Image from Mars',
    subtitle: 'A Perseverance rover scientist’s favorite shot of Jezero Crater\'s \'Delta Scarp\'.'
  }" class="visible-on-ready"></div>
</div>
```
{% endunpre %}

It's also possible to map a field with a different name, other than `<field_name>`, by specifying a value for the `#`
attribute with the name of the mapped field: `#<field_name>="<mapped_field_name>"` (equivalent of `z-field="<field_name>"
z-bind="<mapped_field_name>"`).

To declare a *data model* with nested fields, dotted names syntax can be used, like with `link.url` and `link.title`
fields in the following template example of a [Material Design Lite](https://getmdl.io/components/index.html#cards-section)
card.

<label class="mdl-color-text--primary">Example</label>
<small>`templates/mdl_card.html`</small>
```html
<!-- Template of a Material Design card -->
<div class="mdl-card mdl-shadow--8dp">
  <div class="mdl-card__title">
    <img #image src="examples/images/card_placeholder.jpg" class="portrait" alt="Cover image">
    <h1 #title class="mdl-card__title-text mdl-color-text--white animate__animated animate__fadeInDown">
      Card title
    </h1>
  </div>
  <div #text class="mdl-card__supporting-text animate__animated animate__fadeInUp">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Aliquam accusamus, consectetur.
  </div>
  <div class="mdl-card__actions mdl-card--border animate__animated animate__fadeInRight">
    <a #url="link.url" class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-color-text--accent">
      <span #link.title>
        Open
      </span>
    </a>
  </div>
</div>
```

<label class="mdl-color-text--primary">Preview</label>
{% unpre '----------------------------' %}
```html
<div self="size-x1" layout="row center-center" class="example-container" style="min-height: 357px">
  <div view z-load="templates/mdl_card" self="sm-full" class="visible-on-ready" style="max-width: 460px"></div>
</div>
```
{% endunpre %}


When loading a view, the data provided through the `z-model` attribute, can be passed in either of the following ways:

- as inline string (like in the previous example)
```html
<div view z-load="templates/mdl_card" z-model="{
  title: 'Down the rabbit hole',
  image: 'examples/images/card_cover_2.jpg',
  text: 'Luckily for Alice, the little magic bottle had now had its full effect, and she grew no larger&hellip;',
  link: {
    title: 'Read more',
    url: '#'
  }
}" class="visible-on-ready"></div>
```

- or with a variable
```html
<div view z-load="templates/mdl_card" z-model="myCardData"></div>
<script>
myCardData = {
  title: 'Down the rabbit hole',
  image: 'examples/images/card_cover_2.jpg',
  text: 'Luckily for Alice, the little magic bottle had now had its full effect, and she grew no larger&hellip;',
  link: {
    title: 'Read more',
    url: '#'
  }
};
</script>
```

<label class="mdl-color-text--primary">Result</label>
{% unpre '----------------------------' %}
```html
<div self="size-x1" layout="row center-center" class="example-container" style="min-height: 325px">
  <div view z-load="templates/mdl_card" z-model="{
    title: 'Down the rabbit hole',
    image: '{{app.resourcePath}}content/docs/examples/images/card_cover_2.jpg',
    text: 'Luckily for Alice, the little magic bottle had now had its full effect, and she grew no larger&hellip;',
    link: {
       title: 'Read more',
       url: 'javascript:void(0)'
    }
  }" self="sm-full center" class="visible-on-ready" style="max-width: 460px"></div>
</div>
```
{% endunpre %}


### Binding Adapters

Sometimes it might be required to have more control over how the value of a data model's field affects the view. For this
purpose *binding adapters* can be used.

A *binding adapter* is a function that gets called to update bound elements of a view, based on the actual values of the
data model's fields.

A *binding adapter* gets automatically called everytime a new data model is set, or if the `context.modelToView()` method
is called programmatically. In both cases, the *binding adapter* function, will get called for each `#<field_name>` or `z-bind`
attribute declared in the view's template and will provide required code to update the view:

```javascript
/** @type {BindingAdapterCallback} */
function vm_binding_adapter($element, fieldName, $view, refreshCallback) {
  // TODO: adapter code to update `$element` bound
  //       to `fieldName` data model's field
}
```

where `$element` is the element of the view with `#<field_name>`/`z-bind` attribute, `fieldName` is the attribute value,
that is the name of the bound field in the data model, and `$view` is the view's element itself.

The [`refreshCallback`](../api/zuix/ComponentContext/#BindingAdapterCallback) is a callback that can be used either for
postponing the update of field's bound `$element` (eg. data is not available yet), or to request a cyclic refresh of the
same `$element`/`fieldName`.

<label class="mdl-color-text--primary">Example</label>
<div layout="column top-center">
{% include './view/adapter_example_1.html' %}
</div>

```html
{% include './view/adapter_example_1.html' %}
```

In the above example the *binding adapter* is used to handle all bound fields of the data model. This binding adapter
also checks if the component is visible before updating view's fields. If it's not visible then it will enter an idle
state postponing the refresh.

{% unpre '---------------------------------' %}
```html
<!-- Contact Chip view template -->
<div z-view="inline/common/contact_chip">
  <div class="mdl-chip mdl-chip--contact mdl-color--blue mdl-color-text--white mdl-shadow--4dp animate__animated animate__fadeIn">
    <img #image class="mdl-chip__contact" src="{{app.resourcePath}}content/docs/examples/images/avatar_00.png" alt="avatar">
    <div #name class="mdl-chip__text">Contact Name</div>
  </div>
</div>
<style media="#inline/common/contact_chip">
    /* TODO: view styles definitions */
</style>

<!-- BEGIN: Inline View - Example Data Binding -->
<div z-view="inline/chip_example_result">
    <div layout="rows center-spread">
        <div view z-load="inline/common/contact_chip"
             data-id="0" z-model="chip_adapter_fn" class="visible-on-ready"></div>
        <div view z-load="inline/common/contact_chip"
             data-id="1" z-model="chip_adapter_fn" class="visible-on-ready"></div>
        <script>
            chip_items = {
                "0": { name: 'Foo Bar', image: '{{app.resourcePath}}content/docs/examples/images/avatar_02.png'},
                "1": { name: 'Jane Doe', image: '{{app.resourcePath}}content/docs/examples/images/avatar_01.png'},
                "2": { name: 'Mikey M.', image: '{{app.resourcePath}}content/docs/examples/images/avatar_03.png'}
            };
            chip_adapter_fn = function($element, field) {
                const id = this.attr('data-id');
                const value = chip_items[id][field];
                switch (field) {
                    case 'name':
                        $element.html(value);
                        break;
                    case 'image':
                        $element.attr('src', value);
                        break;
                }
            };
        </script>
    </div>
</div>
<style media="#inline/chip_example_result">
    /* TODO: styles definitions */
</style>
<!-- END: Inline View - Example Data Binding -->
```
{% endunpre %}

In the case of a `JSON` data model, it's also possible to use a *binding adapter* for each single field, like with the
field `name` in the following example:

<label class="mdl-color-text--primary">Example</label>
```html
<!-- Foo Bar chip -->
<div view z-load="inline/common/contact_chip"
     z-model="foo_bar_contact"></div>
<!-- Jane Doe chip -->
<div view z-load="inline/common/contact_chip"
     z-model="a_random_contact"></div>

<script>
// example inline data model
foo_bar_contact = {
  image: 'images/avatar_02.png',
  name: 'Foo Bar'
};
// the field `name` is updated using
// a binding adapter
a_random_contact = {
  image: 'images/avatar_01.png',
  name: function($element, field, $view, refreshCallback) {
    const name = a_random_name();
    $element.html(name);
  }
};
function a_random_name() {
  // let's pretend this is random =))
  return 'Jane Doe';
}
</script>
```

{% unpre '----------------------------' %}
```html
<script>
// example inline data model
foo_bar_contact = {
    image: '{{app.resourcePath}}content/docs/examples/images/avatar_02.png',
    name: 'Foo Bar '
};
a_random_contact = {
    image: '{{app.resourcePath}}content/docs/examples/images/avatar_01.png',
    name: nameUpdateFn
};

function nameUpdateFn(element, field, view, refreshCallback) {
  element.html(a_random_name());
}
function a_random_name() {
  return 'Jane Doe';
}
</script>

<label class="mdl-color-text--primary">Result</label>
<div class="example-container">
  <div layout="rows center-spread">
    <div view z-load="inline/common/contact_chip"
      data-id="0" z-model="foo_bar_contact" class="visible-on-ready"></div>
    <div view z-load="inline/common/contact_chip"
      data-id="1" z-model="a_random_contact" class="visible-on-ready"></div>
  </div>
</div>
```
{% endunpre %}


## Accessibility

The data model can also be set directly inside the host element through HTML tags, and this will also provide a default
visualization in case the view's template is still loading or JavaScript is not enabled.

The following example shows how to embed data model's fields with HTML code inside the host element using `#<field_name>`
attribute:

<label class="mdl-color-text--primary">Example</label>
```html
<div view z-load="templates/mdl_card">

  <h1 #title>Let's code!</h1>
  <img #image src="examples/images/card_cover_3.jpg" alt="Cover image" role="presentation">
  <p #text>
    Yes we can!
  </p>
  <a #link.url href="#">
    <span #link.title>Take me there</span>
  </a>

</div>
```

and the above code, as is, will also provide a default visualization:

{% unpre '---------------------------------' %}
```html
<label class="mdl-color-text--primary">Result</label>
<div self="size-x1" layout="column center-center">
  <div z-field="card-example-1" self="sm-full" style="width:100%; max-width: 460px;min-height: 335px">
    <h1 #title class="animate__animated animate__fadeIn" style="margin: 0">Let's code!</h1>
    <img #image class="animate__animated animate__fadeIn" src="{{app.resourcePath}}content/docs/examples/images/cover_javascript.jpg" alt="cover" style="width: 100%;padding: 8px">
    <p #text class="animate__animated animate__fadeIn">
      Yes we can!
    </p>
    <a #link.url href="javascript:void(0)" class="animate__animated animate__fadeIn">
      <span #link.title>Take me there</span>
    </a>
  </div>
</div>
<script>
cardViewContainer1 = zuix.field('card-example-1');
function loadMdlCard(container) {
  zuix.loadComponent(container, 'templates/mdl_card', 'view', {
    ready: (ctx) => ctx.$.animateCss('zoomIn', {duration: '300ms'})
  });
}
</script>

<div ctrl z-load="controllers/mdl_menu" z-lazy="false" class="visible-on-ready" layout="column center-center">
  <a onclick="zuix.$(this).animateCss('rubberBand', {duration: '250ms'})">Try me!</a>
  <ul>
    <li onclick="loadMdlCard(cardViewContainer1)"
        @disable-if="zuix.context(cardViewContainer1)">Load view "mdl_card"</li>
    <li onclick="zuix.unload(cardViewContainer1)"
        @disable-if="!zuix.context(cardViewContainer1)">Unload</li>
  </ul>
</div>
```
{% endunpre %}

to actually load or unload the `templates/mdl_card` view, use the "Try me" button above.

Data model's fields, in this case, are HTML elements inside the host element, that are automatically mapped to a certain
property of the target element in the view template, depending on its type.

For instance, if the target element is `img`, then the mapped property will be `.src`, while if it's a `div` or a `p`,
it will be the `.innerHTML` property. A binding adapter can eventually be used to override the way elements are mapped
internally.

The host element body can also be used to simply provide an alternative text description for browsers where Javascript is
disabled, and a *loading* message to show while the component is loading for browsers where Javascript is enabled:

```html
<div view z-load="templates/mdl_card" z-model="{
  title: 'Some title',
  image: 'examples/images/card_cover_4.jpg',
  text: 'Some great encouraging text.',
  link: {
    title: 'Just do it!',
    url: '#'
  }
}">
  <h1>-=| loading |=-</h1>
  <div class="mdl-spinner mdl-js-spinner is-active"></div>
  <noscript>
    This component works only in JavaScript enabled browsers.
  </noscript>
</div>
```

{% unpre '---------------------------------' %}
```html
<label class="mdl-color-text--primary">Result</label>
<div self="size-x1" layout="column center-center">
  <!--
    The `z-ready` attribute can be used to
    prevent default component from being loaded.
    The component will be loaded later with
    `loadMdlCard(..)' in js code.
  -->
  <div z-field="card-example-2" z-ready z-model="{
    title: 'Some title',
    image: '{{app.resourcePath}}content/docs/examples/images/card_cover_4.jpg',
    text: 'Some great encouraging text.',
    link: {
       title: 'Just do it!',
       url: 'javascript:void(0)'
    }
  }" self="sm-full" style="width:100%; max-width: 460px;min-height: 335px">
    <div layout="column center-center" style="min-height: 335px">
        <div class="animate__animated animate__bounceIn" style="width: 100%;text-align: center; padding:24px; font-size: 160%;">
            <code>-=| loading |=-</code>
        </div>
        <div class="mdl-spinner mdl-js-spinner is-active"></div>
        <noscript>
          This component works only in JavaScript enabled browsers.
        </noscript>
    </div>
  </div>
</div>
<script>
cardViewContainer2 = zuix.field('card-example-2');
</script>

<div ctrl z-load="controllers/mdl_menu" z-lazy="false" class="visible-on-ready" layout="column center-center">
  <a onclick="zuix.$(this).animateCss('rubberBand', {duration: '250ms'})">Try me!</a>
  <ul>
    <li onclick="loadMdlCard(cardViewContainer2)"
        @disable-if="zuix.context(cardViewContainer2)">Load view "mdl_card"</li>
    <li onclick="cardViewContainer2.animateCss('flipOutX', {duration: '500ms'}, ()=> zuix.unload(cardViewContainer2))"
        @disable-if="!zuix.context(cardViewContainer2)">Unload</li>
  </ul>
</div>
```
{% endunpre %}

Since components can be dynamically loaded, unloaded or replaced, it is also possible to select specific components'
layout, based for instance, on the device's screen size/orientation or a user selectable theme. All without changing the
HTML code of the page, that will basically host the components' data models itself, and also provide through it a default
visualization of the page that will even work without Javascript.


## Behaviors

*Behavior Handlers* determine how a view will react and behave upon certain events, like user interaction or state-change
events. It's a different thing from regular events, since behavior are highly generic and reusable on groups or categories
of elements. They are also very different from CSS animations, since behind behaviors there is a user-definable logic
implemented with *JavaScript* code.

In a similar way to [Event Handlers](../component/#events), *Behavior Handlers* can be declared in the [*component's options*](..//api/zuix/Zuix/#ContextOptions)
through the property `behavior`:

```html
<script>
options = {
  // behavior handlers
  behavior: {
    '<event_name>': function(e, data, $el?) {
      // the context object `this` is same as `$el`
    },
    // other behaviors ...
  },
  // event handlers
  on: { /* ... */ }  
  // other component's options...
}
</script>
<div z-load="my/component" z-options="options"></div>
```

where `<event_name>` is the name of the event (eg. `click`, `mouseover`, ...), and `function(e, data, $el?)` is the associated
[EventCallback](../api/zuix/ComponentContext/#EventCallback) that will be called each time the `<event_name>` occurs.

*Behavior Handlers* can also be directly declared with the `z-behavior` attribute on the host element:

```html
<script>
componentBehavior = {
    '<event_name>': function(e, data, $el?) {
        // the context object `this` is same as `$el`
    },
    // other behaviors ...
};
</script>
<div z-load="my/component" z-behavior="componentBehavior"></div>
```

Using the internal [*default component*](../component/#defaultComponent), it is possible to get advantage of behaviors
and other component's features, also on standard HTML elements as shown in the example below, where a standard `input`
element is enhanced with a visual feedback to report user input errors using HTML5 [built-in form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#built-in_form_validation_examples).

<label class="mdl-color-text--primary">Example</label>
```html
<input z-behavior="checkValidityBehavior"
       type="text" value=""
       placeholder="Enter nickname"
       pattern="[a-zA-Z0-9]+" minlength="4" maxlength="10"
       message="Choose a name between 4 and 10 chars long, only letters and numbers."
       aria-describedby="input-error">

<small id="input-error"></small>
```
<label class="mdl-color-text--primary">Result</label>
{% include './view/behavior_example_1.html' %}

The behavior `CheckValidityBehavior` in this example, checks validation properties of the `input` element, and reports
validation hints inside the element with the `id` specified by the `aria-describedby` attribute. The `message` attribute
is used instead to configure a default hint message to show when the input value is empty.


In this other example, a *view switch* behavior is applied to some buttons and text elements. Each of them, also
specify the `target` view associated to be shown on click, and a transition `animation` to be  used. So, when a
*view switch* button is clicked, the associated *view* will be shown using the transition animation effect specified
or a default `fade`. *ViewSwitchBehavior* takes one argument that can be used to specify the transition direction that
can be *'horizontal'* (default), or *'vertical'*.

<label class="mdl-color-text--primary">Example</label>
```html
<script>
view_switch_h = ViewSwitchBehavior('horizontal');
view_switch_v = ViewSwitchBehavior('vertical');
</script>

<!-- Clicking the "1" button, will show "view-1" -->
<button z-behavior="view_switch_h"
        target="view_1" animation="bounce">
    1
</button>

<!-- Clicking the "2" button, will show "view-2" -->
<button z-behavior="view_switch_h"
        target="view_2">
    2
</button>
// ...

<!-- the pictures container --->
<div style="overflow: hidden; position: relative; width: 320px;height: 240px;">

    <div #view_1>
        <img src="picture-1.jpg">
    </div>

    <div #view_2 tab-selected="true">
        <img src="picture-2.jpg">
    </div>
    // ...

</div>
```

The possible values of the `animation` attribute are:
```js
'bounce', 'fade', 'slide', 'zoom', 'back',
'lightSpeed' // (<-- this one only works with horizontal orientation)
```

<label class="mdl-color-text--primary">Result</label>

{% include './view/behavior_example_2.html' %}


{% tryLink "Examples on CodeSandbox" "https://codesandbox.io/s/zuix-js-3ix3o?file=/behavior-example-1.html" %}

