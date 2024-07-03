<script setup lang="ts">
import type { DefineComponent } from "vue";

const props = defineProps<{
  icon: DefineComponent;
  title: string;
  resume: string;
}>();
</script>

<template>
  <div
    class="flex flex-col items-center justify-center h-fit w-fit p-4 space-y-6"
  >
    <component :is="props.icon" color="white" :size="36" />
    <h3 class="text-white text-2xl text-center font-semibold">
      {{ props?.title }}
    </h3>
    <p class="text-white text-lg text-center max-w-[400px]">
      {{ props?.resume }}
    </p>
  </div>
</template>
