import { createApp } from 'vue'
import App from './App.vue'
import { vivid3, optionalStyles } from '@vonage/vivid-vue';

createApp(App).use(vivid3, {
    tokens: 'light',
    styles: [optionalStyles.theme, optionalStyles.typography, optionalStyles.vivid2Compat],
}).mount('#app')
