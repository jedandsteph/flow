<!--
  Song request / playlist. Para sa demo, local state lang (in-memory) ang requests.
  Sa production, dito ikakabit ang totoong backend o playlist integration.
-->
<script setup>
import { ref } from 'vue'

const songTitle = ref('')
const artist = ref('')

const playlist = ref([
  { song: 'Perfect', artist: 'Ed Sheeran' },
  { song: 'Marry You', artist: 'Bruno Mars' },
  { song: 'A Thousand Years', artist: 'Christina Perri' },
])

function addSong() {
  if (!songTitle.value.trim()) return
  playlist.value.push({
    song: songTitle.value.trim(),
    artist: artist.value.trim() || 'Unknown artist',
  })
  songTitle.value = ''
  artist.value = ''
}
</script>

<template>
  <section class="mx-auto max-w-xl px-6">
    <h2 class="text-center font-display text-3xl font-light text-sage-deep sm:text-4xl">
      Request a Song
    </h2>
    <p class="mt-2 text-center text-bark/60">
      What would you love to hear at the party?
    </p>

    <form class="mt-8 flex flex-col gap-3 sm:flex-row" @submit.prevent="addSong">
      <input
        v-model="songTitle"
        type="text"
        placeholder="Song title"
        class="flex-1 rounded-xl border border-sage/30 px-4 py-3 focus:border-sage focus:outline-none focus:ring-2 focus:ring-sage/20"
      />
      <input
        v-model="artist"
        type="text"
        placeholder="Artist (optional)"
        class="flex-1 rounded-xl border border-sage/30 px-4 py-3 focus:border-sage focus:outline-none focus:ring-2 focus:ring-sage/20"
      />
      <button
        type="submit"
        class="rounded-xl bg-rosedust px-6 py-3 font-semibold text-cream transition hover:bg-sage-deep"
      >
        Add
      </button>
    </form>

    <ul class="mt-8 space-y-2">
      <li
        v-for="(track, i) in playlist"
        :key="i"
        class="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm"
      >
        <span class="text-sm font-bold text-rosedust">{{ i + 1 }}</span>
        <div>
          <p class="font-medium text-bark">{{ track.song }}</p>
          <p class="text-sm text-bark/50">{{ track.artist }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>
