<template>
  <div class="relative flex min-h-screen lg:static">
    <!-- MENUS -->
    <!-- <AppMenu /> -->

    <div class="relative flex min-h-screen flex-auto flex-col bg-red-100">
      <!-- PAGE -->
      <div class="flex flex-auto flex-col -5">
        <div class="flex-auto">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
