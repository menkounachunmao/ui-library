import { uiPackage } from "./paths";
import type { ProjectManifest } from "@pnpm/types";
import type { OutputOptions, RollupBuild } from "rollup";

export const getPackageManifest = (pkgPath: string) => {
  return require(pkgPath) as ProjectManifest;
};

export const getPackageDependencies = (
  pkgPath: string
): Record<"dependencies" | "peerDependencies", string[]> => {
  const manifest = getPackageManifest(pkgPath);
  const { dependencies = {}, peerDependencies = {} } = manifest;

  return {
    dependencies: Object.keys(dependencies),
    peerDependencies: Object.keys(peerDependencies),
  };
};

export const generateExternal = async (options: { full: boolean }) => {
  const { dependencies, peerDependencies } = getPackageDependencies(uiPackage);

  return (id: string) => {
    const packages: string[] = peerDependencies;
    if (!options.full) {
      packages.push("@vue", ...dependencies);
    }
    return [...new Set(packages)].some(
      (pkg) => id === pkg || id.startsWith(`${pkg}/`)
    );
  };
};

export function writeBundles(bundle: RollupBuild, options: OutputOptions[]) {
  return Promise.all(options.map((option) => bundle.write(option)));
}

export function formatBundleFilename(
  name: string,
  minify: boolean,
  ext: string
) {
  return `${name}${minify ? ".min" : ""}.${ext}`;
}
