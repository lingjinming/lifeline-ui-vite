import { createApp } from 'vue'
import LifelineUI from '../src/index'
import '../src/assets/icon/iconfont.css'
import App from './App.vue'

const app = createApp(App)
app.use(LifelineUI)
app.mount('#app')
