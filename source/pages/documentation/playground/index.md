---
layout: side_drawer.liquid
options: mdl highlight sponsor
tags: documentation
group: playground
order: 9
icon: sports_soccer
title: Playground
summary: Embeddable components editor with live preview.
description: Client-side embeddable components editor.
keywords:
- playground
- embedded web components editor
- zuix.js
permalink: "playground/"
---

{% unpre %}
```html
<div z-load="https://zuixjs.github.io/zkit/lib/1.2/components/zx-playground" :menu-items="menuItems" style="min-height: 80vh"></div>
<script>
    const menuItems = [
        {link: '#/app/examples/new-component', description: 'New component'},
        {link: '#/app/examples/custom-elements-01', description: 'Custom elements #1'},
        {link: '#/app/examples/custom-elements-02', description: 'Custom elements #2'},
        {link: '#/app/examples/default-component', description: 'Default component'},
        {link: '#/app/widgets/time-clock', description: 'Time clock'},
        {link: '#/app/widgets/analog-clock', description: 'Analog clock'}
    ];
</script>
```
{% endunpre %}
