import DefaultTheme from "vitepress/theme"
import LifelineUI from '../../../src/index'


import './reset.css'

// 主题样式
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'

// 插件的组件，主要是demo组件
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {

    app.use(LifelineUI)

    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)

  },
}