import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import vueDevTools from "vite-plugin-vue-devtools";

export default defineConfig({
  plugins: [vue(), vueDevTools()],
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, "example/App.vue"),
      name: "vueSelectSides",
      fileName: (format) => `vueSelectSides.${format}.js`,
      formats: ["umd"],
    },
    outDir: "docs",
    emptyOutDir: false,
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") {
            return "vueSelectSides.css";
          }
          return assetInfo.name;
        },
      },
    },
  },
});
