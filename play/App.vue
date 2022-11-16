<template>
  <div>
    <FtButton>test</FtButton>
    <FtInput v-model="inputValue" />
  </div>
  <div style="height: 400px; width: 400px">
    <FtIframe url="https://caiyun001.fangte.com" />
  </div>
</template>
<script lang="ts" setup>
import FtIframe from "@ft-design/components/iframe";
import { ref } from "vue";

const inputValue = ref("");
</script>
