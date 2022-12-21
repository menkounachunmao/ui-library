import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import DefineOptions from "unplugin-vue-define-options/vite";
import ElementPlus from "unplugin-element-plus/vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
export default defineConfig({
  plugins: [vue(), DefineOptions(), ElementPlus(), vueJsx()],
  server: {
    port: 2333,
  },
});
