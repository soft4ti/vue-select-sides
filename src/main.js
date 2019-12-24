import Vue from "vue";
import Core from "./core.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(Core)
}).$mount("#app");
