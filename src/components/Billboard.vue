<script setup lang="ts">
import Button from "./button/Button.vue";
</script>

<template>
  <div
    class="bg-[url('/src/assets/images/billboard-background-image.jpg')] bg-center h-fit w-full p-28 max-md:px-4 max-md:py-10 xl:p-40"
  >
    <div class="max-w-2xl space-y-10">
      <h2
        class="text-white max-md:text-3xl text-5xl font-semibold tracking-tight transition-colors first:mt-0 uppercase"
      >
        Take photos like a pro.
      </h2>
      <p class="md:text-lg leading-7 max-w-[500px] text-white">
        With only your phone capture app you can take stunning image like a
        professional Photographer.
      </p>
      <div class="flex flex-row space-x-4 w-full">
        <Button
          class="border-2 border-white rounded-none bg-transparent text-white uppercase hover:bg-white hover:text-black h-14 w-full max-w-[220px] font-bold"
          >Iphone App</Button
        >
        <Button
          class="border-2 border-white rounded-none bg-transparent text-white uppercase hover:bg-green-600 hover:border-green-600 hover:text-white h-14 w-full max-w-[220px] font-bold"
          >Android App</Button
        >
      </div>
    </div>
  </div>
</template>
