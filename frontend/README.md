# MFE Onboarding Flow

## Learning

### Vivid

https://vivid.deno.dev/

Vivid is a set of web components and tools to generate websites with an opinionated design.

A VueJS wrapper exists: https://www.npmjs.com/package/@vonage/vivid-vue.

### Vue Refs

https://vuejs.org/guide/essentials/reactivity-fundamentals.html#why-refs

### Form Wizard

https://vee-validate.logaretm.com/v4/examples/multistep-form-wizard/

### Options API vs Composition API

https://vueschool.io/articles/vuejs-tutorials/options-api-vs-composition-api/

This makes a big difference.

#### Getting Template Refs

In the composition API, you need to do this: https://vuejs.org/guide/essentials/template-refs.html

In the options API, you can do something like:

```
methods: {
    showMyDiv() {
        console.log(this.$refs.myDiv);
    }
}
```

Also see [this](https://stackoverflow.com/questions/71093658/how-to-get-refs-using-composition-api-in-vue3) for more examples.
