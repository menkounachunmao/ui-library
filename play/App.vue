<template>
  <div>
    <FtButton>test</FtButton>
    <FtInput v-model="inputValue" />
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import FtButton from "@ft-design/components/button";
import FtInput from "@ft-design/components/input";
const inputValue = ref("");
</script>
