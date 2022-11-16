import Input from "./src/FtInput.vue";
import { withInstall } from "@ft-design/utils/with-install";

const FtInput = withInstall(Input);
export { FtInput };
export default FtInput;
export * from "./src/input"; // 导出组件的属性类型
