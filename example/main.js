import { createApp } from "vue";
import App from "./App.vue";
import vueSelectSides from "../../src/index";
const app = createApp(App);
app.use(vueSelectSides);
app.mount("#app");
