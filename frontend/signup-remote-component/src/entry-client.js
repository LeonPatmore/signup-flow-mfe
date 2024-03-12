import {createApp} from "vue";
import App from "./App.vue";
import {optionalStyles, vivid3} from "@vonage/vivid-vue";
import store from "./store/index.ts";
import router from "./router/index.ts";

createApp(App)
    .use(vivid3, {
        tokens: 'light',
        styles: [optionalStyles.theme, optionalStyles.typography, optionalStyles.vivid2Compat],
    })
    .use(store)
    .use(router)
    .mount('#app')
