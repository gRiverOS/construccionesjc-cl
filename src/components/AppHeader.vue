<template>
  <header class="sticky top-0 z-50 w-full border-b border-white/5 bg-black/80 backdrop-blur-md transition-all duration-300">
    <div class="max-w-[1600px] mx-auto w-[90%] h-20 flex justify-between items-center">
      <a href="/" class="group flex items-center gap-3">
        <div class="w-10 h-10 border border-white/20 rounded flex items-center justify-center font-serif text-xl italic font-light group-hover:border-white/50 transition-colors">
          JC
        </div>
        <div class="flex flex-col">
          <span class="text-sm font-semibold tracking-tight uppercase leading-none">Construcciones</span>
          <span class="text-[10px] text-stone-500 tracking-[0.2em] leading-none mt-1">Y TERMINACIONES</span>
        </div>
      </a>

      <nav class="hidden lg:flex items-center gap-10">
        <a href="#servicios" class="nav-link relative py-2 text-sm text-stone-400 hover:text-white transition-colors">Servicios</a>
        <a href="#proyectos" class="nav-link relative py-2 text-sm text-stone-400 hover:text-white transition-colors">Proyectos</a>
        <a href="#nosotros" class="nav-link relative py-2 text-sm text-stone-400 hover:text-white transition-colors">Empresa</a>
      </nav>

      <div class="flex items-center gap-4">
        <a href="#contacto" class="btn-beam group rounded-full p-[1px] hidden sm:block">
          <div class="btn-beam-content px-6 py-2.5 bg-stone-950 transition-colors group-hover:bg-stone-900">
            <span class="text-xs font-medium tracking-widest text-white uppercase">Cotizar</span>
            <iconify-icon icon="solar:arrow-right-linear" width="16" stroke-width="1.5" />
          </div>
        </a>
        <button type="button" class="lg:hidden text-white" aria-label="Menú">
          <iconify-icon icon="solar:hamburger-menu-linear" width="24" stroke-width="1.5" />
        </button>
      </div>
    </div>
  </header>
</template>
