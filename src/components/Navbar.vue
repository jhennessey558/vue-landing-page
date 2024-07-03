<script setup lang="ts">
import { Facebook, Instagram, Twitter } from "lucide-vue-next";
import Button from "./button/Button.vue";
</script>

<template>
  <nav
    class="flex flex-row max-sm:flex-col bg-blue-600 h-20 w-full items-center md:px-40 justify-center md:justify-between"
  >
    <ul class="flex flex-row space-x-4">
      <li>
        <a href="#about">
          <Button
            variant="link"
            class="text-white uppercase h-fit w-fit font-medium"
            >About</Button
          >
        </a>
      </li>
      <li>
        <a href="#features">
          <Button
            variant="link"
            class="text-white uppercase h-fit w-fit font-medium"
            >Features</Button
          >
        </a>
      </li>
    </ul>
    <ul class="hidden md:flex flex-row space-x-4">
      <li class="bg-white h-9 w-9 rounded-full group">
        <a
          href="/"
          class="w-full h-full rounded-full outline-none flex justify-center items-center"
        >
          <Twitter
            :size="20"
            class="fill-blue-600 text-transparent transition-all duration-150 group-hover:-translate-y-1"
          />
        </a>
      </li>
      <li class="bg-white h-9 w-9 rounded-full group">
        <a
          href="/"
          class="w-full h-full rounded-full outline-none flex justify-center items-center"
        >
          <Instagram
            :size="20"
            class="text-blue-600 transition-all duration-150 group-hover:-translate-y-1"
          />
        </a>
      </li>
      <li class="bg-white h-9 w-9 rounded-full group">
        <a
          href="/"
          class="w-full h-full rounded-full outline-none flex justify-center items-center"
        >
          <Facebook
            :size="20"
            class="fill-blue-600 text-transparent transition-all duration-150 group-hover:-translate-y-1"
          />
        </a>
      </li>
    </ul>
  </nav>
</template>
