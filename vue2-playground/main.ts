import Vue from 'vue'
import App from './App.vue';
import LifelineUI from '../src/index'
Vue.use(LifelineUI)

console.warn('Vue version:', Vue.version)
Vue.config.productionTip = false

new Vue({ render: h => h(App) }).$mount('#app')
