import Dialog from "./src/dialog";
import { withInstall } from "@ft-design/utils";

const FtDialog = withInstall(Dialog);
export { FtDialog };
export default FtDialog;
export * from "./src"; // 导出组件的属性类型
