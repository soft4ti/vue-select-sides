module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended"],
  rules: {
    "no-console": import.meta.env.MODE === "production" ? "error" : "off",
    "no-debugger": import.meta.env.MODE === "production" ? "error" : "off",
  },
};
