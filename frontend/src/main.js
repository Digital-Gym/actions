// import './assets/base.css'
import 'primevue/resources/themes/aura-light-blue/theme.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config';

const app = createApp(App)

app.use(PrimeVue, { /* options */ });
app.use(createPinia())
app.use(router)

app.mount('#app')
