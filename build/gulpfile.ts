import { series, parallel } from "gulp";
import { withTaskName, run } from "./src/utils";
import { runTask } from "./src/utils/gulp";
import { copyFile, mkdir } from "fs/promises";
import { uiOutput } from "./src/utils/paths";

export default series(
  withTaskName("clean", () => run("pnpm -w run clean")),
  withTaskName("createOutput", () => mkdir(uiOutput, { recursive: true })),
  parallel(runTask("buildModules"))
);

export * from "./src";
