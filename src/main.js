import Vue from "vue";
import Core from "./core.vue";
import i18n from "./i18n";

Vue.config.productionTip = false;

new Vue({
  i18n,
  render: h => h(Core)
}).$mount("#app");
