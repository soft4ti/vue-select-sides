module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended"],
  rules: {
    "no-console": import.meta.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": import.meta.env.NODE_ENV === "production" ? "error" : "off",
  },
};
