import "./assets/theme/reset.scss";
import "./assets/theme/index.scss";

import LButton from "./packages/Button/index.vue";
import LTabs from "./packages/Tabs/index.vue";
import LWrap from "./packages/Wrap/index.vue";

// 导出单独组件
export { LButton, LTabs, LWrap };

const LifelineUI = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
};

export default {
  install(app: any, options: any) {
    app.component("LButton", LButton);

    app.component("LTabs", LTabs);
    app.component("LWrap", LWrap);
  },
};
