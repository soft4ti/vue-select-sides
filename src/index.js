import vueSelectSides from "./vue-select-sides.vue";

function install(Vue, options) {
  Vue.prototype.defaultOptions = options;
  if (install.installed) return;
  install.installed = true;
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
