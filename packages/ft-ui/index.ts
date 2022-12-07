import type { App } from "vue"; // ts中的优化只获取类型
import Components from "./component";

const components = [...Components];
const install = (app: App) => {
  components.forEach((component) => app.use(component));
};
export default {
  install,
};
export * from "@ft-design/components";
