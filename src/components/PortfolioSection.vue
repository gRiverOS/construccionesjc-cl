<template>
  <section id="proyectos" class="py-20 bg-stone-900/30 border-y border-white/5">
    <div class="max-w-[1600px] mx-auto w-[90%]">
      <div class="reveal-wait flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <span class="text-orange-500 text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">Selección de Obras</span>
          <h2 class="text-4xl md:text-5xl font-serif font-light tracking-tight text-white">
            La Colección.
          </h2>
        </div>
        <a href="#" class="group flex items-center gap-2 text-sm text-white border-b border-transparent hover:border-white transition-all pb-1">
          Ver todos los proyectos
          <iconify-icon icon="solar:arrow-right-linear" width="16" class="group-hover:translate-x-1 transition-transform" stroke-width="1.5" />
        </a>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
        <div class="reveal-wait delay-100 group relative aspect-[4/3] overflow-hidden rounded-sm bg-stone-800">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop"
            alt="Remodelación Cocina"
            class="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105 group-hover:grayscale-0 grayscale-[20%]"
          />
          <div class="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <span class="text-xs text-orange-400 tracking-wider uppercase mb-1 block">San Antonio</span>
            <h3 class="text-xl text-white font-medium">Remodelación Cocina Open Concept</h3>
          </div>
        </div>

        <div class="reveal-wait delay-200 group relative aspect-[4/3] overflow-hidden rounded-sm bg-stone-800">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop"
            alt="Ampliación Living"
            class="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105 group-hover:grayscale-0 grayscale-[20%]"
          />
          <div class="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <span class="text-xs text-orange-400 tracking-wider uppercase mb-1 block">Santo Domingo</span>
            <h3 class="text-xl text-white font-medium">Ampliación Living & Terraza</h3>
          </div>
        </div>

        <div class="reveal-wait delay-300 md:col-span-2 group relative aspect-[21/9] overflow-hidden rounded-sm bg-stone-800">
          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2400&auto=format&fit=crop"
            alt="Fachada Moderna"
            class="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105 group-hover:grayscale-0 grayscale-[20%]"
          />
          <div class="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <span class="text-xs text-orange-400 tracking-wider uppercase mb-1 block">Lo Abarca</span>
            <h3 class="text-xl text-white font-medium">Restauración de Fachada & Pintura</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
