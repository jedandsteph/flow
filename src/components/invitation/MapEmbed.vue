<!--
  Google Maps placeholder. Para sa demo, embed lang via search query (libreng walang API key).
  Kapag production na, pwede mong palitan ng totoong Maps Embed API URL na may key.
-->
<script setup>
import { computed } from 'vue'

const props = defineProps({
  query: { type: String, required: true }, // hal. "San Agustin Church Manila"
  venueName: { type: String, default: '' },
  address: { type: String, default: '' },
})

// Walang-API-key na embed (gumagana para sa demo/preview)
const embedSrc = computed(
  () => `https://maps.google.com/maps?q=${encodeURIComponent(props.query)}&output=embed`
)
const directionsUrl = computed(
  () => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(props.query)}`
)
</script>

<template>
  <div class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
    <div class="aspect-video w-full bg-slate-100">
      <iframe
        :src="embedSrc"
        class="h-full w-full"
        style="border: 0"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        :title="`Map ng ${venueName || query}`"
      />
    </div>
    <div class="flex items-center justify-between gap-4 p-4">
      <div>
        <p v-if="venueName" class="font-semibold text-slate-800">{{ venueName }}</p>
        <p v-if="address" class="text-sm text-slate-500">{{ address }}</p>
      </div>
      <a
        :href="directionsUrl"
        target="_blank"
        rel="noopener"
        class="flex-none rounded-lg bg-slate-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
      >
        Get Directions
      </a>
    </div>
  </div>
</template>
