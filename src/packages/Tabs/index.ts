import { App } from "vue-demi";
import LTabs from "./index.vue";

// 导出单独组件
export { LTabs };

// 实现install方法
export default {
    install(app:App){
        app.component(LTabs.name,LTabs)
    }
};