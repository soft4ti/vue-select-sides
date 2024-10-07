import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
const path = require("path");
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "vueSelectSides",
      fileName: (format) => `vueSelectSides.${format}.js`,
    },
  },
  rollupOptions: {
    // Certifique-se de externalizar dependências que não devem ser incluídas no bundle
    external: ["vue"],
    output: {
      // Forneça variáveis globais para usar no build UMD
      globals: {
        vue: "Vue",
      },
    },
  },
});
