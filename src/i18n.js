import { createI18n } from "vue-i18n";

function loadLocaleMessages() {
  const locales = import.meta.glob("./locales/*.json", {
    eager: true,
    import: "default",
  });
  const messages = {};

  for (const path in locales) {
    const matched = path.match(/([A-Za-z0-9-_]+)(?=\.)/i)[0];

    if (matched && matched.length > 1) {
      const locale = matched;
      messages[locale] = locales[path];
    }
  }
  return messages;
}

const i18n = createI18n({
  locale: import.meta.env.VUE_APP_I18N_LOCALE || "en_US",
  fallbackLocale: import.meta.env.VUE_APP_I18N_FALLBACK_LOCALE || "en_US",
  messages: loadLocaleMessages(),
});

export default i18n;
