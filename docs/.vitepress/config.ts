import { mdPlugin } from "./config/plugins";
import sidebar from "./config/sidebar";
import { defineConfig } from "vitepress";

export default defineConfig({
  title: "FDesgin",
  description: "Just playing around.",
  lastUpdated: true,
  markdown: {
    config: (md) => mdPlugin(md),
  },
  themeConfig: {
    nav: [
      { text: "指南", link: "/zh-CN/guide/index.html" },
      { text: "组件", link: "/zh-CN/components/button.html" },
    ],
    sidebar: sidebar,
  },
  base: "/",
});
