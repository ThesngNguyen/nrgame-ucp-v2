<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import { useViewport } from "./composables/useViewport";

const route = useRoute();
const viewportStore = useViewport();

onMounted(() => {
  viewportStore.init();
});

onUnmounted(() => {
  viewportStore.destroy();
});
</script>

<template>
  <div>
    <router-view />
  </div>
</template>

<style scoped></style>
