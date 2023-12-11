import { createApp } from "vue";
import { createPinia } from "pinia";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
// import router from "@/router";
import App from "./App.vue";

const app = createApp(App);

app.use(createPinia());

// 注册 Element-Plus 图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}

app.mount('#app');