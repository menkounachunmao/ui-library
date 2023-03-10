import path from "path";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { rollup } from "rollup";
import commonjs from "@rollup/plugin-commonjs";
import vue from "@vitejs/plugin-vue";
import DefineOptions from "unplugin-vue-define-options/rollup";
import vueJsx from "@vitejs/plugin-vue-jsx";
import esbuild, { minify as minifyPlugin } from "rollup-plugin-esbuild";
import { parallel } from "gulp";
import { PKG_BRAND_NAME, PKG_CAMELCASE_NAME } from "../const/pkg";
import { fdRoot, fdOutput } from "../utils/paths";
import { version } from "../../../packages/ft-design/version";
import {
  formatBundleFilename,
  generateExternal,
  withTaskName,
  writeBundles,
} from "../utils";
import { target } from "../build-info";
import type { Plugin } from "rollup";
import { PlusAlias } from "../plugins/alias";

const banner = `/*! ${PKG_BRAND_NAME} v${version} */\n`;

async function buildFullEntry(minify: boolean) {
  const plugins: Plugin[] = [
    PlusAlias(),
    DefineOptions(),
    vue({
      isProduction: true,
    }),
    vueJsx(),
    nodeResolve({
      extensions: [".mjs", ".js", ".json", ".ts"],
    }),
    commonjs(),
    esbuild({
      exclude: [],
      sourceMap: minify,
      target,
      loaders: {
        ".vue": "ts",
      },
      define: {
        "process.env.NODE_ENV": JSON.stringify("production"),
      },
      treeShaking: true,
      legalComments: "eof",
    }),
  ];
  if (minify) {
    plugins.push(
      minifyPlugin({
        target,
        sourceMap: true,
      })
    );
  }

  const bundle = await rollup({
    input: path.resolve(fdRoot, "index.ts"),
    plugins,
    external: await generateExternal({ full: true }),
    treeshake: true,
  });
  await writeBundles(bundle, [
    {
      format: "umd",
      file: path.resolve(
        fdOutput,
        "dist",
        formatBundleFilename("index.full", minify, "js")
      ),
      exports: "named",
      name: PKG_CAMELCASE_NAME,
      globals: {
        vue: "Vue",
      },
      sourcemap: minify,
      banner,
    },
    {
      format: "esm",
      file: path.resolve(
        fdOutput,
        "dist",
        formatBundleFilename("index.full", minify, "mjs")
      ),
      sourcemap: minify,
      banner,
    },
  ]);
}

export const buildFull = (minify: boolean) => async () =>
  Promise.all([buildFullEntry(minify)]);

export const buildFullBundle = parallel(
  withTaskName("buildFullMinified", buildFull(true)),
  withTaskName("buildFull", buildFull(false))
);
