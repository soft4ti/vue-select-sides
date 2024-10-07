import vueSelectSides from "./vue-select-sides.vue";

export default {
  install: (app, options) => {
    app.component("vueSelectSides", vueSelectSides);
    // if (options && options.locale) {
    //   vueSelectSides.install({ locale: options.locale });
    // }
  },
};
