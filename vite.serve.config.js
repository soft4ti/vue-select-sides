import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "example/main.js"),
      name: "vueSelectSides",
      fileName: (format) => `vueSelectSides.${format}.js`,
      formats: ["umd"],
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  server: {
    open: true, // Abre o navegador automaticamente
  },
});
