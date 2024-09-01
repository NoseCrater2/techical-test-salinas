import './index.css'

import '@mdi/font/css/materialdesignicons.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { vuetify } from './utils/vuetify'

import filters from './utils/filters'

const app = createApp(App)
app.config.globalProperties.$filters = filters
app.use(createPinia())
app.use(vuetify)

app.mount('#app')
