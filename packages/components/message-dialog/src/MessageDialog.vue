<template>
  <FtDialog
    width="580px"
    v-model="visible"
    :title="title"
    @close="close"
    @opened="calculateIsOverflow"
  >
    <div v-if="!showDetails" class="content-wrapper">
      <!-- <svg-icon
        class-name="type-icon"
        :icon-class="currentType.icon"
      ></svg-icon> -->
      <div id="content" class="content-container">
        {{ content }}
      </div>
      <span
        v-if="isOverflow"
        class="can-click"
        style="margin-top: 12px"
        @click="showDetails = true"
      >
        展开详情
      </span>
    </div>
    <div v-else class="content-wrapper">
      <div class="details-container">
        {{ content }}
      </div>
      <span
        class="can-click"
        style="margin-top: 12px"
        @click="copyContent(content)"
      >
        复制说明内容
      </span>
    </div>
    <template v-if="isConfirm" #footer>
      <FtButton @click="confirm(false)">取消</FtButton>
      <FtButton type="primary" @click="confirm(true)">确定</FtButton>
    </template>
    <template v-else #footer>
      <FtButton class="confirm-button" @click="confirm(false)">
        我知道了
      </FtButton>
    </template>
  </FtDialog>
</template>

<script setup lang="ts">
import { ref, watch, computed } from "vue";
import { copyToClipboard } from "@ft-design/utils/text";
import { ElMessage } from "element-plus";
import FtButton from "@ft-design/components/button";
import FtDialog from "@ft-design/components/dialog";
import { TypeEnum } from ".";

defineOptions({
  name: "FtMessageDialog",
});
const typeConfigMap = {
  [TypeEnum.ERROR]: {
    icon: "message-tip-error",
  },
  [TypeEnum.WARNING]: {
    icon: "message-tip-warning",
  },
  [TypeEnum.DELETE]: {
    icon: "message-tip-delete",
  },
};
const props = defineProps<{
  type: "error" | "warning" | "delete";
  title?: string;
  content: string;
  isConfirm?: boolean;
  callback?: Function;
  visible?: boolean;
}>();
const visible = ref(true);
const isOverflow = ref(false);
const showDetails = ref(false);
const confirmResult = ref(false);
const currentType = computed(() => typeConfigMap[props.type]);

// 计算内容是否需要折叠
function calculateIsOverflow() {
  const contentNode = document.querySelector("#content") as HTMLElement;
  if (!contentNode) return;
  const range = document.createRange();
  range.setStart(contentNode, 0);
  range.setEnd(contentNode, contentNode.childNodes.length);
  const rangeWidth = range.getBoundingClientRect().width;
  isOverflow.value = rangeWidth > contentNode.offsetWidth;
}

function close() {
  if (props.callback) {
    props.callback(confirmResult.value);
  }
}
function confirm(value: boolean) {
  confirmResult.value = value;
  updateVisible(false);
}
function updateVisible(status: boolean) {
  visible.value = status;
}
function showDialog() {
  isOverflow.value = false;
  showDetails.value = false;
  updateVisible(true);
}

function copyContent(content: string) {
  copyToClipboard(content);
  ElMessage.success({ message: "复制成功", type: "success" });
}

defineExpose({
  showDialog,
});
</script>
