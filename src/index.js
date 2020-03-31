import vueSelectSides from "./core.vue";

function install(Vue, options) {
  console.log(options);

  if (install.installed) return;
  install.installed = true;
  Vue.component("vue-select-sides", vueSelectSides);

  Vue.setDefault = value => {
    console.log(value);
    return value;
  };
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
