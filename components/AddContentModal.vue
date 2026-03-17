<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  open: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

const categories = [
  { name: 'Kaomojis', icon: 'pixelarticons:mood-happy' },
  { name: 'Separadores', icon: 'pixelarticons:list-box' },
  { name: 'Simbolos', icon: 'pixelarticons:zap' },
]

const content = ref('')
const tags = ref('')
const selectedCategory = ref('Kaomojis')

function handleAdd() {
  if (!content.value.trim()) return

  // TODO: guardar el contenido
  console.log({
    content: content.value,
    tags: tags.value.split(',').map(t => t.trim()).filter(Boolean),
    category: selectedCategory.value,
  })

  content.value = ''
  tags.value = ''
  selectedCategory.value = 'Kaomojis'
  emit('close')
}
</script>

<template>
  <div
    v-if="props.open"
    class="fixed inset-0 z-50 flex items-center justify-center"
  >
    <!-- Overlay -->
    <div
      class="absolute inset-0 bg-secondary/20 backdrop-blur-sm"
      @click="emit('close')"
    />

    <!-- Modal -->
    <div class="relative bg-base-100 rounded-2xl shadow-xl border border-primary/30 w-full max-w-lg mx-4 p-8 flex flex-col items-center gap-5 animate-modal-in">

      <!-- Titulo -->
      <div class="text-center">
        <h2 class="text-secondary text-xl font-bold">
          Agrega tu propia decoracion o kaomoji! {&#7508;'u'}
        </h2>
        <p class="text-secondary/60 text-sm mt-1">
          No olvides agregarle etiquetas para que este en la seccion correcta!
        </p>
      </div>

      <!-- Input contenido -->
      <label class="input input-bordered rounded-full border-2 border-primary/40 text-primary w-full focus-within:border-primary">
        <Icon name="pixelarticons:add-box" size="1.2rem" class="text-primary/50" />
        <input
          v-model="content"
          type="text"
          class="grow"
          placeholder="Pon tu idea aqui!"
        />
      </label>

      <!-- Input etiquetas -->
      <label class="input input-bordered rounded-full border-2 border-primary/40 text-primary w-full focus-within:border-primary">
        <Icon name="pixelarticons:label" size="1.2rem" class="text-primary/50" />
        <input
          v-model="tags"
          type="text"
          class="grow"
          placeholder="Agrega etiquetas a tu idea (Separados por comas)"
        />
      </label>

      <!-- Categoria -->
      <div class="text-center w-full">
        <p class="text-secondary/60 text-sm mb-3">Escoge la categoria en donde aparecera tu creacion</p>
        <div class="flex justify-center gap-3 flex-wrap">
          <button
            v-for="cat in categories"
            :key="cat.name"
            class="flex items-center gap-1.5 py-1 px-4 rounded-full border-2 text-sm font-semibold cursor-pointer transition-all active:scale-95"
            :class="selectedCategory === cat.name
              ? 'bg-primary text-primary-content border-primary'
              : 'border-primary/40 text-primary hover:bg-primary-content'"
            @click="selectedCategory = cat.name"
          >
            <Icon :name="cat.icon" size="1rem" />
            {{ cat.name }}
          </button>
        </div>
      </div>

      <!-- Botones -->
      <div class="flex gap-3 mt-2">
        <button
          class="border-2 rounded-full py-1.5 px-6 text-base border-primary text-secondary cursor-pointer hover:bg-primary-content active:scale-95 transition-all"
          @click="emit('close')"
        >
          Cerrar
        </button>
        <button
          class="border-2 rounded-full py-1.5 px-6 text-base border-primary bg-primary text-primary-content cursor-pointer hover:opacity-90 active:scale-95 transition-all"
          @click="handleAdd"
        >
          Agregar
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-modal-in {
  animation: modalIn 0.25s ease-out;
}

@keyframes modalIn {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(10px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
</style>
