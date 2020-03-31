import Vue from "vue";
import App from "./App.vue";
import VueGtag from "vue-gtag";
import VueSelectSides from "../src/index";

Vue.use(VueGtag, {
  config: { id: "UA-74950724-2" }
});

Vue.use(VueSelectSides, {
  lang: true
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
