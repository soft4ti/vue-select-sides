import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
    "process.env.VUE_APP_I18N_LOCALE": JSON.stringify("en_US"),
    "process.env.VUE_APP_I18N_FALLBACK_LOCALE": JSON.stringify("en_US"),
  },
  build: {
    sourcemap: false,
    lib: {
      entry: path.resolve(__dirname, "example/main.js"),
      name: "vueSelectSidesExample",
      fileName: (format) => `vueSelectSidesExample.${format}.js`,
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
            return "vueSelectSidesExample.css";
          }
          return assetInfo.name;
        },
      },
    },
  },
});
