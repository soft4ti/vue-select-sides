import { createApp } from "vue";
import App from "./App.vue";
import vueSelectSides from "../src/index";

const app = createApp(App);
app.use(vueSelectSides, { locale: "pt_BR" });
app.mount("#app");
