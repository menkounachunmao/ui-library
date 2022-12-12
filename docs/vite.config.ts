import path from "path";
// import Inspect from 'vite-plugin-inspect'
import { defineConfig, loadEnv } from "vite";
import DefineOptions from "unplugin-vue-define-options/vite";
// import UnoCSS from 'unocss/vite'
// import mkcert from 'vite-plugin-mkcert'
import glob from "fast-glob";
import vueJsx from "@vitejs/plugin-vue-jsx";
// import Components from 'unplugin-vue-components/vite'
import { MarkdownTransform } from "./.vitepress/plugins/markdown-transform";

import type { Alias } from "vite";

const alias: Alias[] = [
  {
    find: "~/",
    replacement: `${path.resolve(__dirname, "./.vitepress/vitepress")}/`,
  },
];

export default defineConfig(async ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    server: {
      host: true,
      https: !!env.HTTPS,
    },
    resolve: {
      alias,
    },
    plugins: [
      vueJsx(),
      DefineOptions(),
      // Components({
      //   dirs: ['.vitepress/vitepress/components'],
      //   allowOverrides: true,
      //   resolvers: [
      //     IconsResolver(),
      //   ],
      //   include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      // }),
      // Icons({
      //   autoInstall: true,
      // }),
      // UnoCSS(),
      MarkdownTransform(),
      // Inspect(),
      // mkcert(),
    ],
  };
});
