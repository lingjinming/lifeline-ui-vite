import { createApp } from "vue";
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'

import LButton from "./Button/index.vue";
import LButton2 from "./Button2/index.vue";

const app = createApp(LButton2)
app.mount("#app");