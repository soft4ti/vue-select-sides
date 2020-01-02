import vueSelectSides from "./core.vue";

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("v-select-sides", vueSelectSides);
}

const plugin = {
  install
};

let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
}

vueSelectSides.install = install;

export default vueSelectSides;
