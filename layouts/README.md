# Layouts Directory

## Nuxt provides a customizable layouts framework you can use throughout your application, ideal for extracting common UI or code patterns into reusable layout components.

Layouts are placed in the `layouts/` directory and will be automatically loaded via asynchronous import when used.
Layouts
are used by adding `<NuxtLayout>` to your `app.vue`, and either setting a `layout` property as part of your page
metadata
(if you are using the `~/pages` integration),
or by manually specifying it as a prop to `<NuxtLayout>`. **(Note: The layout name is normalized to kebab-case,
so `someLayout` becomes `some-layout`.)**
If you only have a single layout in your application, we recommend using app.vue instead.

**_Unlike other components, your layouts must have a single root element to allow Nuxt to apply transitions between
layout
changes - and this root element cannot be a `<slot />`._**
