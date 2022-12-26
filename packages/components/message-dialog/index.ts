import MessageDialog from "./src/message-dialog";
import { withInstall } from "@ft-design/utils";

const FtMessageDialog = withInstall(MessageDialog);
export { FtMessageDialog };
export default FtMessageDialog;
export * from "./src"; // 导出组件的属性类型
