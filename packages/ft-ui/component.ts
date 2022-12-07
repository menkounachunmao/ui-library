// 需要打包的组件
import type { Plugin } from "vue";
import FtButton from "@ft-design/components/button";
import FtIframe from "@ft-design/components/iframe";
import FtInput from "@ft-design/components/input";

export default [FtButton, FtIframe, FtInput] as Plugin[];
