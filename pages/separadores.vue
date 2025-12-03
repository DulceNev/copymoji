<script setup lang="ts">
import KaomojiFinder from '~/components/KaomojiFinder.vue';

</script>

<template>
  <main class="h-full flex flex-col items-center text-center gap-5 py-5">

  <KaomojiFinder description="Separadores decorativos para dividir y embellecer tu contenido. ¡Úsalos en tu web o blog!" placeholderSearch="Escribe para buscar separadores..."/>

      <section>
        <div
          class="tooltip tooltip-primary"
          data-tip="como se ponen iconos aqui aa"
        >
          <button
            class="noto-sans text-secondary border-1 rounded-lg p-2 text-sm"
          >
            ❀・❀・❀・❀・❀
          </button>
        </div>
      </section>
  </main>
</template>