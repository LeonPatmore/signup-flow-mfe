import { createApp } from 'vue'
import { vivid3, optionalStyles } from '@vonage/vivid-vue';
import router from "./router";
import store from "./store"
import App from "./App.vue";

createApp(App)
    .use(vivid3, {
        tokens: 'light',
        styles: [optionalStyles.theme, optionalStyles.typography, optionalStyles.vivid2Compat],
    })
    .use(store)
    .use(router)
    .mount('#app')
