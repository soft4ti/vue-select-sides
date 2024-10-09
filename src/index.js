import vueSelectSides from "./vue-select-sides.vue";

export default {
  install(app, options) {
    app.config.globalProperties.defaultOptions =
      options && options.constructor.name === "Object" ? options : {};

    app.component("vueSelectSides", vueSelectSides);
  },
};
