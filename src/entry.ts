import { App } from "vue";
import LButton from "./Button/index.vue";
import LButton2 from "./Button2/index.vue";

// 导出单独组件
export { LButton,LButton2 };


// 编写一个插件，实现一个install方法
export default {
  install(app: App): void {
    app.component(LButton.name, LButton);
    app.component(LButton2.name, LButton2);
  },

};