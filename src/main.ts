import { createApp } from 'vue'
import router from './router'
import store from './stores'
// import ElementPlus from 'element-plus'
import 'normalize.css/normalize.css'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)
app.use(store)
app.use(router)
// app.use(ElementPlus)
app.mount('#app')
