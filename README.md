# Home

## Getting Started

### [Bombino](https://github.com/Inventsable/bombino) - supercharged Adobe generator for Vue-CLI and Quasar-CLI with dynamic template support:

```bash
# In any valid CEP folder
npx bombino

# Input name of panel, select app, and choose one of the brutalism templates below

cd [name of panel]
npm run serve

# Open host app and find in Windows > Extensions > [name of panel]
```

Bombino includes various commands and utilities for ease of development -- you can go from creating a new panel to signing it as a ZXP in less than a minute.

### Manual - Global components

```bash
npm install brutalism
```

> **_NOTE:_** Components rely on the [starlette utility](https://github.com/Inventsable/starlette) for themes and color. If not using a template, you must use the Panel component or install starlette and run `require('starlette').default.init()` on panel launch.

#### Within `./src/main.js` (to use anywhere in project with no need to import per component file):

```js
// Import the desired components
import { Panel, Menus } from "brutalism";

// Assign them as global components to the Vue instance
Vue.use("Panel", Panel);
Vue.use("Menus", Menus);

// Be sure to do so before instantiating Vue:
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
```

### Manual - Local components

#### Within `App.vue` or a given .vue file:

```html
<script>
  // Import as many or few components as you need
  import { Panel, Menus } from "brutalism";

  export default {
    components: {
      Panel,
      Menus,
    },
  };
</script>
```

---

## Templates

Quickstart templates with [bombino](https://github.com/Inventsable/bombino) to get you up and running in less than a minute:

### Brutalism Basic [Demo](https://brutalism.netlify.app/#/basic) | [GitHub](https://github.com/battleaxedotco/bombino-brutalism-basic)

![](https://github.com/battleaxedotco/bombino-brutalism-basic/blob/master/src/assets/template.png?raw=true)

### Brutalism Router [Demo](https://brutalism.netlify.app/#/router) | [GitHub](https://github.com/battleaxedotco/bombino-brutalism-router)

![](https://github.com/battleaxedotco/bombino-brutalism-router/blob/master/src/assets/template.png?raw=true)

### Brutalism Vuex [Demo](https://brutalism.netlify.app/#/vuex) | [GitHub](https://github.com/battleaxedotco/bombino-brutalism-vuex)

![](https://github.com/battleaxedotco/bombino-brutalism-vuex/blob/master/src/assets/template.png?raw=true)
