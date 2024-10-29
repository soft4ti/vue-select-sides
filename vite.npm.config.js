import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import envCompatible from "vite-plugin-env-compatible";

const path = require("path");
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), envCompatible],
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
