<!-- DEMO 2: Debut — chic at elegante (plum + rosedust). -->
<script setup>
import { debutDemo as d } from '@/data/demoInvitations'
import CountdownTimer from '@/components/invitation/CountdownTimer.vue'
import EventDetails from '@/components/invitation/EventDetails.vue'
import DressCode from '@/components/invitation/DressCode.vue'
import SongRequest from '@/components/invitation/SongRequest.vue'
import PhotoGallery from '@/components/invitation/PhotoGallery.vue'
import RsvpForm from '@/components/invitation/RsvpForm.vue'
import DemoCta from '@/components/common/DemoCta.vue'
</script>

<template>
  <main class="bg-cream text-bark">
    <!-- Hero -->
    <section class="bg-gradient-to-b from-blush/70 to-cream px-6 py-28 text-center">
      <p v-reveal class="font-script text-3xl text-rosedust sm:text-4xl">it's my debut</p>
      <h1 v-reveal="100" class="mt-3 font-display text-5xl font-light tracking-tight text-[#6d4a63] sm:text-7xl">
        {{ d.celebrant }}
      </h1>
      <div v-reveal="200" class="mx-auto my-8 flex w-fit items-center gap-3 text-rosedust" aria-hidden="true">
        <span class="h-px w-10 bg-rosedust/50" /><span class="text-xs">❀</span><span class="h-px w-10 bg-rosedust/50" />
      </div>
      <p v-reveal="250" class="mx-auto max-w-md text-bark/80">{{ d.tagline }}</p>
      <p v-reveal="300" class="mt-4 font-display text-2xl text-rosedust">{{ d.dateLabel }}</p>
    </section>

    <!-- Countdown -->
    <section class="px-6 py-16">
      <div v-reveal><CountdownTimer :target-date="d.date" accent-class="text-[#6d4a63]" /></div>
    </section>

    <!-- Program -->
    <div v-reveal class="py-16">
      <EventDetails title="The Program" :items="d.program" accent-class="text-rosedust" />
    </div>

    <!-- Dress code -->
    <div v-reveal class="py-16">
      <DressCode :theme="d.dressCode.theme" :palette="d.dressCode.palette" :note="d.dressCode.note" />
    </div>

    <!-- Song request -->
    <div v-reveal class="py-16"><SongRequest /></div>

    <!-- Gallery -->
    <div class="py-16"><PhotoGallery :images="d.gallery" title="Highlights" /></div>

    <!-- RSVP -->
    <section class="bg-blush/50 py-20">
      <div v-reveal>
        <RsvpForm accent-class="text-rosedust" button-class="bg-rosedust hover:bg-sage-deep" />
      </div>
    </section>

    <!-- Conversion CTA -->
    <DemoCta occasion="debut" />

    <div class="bg-cream py-12 text-center">
      <router-link to="/" class="text-sm text-rosedust underline-offset-4 hover:underline">
        ← Back to home
      </router-link>
    </div>
  </main>
</template>
