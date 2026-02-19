<template>
  <footer class="bg-black border-t border-white/10 pt-24 pb-12 text-sm">
    <div class="max-w-[1600px] mx-auto w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
      <div class="col-span-1 lg:col-span-1">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-8 h-8 border border-white/20 rounded flex items-center justify-center font-serif text-lg italic text-white">
            JC
          </div>
          <span class="text-white font-semibold uppercase tracking-tight">Construcciones JC</span>
        </div>
        <p class="text-stone-500 leading-relaxed mb-6">
          Elevando el estándar de la construcción residencial en Chile. Calidad certificada, plazos cumplidos y terminaciones impecables.
        </p>
      </div>

      <div class="col-span-1">
        <h4 class="text-white font-medium mb-6 uppercase tracking-widest text-xs">Servicios</h4>
        <ul class="space-y-4 text-stone-500">
          <li>
            <a href="#servicios" class="hover:text-white transition-colors flex items-center gap-2 group">
              <iconify-icon icon="solar:arrow-right-linear" class="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all text-orange-500" width="12" />
              Ampliaciones
            </a>
          </li>
          <li>
            <a href="#servicios" class="hover:text-white transition-colors flex items-center gap-2 group">
              <iconify-icon icon="solar:arrow-right-linear" class="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all text-orange-500" width="12" />
              Remodelaciones
            </a>
          </li>
          <li>
            <a href="#servicios" class="hover:text-white transition-colors flex items-center gap-2 group">
              <iconify-icon icon="solar:arrow-right-linear" class="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all text-orange-500" width="12" />
              Pintura & Fachadas
            </a>
          </li>
          <li>
            <a href="#servicios" class="hover:text-white transition-colors flex items-center gap-2 group">
              <iconify-icon icon="solar:arrow-right-linear" class="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all text-orange-500" width="12" />
              Proyectos Comerciales
            </a>
          </li>
        </ul>
      </div>

      <div class="col-span-1">
        <h4 class="text-white font-medium mb-6 uppercase tracking-widest text-xs">Cobertura</h4>
        <ul class="space-y-4 text-stone-500">
          <li><span class="cursor-default">Las Condes</span></li>
          <li><span class="cursor-default">Vitacura</span></li>
          <li><span class="cursor-default">Lo Barnechea</span></li>
          <li><span class="cursor-default">Chicureo</span></li>
        </ul>
      </div>

      <div class="col-span-1">
        <h4 class="text-white font-medium mb-6 uppercase tracking-widest text-xs">Contacto</h4>
        <div class="space-y-4 text-stone-500">
          <div class="flex gap-3 items-start">
            <iconify-icon icon="solar:map-point-linear" class="mt-0.5 text-orange-500 shrink-0" width="16" stroke-width="1.5" />
            <span>Av. Providencia 1234, Of. 605<br />Santiago, Chile</span>
          </div>
          <div class="flex gap-3 items-center">
            <iconify-icon icon="solar:phone-calling-linear" class="text-orange-500 shrink-0" width="16" stroke-width="1.5" />
            <a href="tel:+56912345678" class="hover:text-white transition-colors">+56 9 1234 5678</a>
          </div>
          <div class="flex gap-3 items-center">
            <iconify-icon icon="solar:letter-linear" class="text-orange-500 shrink-0" width="16" stroke-width="1.5" />
            <a href="mailto:contacto@construcciones.cl" class="hover:text-white transition-colors">contacto@construcciones.cl</a>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-[1600px] mx-auto w-[90%] border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-stone-600 text-xs">
      <p>© {{ currentYear }} Construcciones y Terminaciones JC SpA. Todos los derechos reservados.</p>
      <div class="flex gap-6">
        <a href="#" class="hover:text-stone-400">Privacidad</a>
        <a href="#" class="hover:text-stone-400">Términos</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>
