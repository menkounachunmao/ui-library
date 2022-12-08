import { resolve } from "path";

export const projRoot = resolve(__dirname, "..", "..", "..");
export const pkgRoot = resolve(projRoot, "packages");
export const compRoot = resolve(pkgRoot, "components");
export const themeRoot = resolve(pkgRoot, "theme-chalk");
export const fdRoot = resolve(pkgRoot, "ft-design");
export const uiPackage = resolve(fdRoot, "package.json");
export const buildRoot = resolve(projRoot, "build");

/** `/dist` */
export const buildOutput = resolve(projRoot, "dist");
/** `/dist/ft-design` */
export const fdOutput = resolve(buildOutput, "ft-design");

export const fdPackage = resolve(fdRoot, "package.json");

export const excludeFiles = (files: string[]) => {
  const excludes = ["node_modules", "test", "mock", "gulpfile", "dist"];
  return files.filter(
    (path) => !excludes.some((exclude) => path.includes(exclude))
  );
};
