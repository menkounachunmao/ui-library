<template>
  <el-divider content-position="left">基础</el-divider>
  <FtInput v-model="inputValue" placeholder="请输入" />
  <el-divider content-position="left">可清空</el-divider>
  <FtInput v-model="inputClearValue" placeholder="可一键清空" clearable />
</template>
<script lang="ts" setup>
import { ref } from "vue";
const inputValue = ref("");
const inputClearValue = ref("");
</script>
