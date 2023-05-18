import Vue, { version } from 'vue'
import LifelineUI from '../src/index'

import App from './App.vue'

console.warn('Vue version: ', version)
Vue.config.productionTip = false
Vue.use(LifelineUI)

new Vue({ render: h => h(App) }).$mount('#app')
