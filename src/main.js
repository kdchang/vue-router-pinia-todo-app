// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import './style.css'

createApp(App).use(createPinia()).use(router).mount('#app')
