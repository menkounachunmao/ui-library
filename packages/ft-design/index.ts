import Components from "./component";
import { makeInstaller } from "./make-installer";
const components = [...Components];

export const install = makeInstaller(components).install;
export * from "@ft-design/components";
