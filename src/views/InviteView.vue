<!-- Stub for a dynamic client invitation: #/invite/:slug -->
<script setup>
defineProps({
  slug: { type: String, required: true },
})
</script>

<template>
  <main class="flex min-h-screen flex-col items-center justify-center bg-paper px-6 text-center text-ink">
    <h1 class="font-display text-4xl font-light">Invitation</h1>
    <p class="mt-4 text-warm">
      This will render the invitation for:
      <span class="font-semibold text-gold">{{ slug }}</span>
    </p>
  </main>
</template>
