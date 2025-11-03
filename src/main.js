

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router' // <-- importa el router

const app = createApp(App)

app.use(createPinia()) // <-- usa Pinia
app.use(router)        // <-- usa Vue Router

app.mount('#app')
