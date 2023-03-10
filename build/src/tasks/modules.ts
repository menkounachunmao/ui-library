import { rollup } from "rollup";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import DefineOptions from "unplugin-vue-define-options/rollup";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import esbuild from "rollup-plugin-esbuild";
import glob from "fast-glob";
import { generateExternal, writeBundles } from "../utils/rollup";
import { buildConfigEntries, target } from "../build-info";
import type { OutputOptions } from "rollup";
import { fdRoot, pkgRoot, excludeFiles } from "../utils/paths";
import { PlusAlias } from "../plugins/alias";

export const buildModules = async () => {
  // 查找需要打包的文件
  const input = excludeFiles(
    await glob("**/*.{js,ts,vue}", {
      cwd: pkgRoot, // 搜索的目录
      absolute: true, // 返回绝对路径  ['/home/user/index.js']
      onlyFiles: true, // 只返回文件
    })
  );

  const bundle = await rollup({
    input,
    plugins: [
      PlusAlias(),
      DefineOptions(),
      vue({
        isProduction: false,
      }),
      vueJsx(),
      nodeResolve({
        extensions: [".mjs", ".js", ".json", ".ts"],
      }),
      commonjs(),
      esbuild({
        sourceMap: true,
        target,
        loaders: {
          ".vue": "ts",
        },
      }),
    ],
    external: await generateExternal({ full: false }),
    treeshake: false,
  });
  await writeBundles(
    bundle,
    buildConfigEntries.map(([module, config]): OutputOptions => {
      return {
        format: config.format,
        dir: config.output.path,
        exports: module === "cjs" ? "named" : undefined,
        preserveModules: true,
        preserveModulesRoot: fdRoot,
        sourcemap: true,
        entryFileNames: `[name].${config.ext}`,
      };
    })
  );
};
