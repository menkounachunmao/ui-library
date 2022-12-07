<template>
  <div style="display: flex; height: 100%">
    <div id="iframeWrapper">
      <iframe
        v-if="url"
        ref="iframeRef"
        :src="url"
        class="iframe"
        :style="{ height: iframeHeight }"
        @load="load"
      ></iframe>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref, watch } from "vue";
import { useWindowSize } from "@vueuse/core";

const loading = ref(true);
const iframeRef = ref(null);
interface Iprops {
  url: string;
}
const props = defineProps<Iprops>();

watch(
  () => props.url,
  () => {
    loading.value = true;
  }
);

function load() {
  loading.value = false;
}
const iframeHeight = ref("200px");
function setIframeHeight() {
  const height = document.querySelector("#iframeWrapper")?.clientHeight;
  iframeHeight.value = height + "px";
}
onMounted(() => {
  setIframeHeight();
});
const { height } = useWindowSize();
watch(height, () => {
  setIframeHeight();
});
</script>
