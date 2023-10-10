# Components Directory

The components/ directory is where you put all your Vue components which can then be imported inside your pages or other
components (learn more).
Nuxt automatically imports any components in your components/ directory (along with components that are registered by
any modules you may be using).

### > | components/

    | TheHeader.vue
    | TheFooter.vue

```
<template>
  <div>
    <TheHeader />
    <slot />
    <TheFooter />
  </div>
</template>
```

# Component Names

If you have a component in nested directories such as:

### > | components/

    | base/
        | foo/
            | Button.vue

... then the component's name will be based on its own path directory and filename, with duplicate segments being
removed. Therefore, the component's name will be:

> For clarity, we recommend that the component's filename matches its name. (So, in the example above, you could rename
> Button.vue to be BaseFooButton.vue.)

```
<BaseFooButton />
```
