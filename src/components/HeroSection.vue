<template>
  <section class="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
    <div class="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop"
        alt="Luxury Interior Construction"
        class="w-full h-full object-cover opacity-50 grayscale-[30%]"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/40 to-transparent" />
      <div class="absolute inset-0 bg-gradient-to-r from-[#09090b]/90 via-transparent to-transparent" />
    </div>

    <div class="max-w-[1600px] mx-auto w-[90%] relative z-10 pt-20">
      <div class="reveal-wait reveal-active mb-6">
        <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-[10px] font-semibold tracking-[0.2em] uppercase">
          <span class="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
          Disponible 2024
        </span>
      </div>

      <h1 class="reveal-wait delay-100 reveal-active font-serif text-5xl md:text-7xl lg:text-[7.5rem] leading-[0.9] font-light tracking-tight text-white mb-8">
        La estructura <br />
        <span class="italic text-stone-400">del detalle.</span>
      </h1>

      <p class="reveal-wait delay-200 reveal-active text-lg md:text-xl text-stone-400 font-light max-w-2xl leading-relaxed mb-12">
        Experiencia y calidad en cada etapa de la obra. Obra gruesa y terminaciones hechas con el cuidado del oficio: buen resultado, plazos cumplidos y un trabajo que perdura en el tiempo.
      </p>

      <div class="reveal-wait delay-300 reveal-active flex flex-col sm:flex-row gap-4">
        <a href="#proyectos" class="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-black hover:bg-stone-200 rounded-full overflow-hidden transition-all duration-300">
          <span class="text-xs font-semibold tracking-[0.1em] uppercase z-10">Ver Portafolio</span>
        </a>
        <a href="#contacto" class="group relative inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/10 hover:border-white/30 text-white rounded-full overflow-hidden transition-all duration-300">
          <span class="text-xs font-semibold tracking-[0.1em] uppercase z-10">Solicitar Visita</span>
        </a>
      </div>
    </div>
  </section>
</template>
