import Button from "./src/button.vue";
import { withInstall } from "@ft-design/utils";

const FtButton = withInstall(Button);
export { FtButton };
export default FtButton;
export * from "./src/button"; // 导出组件的属性类型
