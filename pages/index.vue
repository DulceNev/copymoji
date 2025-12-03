<script setup lang="ts">
import KaomojiFinder from '~/components/KaomojiFinder.vue';

</script>



<template>
  <main class="h-full flex flex-col items-center text-center gap-5 py-5">
    <KaomojiFinder description="¡Encuentra y copia adorables emoticones para hacer tus mensajes más lindos!" placeholderSearch="Escribe para buscar kaomojis..."/>

      <section>
        <button
          class="noto-sans text-secondary border-1 rounded-lg p-2 text-sm"
        >
          (˶>⩊<˶)
        </button>
      </section>
  </main>
</template>