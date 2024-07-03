import "./assets/main.css";

import { createApp } from "vue";
import Vue3Marquee from "vue3-marquee";
import App from "./App.vue";
import "./assets/main.css";
import router from "./router";

const app = createApp(App);

app.use(router);

app.use(Vue3Marquee);

app.mount("#app");
