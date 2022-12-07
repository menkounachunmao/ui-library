import path from "path";
import { uiOutput } from "./utils/paths";

import type { ModuleFormat } from "rollup";

export const modules = ["esm", "cjs"] as const;
export type Module = typeof modules[number];
export interface BuildInfo {
  module: "ESNext" | "CommonJS";
  format: ModuleFormat;
  ext: "mjs" | "cjs" | "js";
  output: {
    name: string;
    path: string;
  };

  bundle: {
    path: string;
  };
}

export const buildConfig: Record<Module, BuildInfo> = {
  esm: {
    module: "ESNext",
    format: "esm",
    ext: "mjs",
    output: {
      name: "es",
      path: path.resolve(uiOutput, "es"),
    },
    bundle: {
      path: `ft-ui/es`,
    },
  },
  cjs: {
    module: "CommonJS",
    format: "cjs",
    ext: "js",
    output: {
      name: "lib",
      path: path.resolve(uiOutput, "lib"),
    },
    bundle: {
      path: `ft-ui/lib`,
    },
  },
};
export const buildConfigEntries = Object.entries(
  buildConfig
) as BuildConfigEntries;

export type BuildConfig = typeof buildConfig;
export type BuildConfigEntries = [Module, BuildInfo][];

export const target = "es2018";