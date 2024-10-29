import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import envCompatible from "vite-plugin-env-compatible";

export default defineConfig({
  plugins: [vue(), envCompatible()],
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
    sourcemap: true,
    open: "/docs/index.html", // Abre o navegador automaticamente
  },
});
