<script setup lang="ts">
import { Camera, Eye, Images, Video } from "lucide-vue-next";
import Button from "./button/Button.vue";
</script>

<template>
  <div
    id="about"
    class="h-fit w-full flex flex-row max-lg:flex-col-reverse justify-center items-center lg:space-x-20 lg:py-28"
  >
    <img
      class="select-none"
      src="/src/assets/images/about-featured-image.png"
      alt="image?.name"
    />

    <div class="max-w-[550px] space-y-6 max-lg:pt-20 px-3">
      <h2
        class="max-md:text-3xl text-5xl font-semibold tracking-tight transition-colors first:mt-0 uppercase"
      >
        CAPTURE UNFORGETTABLE MOMENTS.
      </h2>
      <p class="md:text-lg leading-7 w-full">
        Seuismod ligula ipsum vulputate tellus quisque dictum tortor at purus
        faucibus tincidunt, pellentesque habitant morbi tristique senectus et
        netus et malesuada fames ac turpis egestas.
      </p>
      <ul class="space-y-4 max-sm:text-sm">
        <li class="flex flex-row items-center space-x-2">
          <Camera />
          <p>Euismod ligula ipsum vulputate tellus.</p>
        </li>
        <li class="flex flex-row items-center space-x-2">
          <Video />
          <p>Morbi non efficitur nibh sit amet est eros.</p>
        </li>
        <li class="flex flex-row items-center space-x-2">
          <Eye />
          <p>Fusce faucibus ante liberonec luctus egestas.</p>
        </li>
        <li class="flex flex-row items-center space-x-2">
          <Images />
          <p>Quisque pretium malesuada ornare.</p>
        </li>
      </ul>
      <div class="flex flex-row space-x-4 w-fit">
        <Button
          class="border-2 border-black rounded-none bg-transparent text-black uppercase hover:bg-black hover:text-white h-14 w-56 max-sm:w-40 font-bold"
          >Watch the video</Button
        >
        <Button variant="link" class="text-black uppercase h-14 w-fit font-bold"
          >get app</Button
        >
      </div>
    </div>
  </div>
</template>
