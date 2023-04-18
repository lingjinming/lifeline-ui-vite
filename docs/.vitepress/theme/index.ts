// import Theme from 'vitepress/dist/client/theme-default'
import EarthUI from 'l-earth-ui/dist/earth-ui.esm'
import DefaultTheme from "vitepress/theme"

// 主题样式
import 'vitepress-theme-demoblock/theme/styles/index.css'
// 插件的组件，主要是demo组件
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'
import Demo from 'vitepress-theme-demoblock/components/Demo.vue';
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(EarthUI)
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
  },
}