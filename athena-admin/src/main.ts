import { createApp } from "vue";
import "@/assets/style/reset.scss";
import App from "./App.vue";

import router from "@/router";
import pinia from "@/store";

// 引入 Element-Plus
import ElementPlus from "element-plus";
import 'element-plus/dist/index.css'

//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const app = createApp(App);

app.use(ElementPlus, {
    locale: zhCn,
})

app.use(router);

app.use(pinia);

app.mount('#app');
