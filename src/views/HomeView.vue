<script setup lang="ts">
import About from "@/components/About.vue";
import Billboard from "@/components/Billboard.vue";
import Features from "@/components/Features.vue";
import Footer from "@/components/Footer.vue";
import Marquee from "@/components/Marquee.vue";
import Navbar from "@/components/Navbar.vue";
import {
  Image,
  Inbox,
  MessageCircle,
  Palette,
  Settings,
  Share,
} from "lucide-vue-next";

const sponsors = [
  {
    name: "Google",
    imageUrl: "/src/assets/images/sponsors/google.png",
  },
  {
    name: "Facebook",
    imageUrl: "/src/assets/images/sponsors/facebook.png",
  },
  {
    name: "Yahoo",
    imageUrl: "/src/assets/images/sponsors/yahoo.png",
  },
  {
    name: "PayPal",
    imageUrl: "/src/assets/images/sponsors/paypal.png",
  },
];

const features = [
  {
    icon: Share,
    title: "MALESUADA FAMES TURPIS.",
    resume:
      "vel ultrices mauris libero id diam. Vivamus tellus sagittis facilisis nisi quis mollis risus quisque ultrices elit.",
  },
  {
    icon: Image,
    title: "MALESUADA FAMES TURPIS.",
    resume:
      "vel ultrices mauris libero id diam. Vivamus tellus sagittis facilisis nisi quis mollis risus quisque ultrices elit.",
  },
  {
    icon: Palette,
    title: "MALESUADA FAMES TURPIS.",
    resume:
      "vel ultrices mauris libero id diam. Vivamus tellus sagittis facilisis nisi quis mollis risus quisque ultrices elit.",
  },
  {
    icon: MessageCircle,
    title: "MALESUADA FAMES TURPIS.",
    resume:
      "vel ultrices mauris libero id diam. Vivamus tellus sagittis facilisis nisi quis mollis risus quisque ultrices elit.",
  },
  {
    icon: Settings,
    title: "MALESUADA FAMES TURPIS.",
    resume:
      "vel ultrices mauris libero id diam. Vivamus tellus sagittis facilisis nisi quis mollis risus quisque ultrices elit.",
  },
  {
    icon: Inbox,
    title: "MALESUADA FAMES TURPIS.",
    resume:
      "vel ultrices mauris libero id diam. Vivamus tellus sagittis facilisis nisi quis mollis risus quisque ultrices elit.",
  },
];
</script>

<template>
  <Navbar />
  <Billboard />
  <Marquee :images="sponsors" />
  <About />
  <Features :features="features" />
  <Footer />
</template>
