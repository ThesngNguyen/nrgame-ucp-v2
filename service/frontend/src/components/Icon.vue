<script setup lang="ts">
import type { Component } from "vue";
import * as iconMaps from "@phosphor-icons/vue";

export interface Props {
  name: string;
  size?: number;
  color?: string;
  weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
}

const props = withDefaults(defineProps<Props>(), {
  size: 16,
  color: "currentColor",
  weight: "regular",
});

const IconComponent = (iconMaps as Record<string, Component>)[props.name];
</script>

<template>
  <component :is="IconComponent" :size="size" :color="color" :weight="weight" />
</template>
