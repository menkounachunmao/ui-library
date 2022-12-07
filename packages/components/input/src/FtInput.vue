<template>
  <el-input>
    <template v-for="(item, key, index) in $slots" :key="index" #[key]>
      <slot :name="key"></slot>
    </template>
  </el-input>
</template>
<script lang="ts" setup>
import { ElInput } from "element-plus";
</script>
