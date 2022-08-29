<template>
  <div class="flex flex-col justify-center items-center h-full">
    <div>
      <h1 class="bold">Login Page</h1>
      <div class="flex mt-3">
        <label for="userName">Username: </label>
        <PInputText
          label="UserName: "
          name="userName"
          type="text"
          v-model="userName"
        />
      </div>
      <div class="flex mt-3">
        <label for="password">Password:</label>
        <PInputText
          label="Password: "
          name="password"
          type="text"
          v-model="password"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const userName = ref('sdfsdf');
const password = ref('asdfds');
</script>