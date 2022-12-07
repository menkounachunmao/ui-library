<template>
  <ElButton>
    <template v-for="(item, key, index) in $slots" :key="index" #[key]>
      <slot :name="key"></slot>
    </template>
  </ElButton>
</template>
<script lang="ts" setup>
import { ElButton } from "element-plus";
// import "element-plus/es/components/button/style/css";
</script>
