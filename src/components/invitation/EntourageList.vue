<!-- Wedding entourage roster. -->
<script setup>
defineProps({
  members: { type: Array, required: true },
})
</script>

<template>
  <section class="mx-auto max-w-2xl px-6 text-center">
    <h2 class="font-display text-3xl font-light text-sage-deep sm:text-4xl">The Entourage</h2>
    <div class="mt-10 grid grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2">
      <div v-for="(m, i) in members" :key="i" class="border-b border-sage/20 pb-4">
        <p class="text-xs uppercase tracking-[0.2em] text-rosedust">{{ m.role }}</p>
        <p class="mt-1 font-display text-lg text-bark">{{ m.name }}</p>
      </div>
    </div>
  </section>
</template>
