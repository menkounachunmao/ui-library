<template>
  <div>
    <FtButton>test</FtButton>
    <FtButton type="primary">Primary</FtButton>
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

    <ElDivider />
    <FtButton @click="dialogTableVisible = true">测试弹框</FtButton>
    <FtDialog v-model="dialogTableVisible" title="测试弹框"></FtDialog>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import FtButton from "@ft-design/components/button";
import FtInput from "@ft-design/components/input";
import FtDialog from "@ft-design/components/dialog";
import { ElDivider } from "element-plus";
const inputValue = ref("");
const select = ref<string>();
const dialogTableVisible = ref(false);
</script>
