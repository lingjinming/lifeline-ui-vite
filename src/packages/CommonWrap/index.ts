import { App } from "vue-demi";
import LCommonWrap from "./index.vue";

// 导出单独组件
export { LCommonWrap };

// 实现install方法
export default {
    install(app:App){
        app.component(LCommonWrap.name,LCommonWrap)
    }
};