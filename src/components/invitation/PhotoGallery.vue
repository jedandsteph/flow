<!-- Reusable sample-photo gallery na may smooth hover-zoom. -->
<script setup>
defineProps({
  images: { type: Array, required: true },
  title: { type: String, default: 'Gallery' },
})
</script>

<template>
  <section class="mx-auto max-w-5xl px-6">
    <h2 v-reveal class="text-center font-display text-4xl font-light text-sage-deep">
      {{ title }}
    </h2>
    <div class="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
      <div
        v-for="(img, i) in images"
        :key="i"
        v-reveal="i * 60"
        class="group aspect-[4/5] overflow-hidden rounded-2xl bg-blush/40"
      >
        <img
          :src="img"
          alt="Sample event photo"
          loading="lazy"
          class="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
        />
      </div>
    </div>
  </section>
</template>
