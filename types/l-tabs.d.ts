import LTabs from '../src/packages/Tabs/index.vue'

declare module 'vue' {
  export interface GlobalComponents {
    LTabs:typeof LTabs
  }
}
export {}
