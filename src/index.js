import coreSelectSides from "./vue-select-sides.vue";

export default {
  install(app, options) {
    app.component("vueSelectSides", coreSelectSides.default);
    console.trace("install component: src/index.js");
    // if (options && options.locale) {
    //   vueSelectSides.install({ locale: options.locale });
    // }
  },
};
