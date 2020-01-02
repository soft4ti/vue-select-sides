import selectSides from "./core.vue";

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("v-select-sides", selectSides);
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

selectSides.install = install;

export default selectSides;
