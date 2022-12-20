// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import FtDesign from "ft-design";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import ElementPlus from "element-plus";
import "./custom.css";
import { globals } from "../vitepress/index.js";
import sidebar from "../config/sidebar";
export default {
  ...DefaultTheme,
  nav: [
    { text: "指南", link: "/zh-CN/guide/index.html" },
    { text: "组件", link: "/zh-CN/components/button.html" },
  ],
  sidebar: sidebar,
  enhanceApp(ctx) {
    // 继承默认样式行为
    DefaultTheme.enhanceApp(ctx);
    ctx.app.use(FtDesign);
    ctx.app.use(ElementPlus);
    // 注册自定义组件
    globals.forEach(([name, Comp]) => {
      ctx.app.component(name, Comp);
    });
  },
};
