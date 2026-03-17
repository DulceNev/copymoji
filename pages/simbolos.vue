<script setup lang="ts">
import KaomojiFinder from '~/components/KaomojiFinder.vue';

const { load, getFiltered, clearFilters } = useContentStore()

onMounted(() => {
  clearFilters()
  load()
})

const simbolos = getFiltered('Simbolos')
</script>

<template>
  <main class="h-full flex flex-col items-center text-center gap-5 py-5">
    <KaomojiFinder
      description="Símbolos decorativos para resaltar y dar un toque único a tu contenido"
      :filters="['Rojo', 'Azul', 'Fruta', 'Oceano', 'Rosa', 'Animales', 'B&N']"
    />

    <div class="flex flex-wrap justify-center gap-4 w-full px-4">
      <KaomojiItem
        v-for="(item, index) in simbolos"
        :key="index"
        :kaomoji="item.content"
      />
    </div>
  </main>
</template>
