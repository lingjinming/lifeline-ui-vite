import { App } from "vue-demi";
import LButton from "./packages/Button/index.vue";
import LTabs from "./packages/Tabs/index.vue";

// 导出单独组件
export { LButton,LTabs };

// 实现install方法
export default {
    install(app:App){
        app.component(LButton.name,LButton)
        app.component(LTabs.name,LTabs)
    }
};