import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/main.css'


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'

import ar from "./locales/ar.json";
import en from "./locales/en.json";

// configure i18n
const i18n = createI18n({
  legacy:false,
  locale: "",
  fallbackLocale: "en",
  messages: { ar, en },
});







const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')
