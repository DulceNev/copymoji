<script setup lang="ts">
import KaomojiFinder from '~/components/KaomojiFinder.vue';

const { load, getFiltered, clearFilters } = useContentStore()

onMounted(() => {
  clearFilters()
  load()
})

const kaomojis = getFiltered('Kaomojis')
</script>

<template>
    <main class="bg-white h-full flex flex-col items-center text-center gap-5 py-5">
        <KaomojiFinder
          description="¡Encuentra y copia adorables emoticones para hacer tus mensajes más lindos!"
          :filters="['Positivo', 'Negativo', 'Animales', 'Baile', 'Amor']"
        />

        <div class="flex flex-wrap justify-center gap-4 w-full px-4">
            <KaomojiItem
              v-for="(item, index) in kaomojis"
              :key="index"
              :kaomoji="item.content"
            />
        </div>
    </main>
</template>
