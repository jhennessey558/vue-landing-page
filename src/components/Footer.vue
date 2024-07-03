<script setup lang="ts">
import { Facebook, Instagram, Twitter } from "lucide-vue-next";
</script>

<template>
  <footer
    class="bg-white flex flex-col items-center justify-center h-60 w-full space-y-6"
  >
    <ul class="flex flex-row space-x-4">
      <li class="bg-blue-600 h-9 w-9 rounded-full group">
        <a
          href="/"
          class="w-full h-full rounded-full outline-none flex justify-center items-center"
        >
          <Twitter
            :size="20"
            class="fill-white text-transparent transition-all duration-150 group-hover:-translate-y-1"
          />
        </a>
      </li>
      <li class="bg-blue-600 h-9 w-9 rounded-full group">
        <a
          href="/"
          class="w-full h-full rounded-full outline-none flex justify-center items-center"
        >
          <Instagram
            :size="20"
            class="text-white transition-all duration-150 group-hover:-translate-y-1"
          />
        </a>
      </li>
      <li class="bg-blue-600 h-9 w-9 rounded-full group">
        <a
          href="/"
          class="w-full h-full rounded-full outline-none flex justify-center items-center"
        >
          <Facebook
            :size="20"
            class="fill-white text-transparent transition-all duration-150 group-hover:-translate-y-1"
          />
        </a>
      </li>
    </ul>
    <span></span>
  </footer>
</template>
