<script setup lang="ts">
import KaomojiFinder from '~/components/KaomojiFinder.vue';

const { load, getFiltered, clearFilters } = useContentStore()

onMounted(() => {
  clearFilters()
  load()
})

const separadores = getFiltered('Separadores')
</script>

<template>
  <main class="h-full flex flex-col items-center text-center gap-5 py-5">
    <KaomojiFinder
      description="Separadores decorativos para dividir y embellecer tu contenido. ¡Úsalos en tu web o blog!"
      :filters="['Estrellas', 'Corazones', 'Primavera', 'Lazos', 'Animales']"
    />

    <div class="flex flex-wrap justify-center gap-4 w-full px-4">
      <KaomojiItem
        v-for="(item, index) in separadores"
        :key="index"
        :kaomoji="item.content"
      />
    </div>
  </main>
</template>
