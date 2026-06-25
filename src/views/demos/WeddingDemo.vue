<!-- DEMO 1: Wedding — Romantic Botanical, elegante at malambing. -->
<script setup>
import { weddingDemo as d } from '@/data/demoInvitations'
import CountdownTimer from '@/components/invitation/CountdownTimer.vue'
import EventDetails from '@/components/invitation/EventDetails.vue'
import MapEmbed from '@/components/invitation/MapEmbed.vue'
import EntourageList from '@/components/invitation/EntourageList.vue'
import PhotoGallery from '@/components/invitation/PhotoGallery.vue'
import RsvpForm from '@/components/invitation/RsvpForm.vue'
import DemoCta from '@/components/common/DemoCta.vue'
import BotanicalSprig from '@/components/common/BotanicalSprig.vue'
</script>

<template>
  <main class="bg-cream text-bark">
    <!-- Hero -->
    <section class="relative overflow-hidden">
      <BotanicalSprig class="absolute left-6 top-8 h-28 w-auto text-sage/40 sm:left-14 sm:h-40" />
      <BotanicalSprig class="absolute right-6 top-8 h-28 w-auto -scale-x-100 text-sage/40 sm:right-14 sm:h-40" />
      <div class="mx-auto flex min-h-[80vh] max-w-2xl flex-col items-center justify-center px-6 py-24 text-center">
        <p v-reveal class="font-script text-3xl text-rosedust sm:text-4xl">We're getting married</p>
        <h1 v-reveal="100" class="mt-3 font-display text-5xl font-light tracking-tight text-sage-deep sm:text-7xl">
          {{ d.couple }}
        </h1>
        <div v-reveal="200" class="my-8 flex items-center gap-3 text-sage" aria-hidden="true">
          <span class="h-px w-10 bg-sage/50" /><span class="text-xs">❀</span><span class="h-px w-10 bg-sage/50" />
        </div>
        <p v-reveal="250" class="max-w-md text-bark/80">{{ d.tagline }}</p>
        <p v-reveal="300" class="mt-4 font-display text-2xl text-rosedust">{{ d.dateLabel }}</p>
      </div>
    </section>

    <!-- Countdown -->
    <section class="px-6 py-16">
      <p v-reveal class="mb-8 text-center text-xs uppercase tracking-[0.3em] text-sage">
        Counting down to forever
      </p>
      <div v-reveal="100"><CountdownTimer :target-date="d.date" accent-class="text-sage-deep" /></div>
    </section>

    <!-- Program -->
    <div v-reveal class="py-16">
      <EventDetails title="Order of Events" :items="d.program" accent-class="text-rosedust" />
    </div>

    <!-- Venue -->
    <section class="px-6 py-16">
      <h2 v-reveal class="mb-10 text-center font-display text-4xl font-light text-sage-deep">The Ceremony</h2>
      <div v-reveal="100" class="mx-auto max-w-2xl">
        <MapEmbed :query="d.venue.mapQuery" :venue-name="d.venue.name" :address="d.venue.address" />
      </div>
    </section>

    <!-- Entourage -->
    <div v-reveal class="py-16"><EntourageList :members="d.entourage" /></div>

    <!-- Gallery -->
    <div class="py-16"><PhotoGallery :images="d.gallery" title="Our Moments" /></div>

    <!-- RSVP -->
    <section class="bg-blush/50 py-20">
      <div v-reveal>
        <RsvpForm accent-class="text-sage-deep" button-class="bg-sage hover:bg-sage-deep" />
      </div>
    </section>

    <!-- Conversion CTA -->
    <DemoCta occasion="wedding" />

    <div class="bg-cream py-12 text-center">
      <router-link to="/" class="text-sm text-sage underline-offset-4 hover:underline">
        ← Back to home
      </router-link>
    </div>
  </main>
</template>
