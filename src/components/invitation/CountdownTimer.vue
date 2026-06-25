<!-- Reusable countdown. Theme-able via `accentClass` (text color utility). -->
<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  // ISO string ng event date, hal. "2026-12-12T15:00:00"
  targetDate: { type: String, required: true },
  // Tailwind text color para sa numbers, hal. "text-rose-600"
  accentClass: { type: String, default: 'text-indigo-600' },
})

const now = ref(new Date())
let intervalId = null

onMounted(() => {
  intervalId = setInterval(() => {
    now.value = new Date()
  }, 1000)
})

onBeforeUnmount(() => {
  if (intervalId) clearInterval(intervalId)
})

const remaining = computed(() => {
  const diff = new Date(props.targetDate).getTime() - now.value.getTime()
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true }
  }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    done: false,
  }
})

const units = computed(() => [
  { label: 'Days', value: remaining.value.days },
  { label: 'Hours', value: remaining.value.hours },
  { label: 'Minutes', value: remaining.value.minutes },
  { label: 'Seconds', value: remaining.value.seconds },
])

const pad = (n) => String(n).padStart(2, '0')
</script>

<template>
  <div class="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
    <template v-if="!remaining.done">
      <div
        v-for="unit in units"
        :key="unit.label"
        class="flex min-w-[64px] flex-col items-center rounded-2xl bg-white/70 px-4 py-3 shadow-sm backdrop-blur sm:min-w-[88px]"
      >
        <span
          class="text-3xl font-bold tabular-nums sm:text-4xl"
          :class="accentClass"
        >
          {{ pad(unit.value) }}
        </span>
        <span class="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500">
          {{ unit.label }}
        </span>
      </div>
    </template>
    <p v-else class="text-lg font-semibold" :class="accentClass">
      🎉 It's happening today!
    </p>
  </div>
</template>
