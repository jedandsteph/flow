<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="flex min-h-screen flex-col items-center justify-center bg-paper px-6 text-center text-ink">
    <p class="font-display text-7xl font-light text-gold">404</p>
    <h1 class="mt-4 font-display text-3xl font-light">Page not found</h1>
    <p class="mt-3 text-warm">The page you're looking for doesn't exist.</p>
    <RouterLink
      to="/"
      class="mt-10 bg-ink px-8 py-3.5 text-[0.7rem] font-medium uppercase tracking-[0.25em] text-paper transition-colors hover:bg-gold"
    >
      Back to home
    </RouterLink>
  </main>
</template>
