<template>
  <div class="flex flex-col justify-center items-center h-full">
    <h1 class="bold">{{ detailName }}</h1>
    <nuxt-link :to="{ name: 'index' }">Go to Home Page</nuxt-link>
  </div>
</template>

<script setup lang="ts">
const detailName = ref('about page detail');
</script>