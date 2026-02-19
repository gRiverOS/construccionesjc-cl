<script setup>
import UtilityBar from './components/UtilityBar.vue'
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import SocialProof from './components/SocialProof.vue'
import ServicesSection from './components/ServicesSection.vue'
import PortfolioSection from './components/PortfolioSection.vue'
import ContactSection from './components/ContactSection.vue'
import AppFooter from './components/AppFooter.vue'
import { useReveal } from './composables/useReveal'

useReveal()
</script>

<template>
  <div class="selection:bg-orange-500/30 selection:text-orange-100">
    <!-- Background Ambience -->
    <div
      class="fixed inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1620626012761-d7fa8c8d4b39?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"
    />
    <div class="fixed inset-0 -z-10 bg-gradient-to-b from-black via-stone-950/90 to-black" />

    <UtilityBar />
    <AppHeader />

    <main>
      <HeroSection />
      <SocialProof />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
    </main>

    <AppFooter />
  </div>
</template>
