<template>
  <section id="servicios" class="py-32 md:py-40">
    <div class="max-w-[1600px] mx-auto w-[90%] grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
      <div class="reveal-wait sticky top-32">
        <span class="text-orange-500 text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">Nuestra Experiencia</span>
        <h2 class="text-4xl md:text-6xl font-serif font-light tracking-tight text-white mb-6">
          Maestría <br />
          Material.
        </h2>
        <p class="text-lg text-stone-400 font-light leading-relaxed mb-8">
          No solo construimos; creamos ambientes duraderos. Desde la obra gruesa hasta el último detalle de pintura, nuestro equipo multidisciplinario asegura un estándar superior en cada etapa.
        </p>
        <div class="flex flex-col gap-6">
          <div class="flex items-start gap-4">
            <div class="p-3 rounded-full bg-white/5 border border-white/10 text-orange-400">
              <iconify-icon icon="solar:verified-check-linear" width="24" stroke-width="1.5" />
            </div>
            <div>
              <h4 class="text-white font-medium mb-1">Garantía de Satisfacción</h4>
              <p class="text-sm text-stone-500">Nuestra experiencia y el buen trabajo en cada etapa son la mejor garantía: una obra bien hecha es la base de su satisfacción.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col reveal-wait delay-200">
        <div
          v-for="(service, i) in services"
          :key="service.id"
          class="service-item group py-10 border-b border-white/10 cursor-pointer transition-all duration-300 hover:pl-4 hover:border-orange-500/50"
        >
          <div class="flex justify-between items-center">
            <div>
              <span class="text-xs text-stone-600 mb-2 block">{{ String(i + 1).padStart(2, '0') }}</span>
              <h3 class="text-2xl md:text-3xl font-serif font-light text-stone-300 group-hover:text-white transition-colors">
                {{ service.title }}
              </h3>
            </div>
            <iconify-icon icon="solar:arrow-right-up-linear" width="24" class="text-stone-600 transition-all duration-300" stroke-width="1.5" />
          </div>
          <p class="h-0 overflow-hidden group-hover:h-auto group-hover:mt-4 text-sm text-stone-400 transition-all duration-300">
            {{ service.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    id: 1,
    title: 'Remodelación Integral',
    description: 'Renovación completa de cocinas, baños y espacios comunes con enfoque en materialidad moderna.',
  },
  {
    id: 2,
    title: 'Ampliaciones',
    description: 'Extensiones estructurales, segundos pisos y quinchos diseñados para integrarse a la arquitectura existente.',
  },
  {
    id: 3,
    title: 'Terminaciones Finas',
    description: 'Instalación de porcelanato, piso flotante, molduras y pintura de alta gama.',
  },
  {
    id: 4,
    title: 'Tabiquería & Drywall',
    description: 'Soluciones espaciales con Metalcon y Volcanita, aislamiento térmico y acústico.',
  },
]
</script>
