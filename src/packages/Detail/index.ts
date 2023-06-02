import { App } from "vue-demi";
import LDeatil from "./index.vue";

// 导出单独组件
export { LDeatil };

// 实现install方法
export default {
    install(app:App){
        app.component(LDeatil.name,LDeatil)
    }
};