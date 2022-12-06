import Input from "./src/FtInput.vue";
import { withInstall } from "@ft-design/utils";

const FtInput = withInstall(Input);
export { FtInput };
export default FtInput;
export * from "./src/input"; // 导出组件的属性类型
