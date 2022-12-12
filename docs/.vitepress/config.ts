import { mdPlugin } from "./config/plugins";
import sidebar from "./config/sidebar";
import { defineConfig } from "vitepress";

export default defineConfig({
  title: "FDesgin",
  description: "Just playing around.",
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: "指南", link: "/zh-cn/guide/index.html" },
      { text: "组件", link: "/zh-cn/components/button.html" },
    ],
    sidebar: sidebar,
  },
  markdown: {
    config: (md) => mdPlugin(md),
  },
});
