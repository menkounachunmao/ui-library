<template>
  <FtInput v-model="inputValue" placeholder="Please input">
    <template #prepend>
      <span>prepend 插槽</span>
    </template>
    <template #append>
      <span>append 插槽</span>
    </template>
  </FtInput>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const inputValue = ref("");
</script>
