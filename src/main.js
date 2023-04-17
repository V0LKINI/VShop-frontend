import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './axios.js'

import './style.css'

const app = createApp(App);
app.use(router).mount('#app');