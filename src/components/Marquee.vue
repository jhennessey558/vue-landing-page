<script lang="ts">
export default {
  props: {
    images: {
      type: Array<{ name: string; imageUrl: string }>,
      required: true,
    },
  },
};
</script>

<template>
  <div class="bg-black h-20 w-full flex items-center">
    <Vue3Marquee :clone="true">
      <img
        class="select-none mx-20"
        v-for="(image, index) in images"
        :src="image?.imageUrl"
        :alt="image?.name"
        :key="index"
      />
    </Vue3Marquee>
  </div>
</template>
