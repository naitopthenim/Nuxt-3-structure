<template>
  <div class="flex flex-col justify-center items-center h-full">
    <h1 class="bold">{{ pageName }}</h1>
    <nuxt-link to="/">Go to Home Page</nuxt-link>
  </div>
</template>

<script setup lang="ts">
const pageName = ref('about pages');
</script>