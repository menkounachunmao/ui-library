<template>
  <div>
    <FtButton>test</FtButton>
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
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import FtButton from "@ft-design/components/button";
import FtInput from "@ft-design/components/input";
const inputValue = ref("");
const select = ref<string>();
</script>
