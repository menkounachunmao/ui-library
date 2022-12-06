import Iframe from "./src/FtIframe.vue";
import { withInstall } from "@ft-design/utils";

const FtIframe = withInstall(Iframe);
export { FtIframe };
export default FtIframe;
export * from "./src/iframe"; // 导出组件的属性类型
