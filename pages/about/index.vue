<template>
  <div class="flex flex-col justify-center items-center h-full">
    <h1 class="bold">{{ aboutName }}</h1>
    <nuxt-link :to="{ name: 'about-id', params: { id: 1560 } }"
      >Go to Detail About Page</nuxt-link
    >
  </div>
</template>

<script setup lang="ts">
const aboutName = ref('about pages');
</script>