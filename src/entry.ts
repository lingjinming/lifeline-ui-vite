import { App } from "vue-demi";
import LButton from "./Button/index.vue";

// 导出单独组件
export { LButton };

// 实现install方法
export default {
    install(app:App){
        app.component(LButton.name,LButton)
    }
};