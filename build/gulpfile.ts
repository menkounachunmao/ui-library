import { series, parallel, TaskFunction } from "gulp";
import { withTaskName, run } from "./src/utils";
import { runTask } from "./src/utils/gulp";
import { copyFile, mkdir } from "fs/promises";
import { copy } from "fs-extra";
import { projRoot, buildOutput, fdOutput, fdPackage } from "./src/utils/paths";
import path from "path";
import { buildConfig, Module } from "./src";

export const copyFiles = () =>
  Promise.all([
    copyFile(fdPackage, path.join(fdOutput, "package.json")),
    // copyFile(
    //   path.resolve(projRoot, "README.md"),
    //   path.resolve(fdOutput, "README.md")
    // ),
    // copyFile(
    //   path.resolve(projRoot, "global.d.ts"),
    //   path.resolve(fdOutput, "global.d.ts")
    // ),
  ]);

export const copyTypesDefinitions: TaskFunction = (done) => {
  const src = path.resolve(buildOutput, "types", "packages");
  const copyTypes = (module: Module) =>
    withTaskName(`copyTypes:${module}`, () =>
      copy(src, buildConfig[module].output.path, { recursive: true })
    );

  return parallel(copyTypes("esm"), copyTypes("cjs"))(done);
};

export const copyFullStyle = async () => {
  await mkdir(path.resolve(fdOutput, "dist"), { recursive: true });
  await copyFile(
    path.resolve(fdOutput, "theme-chalk/index.css"),
    path.resolve(fdOutput, "dist/index.css")
  );
};

export default series(
  withTaskName("clean", () => run("pnpm -w run clean")),
  withTaskName("createOutput", () => mkdir(buildOutput, { recursive: true })),
  parallel(
    runTask("buildModules"),
    runTask("buildFullBundle"),
    series(
      withTaskName("buildThemeChalk", () =>
        run("pnpm run -C packages/theme-chalk build")
      ),
      copyFullStyle
    )
  ),
  parallel(copyFiles)
);

export * from "./src";
