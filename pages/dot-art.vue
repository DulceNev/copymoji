<script setup lang="ts">
import { ref } from 'vue'

const STORAGE_KEY = 'copymoji_dotart'

const generator = ref<any>(null)
const gallery = ref<string[]>([])

onMounted(() => {
  const raw = localStorage.getItem(STORAGE_KEY)
  if (raw) {
    try { gallery.value = JSON.parse(raw) } catch {}
  }
})

function addToGallery() {
  if (generator.value && generator.value.asciiOutput) {
    gallery.value.unshift(generator.value.asciiOutput)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(gallery.value))
  }
}
</script>

<template>
    <div class="flex flex-col items-center justify-center mt-5 ">
    <h1 class="text-xl font-bold text-primary">Dot Art Generator</h1>
    <p class="text-secondary text-xs w-[50%] text-center">NOTA: Para obtener mejores resultados en el dot art, se recomienda usar imágenes simples, con pocos detalles, alto contraste y formas claras.
Imágenes muy complejas o con muchos colores pueden perder detalle al convertirse en puntos.</p>
    </div>

 <div class="flex flex-col items-center justify-center">
  <DotArtGenarator ref="generator"/>
   <ActionButton text="Agregar" class="mt-8 mb-8 text-lg px-12 py-2" @click="addToGallery"/>
 </div>

 <div class="w-full max-w-6xl mx-auto px-4 mb-20">
    <h2 class="text-xl font-bold text-center text-primary mb-6">Galeria de Dot Art</h2>
    
    <div v-if="gallery.length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
       <DotArtCard 
         v-for="(art, index) in gallery" 
         :key="index" 
         :art="art" 
       />
    </div>
    <div v-else class="text-center text-secondary opacity-50 py-10">
        <Icon name="pixelarticons:image-gallery" class="text-6xl mb-2" />
        <p>¡Crea y agrega algo de arte!</p>
    </div>
 </div>
 

</template>