<script setup lang="ts">
import FeatureCard from "./FeatureCard.vue";

const props = defineProps<{
  features: Array<{ icon: any; title: string; resume: string }>;
}>();
</script>

<template>
  <div
    id="features"
    class="w-full h-full sm:p-20 bg-blue-600 grid max-sm:grid-cols-1 max-lg:grid-cols-2 grid-cols-3 grid-rows-2 gap-10 place-items-center"
  >
    <FeatureCard
      v-for="(feature, index) in props?.features"
      :icon="feature?.icon"
      :title="feature?.title"
      :resume="feature?.resume"
      :key="index"
    />
  </div>
</template>
