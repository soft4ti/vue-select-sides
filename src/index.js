import vueSelectSides from "./vue-select-sides.vue";
import i18n from "./i18n";

export default {
  install(app, options) {
    app.config.globalProperties.defaultOptions =
      options && options.constructor.name === "Object" ? options : {};

    app.use(i18n);
    app.component("vueSelectSides", vueSelectSides);
  },
};
