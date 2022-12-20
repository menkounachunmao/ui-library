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
});
