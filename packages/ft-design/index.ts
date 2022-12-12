import Components from "./component";
import { makeInstaller } from "./make-installer";
const components = [...Components];

export * from "@ft-design/components";
export const installer = makeInstaller(components).install;
export default installer;
