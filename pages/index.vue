<template>
  <!-- <NuxtWelcome /> -->
  <div class="flex flex-col justify-center items-center h-full">
    <h1 class="bold">{{ page }}</h1>
    <nuxt-link :to="{ name: 'about' }">Go to about Page</nuxt-link>
  </div>
</template>

<script setup lang="ts">
const page = 'Home Page';
</script>