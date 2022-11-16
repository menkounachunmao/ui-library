import Button from "./src/FtButton.vue";
import { withInstall } from "@ft-design/utils/with-install";

const FtButton = withInstall(Button);
export { FtButton };
export default FtButton;
export * from "./src/button"; // 导出组件的属性类型
