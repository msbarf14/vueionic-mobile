import { createApp } from 'vue'
import { IonicVue } from '@ionic/vue';
import App from './App.vue'
import router from "./router"
import { createPinia } from 'pinia'

import './theme/tailwind.css'
/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

const pinia = createPinia()

const app = createApp(App)
app.use(router)
app.use(IonicVue)
app.use(pinia)
app.mount('#app')