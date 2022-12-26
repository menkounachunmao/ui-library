<template>
  <div>
    <ElDivider>FtButton 测试</ElDivider>
    <FtButton>test</FtButton>
    <FtButton type="primary">Primary</FtButton>
    <ElDivider>测试 input</ElDivider>
    <FtInput
      v-model="inputValue"
      placeholder="Please input"
      class="input-with-select"
    >
      <template #prepend>
        <span>prepend 插槽</span>
      </template>
      <template #append>
        <span>append 插槽</span>
      </template>
    </FtInput>

    <ElDivider>测试弹框</ElDivider>
    <FtButton @click="dialogTableVisible = true">测试弹框</FtButton>
    <FtDialog v-model="dialogTableVisible" title="测试弹框">
      <FtButton @click="showMessage">test</FtButton>
    </FtDialog>
    <ElDivider>测试消息弹框</ElDivider>
    <FtButton @click="showMessage">测试消息弹框</FtButton>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import FtButton from "@ft-design/components/button";
import FtInput from "@ft-design/components/input";
import FtDialog from "@ft-design/components/dialog";
import FtMessageDialog, {
  IMessageProps,
} from "@ft-design/components/message-dialog";
import "@ft-design/theme-chalk/src/message-dialog.scss";
import "@ft-design/theme-chalk/src/dialog.scss";
import { ElDivider } from "element-plus";
const inputValue = ref("");
const select = ref<string>();
const dialogTableVisible = ref(false);
const messageInfo = ref<IMessageProps>({
  title: "测试",
  content:
    "测试测试消息弹框测试消息弹框测试消息弹框测试消息弹框测试消息弹框测试消息弹框测试消息弹框测试消息弹框测试消息弹框测试消息弹框测试消息弹框测试消息弹框测试消息弹框测试消息弹框测试消息弹框测试消息弹框测试消息弹框测试消息弹框测试消息弹框消息弹框",
  type: "error",
});
FtMessageDialog(messageInfo.value);

function showMessage() {
  FtMessageDialog({
    title: "2",
    content: "2",
    type: "error",
  });
}
// setTimeout(() => {
//   FtMessageDialog({
//     title: "2",
//     content: "2",
//     type: "error",
//   });
// }, 3000);
</script>
