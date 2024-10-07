module.exports = {
  productionSourceMap: false,
  pluginOptions: {
    i18n: {
      locale: "en_US",
      fallbackLocale: "en_US",
      localeDir: "locales",
      enableInSFC: false,
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias.set("vue", "@vue/compat");

    config.module
      .rule("vue")
      .use("vue-loader")
      .tap((options) => {
        return {
          ...options,
          compilerOptions: {
            compatConfig: {
              MODE: 2,
            },
          },
        };
      });
  },
};
