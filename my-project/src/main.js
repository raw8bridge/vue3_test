import { createApp } from 'vue'
// import { router } from './router'
import { store } from './store.js'
import './style.css'
import App from './App.vue'

var app = createApp(App)
// app.use(router)
app.use(store)
app.mount('#app')
