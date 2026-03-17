<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{
  kaomoji: string
  creator?: string
}>()

const showTooltip = ref(false)
const copied = ref(false)
const saved = ref(false)

let closeTooltipTimeout: ReturnType<typeof setTimeout> | null = null

const handleMouseEnter = () => {
    if (closeTooltipTimeout) {
        clearTimeout(closeTooltipTimeout)
        closeTooltipTimeout = null
    }
    showTooltip.value = true
}

const handleMouseLeave = () => {
    closeTooltipTimeout = setTimeout(() => {
        showTooltip.value = false
    }, 500) 
}

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(props.kaomoji)
    copied.value = true
    setTimeout(() => copied.value = false, 2000)
  } catch (err) {
    console.error('Failed to copy', err)
  }
}

const toggleSave = () => {
  const storageKey = 'saved_kaomojis'
  let savedList: string[] = []
  
  try {
    const raw = localStorage.getItem(storageKey)
    if (raw) savedList = JSON.parse(raw)
  } catch (e) {
    savedList = []
  }

  if (saved.value) {
    savedList = savedList.filter(k => k !== props.kaomoji)
    saved.value = false
  } else {
    if (!savedList.includes(props.kaomoji)) {
      savedList.push(props.kaomoji)
    }
    saved.value = true
  }
  
  try {
    localStorage.setItem(storageKey, JSON.stringify(savedList))
  } catch (e) {
    console.error('LocalStorage full or disabled', e)
  }
}

onMounted(() => {
  try {
    const raw = localStorage.getItem('saved_kaomojis')
    if (raw) {
      const list = JSON.parse(raw)
      if (Array.isArray(list) && list.includes(props.kaomoji)) {
        saved.value = true
      }
    }
  } catch (e) {
      
  }
})
</script>

<template>
  <div 
    class="relative group inline-block m-2"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <!-- Tooltip / Menu -->
    <div 
        class="absolute -top-14 left-1/2 -translate-x-1/2 flex items-center justify-center gap-3 bg-primary px-4 py-2 rounded-lg shadow-xl z-20 transition-all duration-300 transform origin-bottom"
        :class="showTooltip ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-2 pointer-events-none'"
    >
        <!-- Triangle Arrow -->
        <div class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-primary"></div>

        <!-- Copy -->
        <button 
            @click.stop="copyToClipboard" 
            class="text-white hover:scale-110 active:scale-95 transition-transform flex items-center justify-center"
            :title="copied ? 'Copiado!' : 'Copiar'"
        >
            <Icon :name="copied ? 'pixelarticons:check' : 'pixelarticons:copy'" size="1.2rem" />
        </button>

        <!-- Save -->
        <button 
            @click.stop="toggleSave"
             class="text-white hover:scale-110 active:scale-95 transition-transform flex items-center justify-center"
             :title="saved ? 'Guardado' : 'Guardar'"
        >
             <Icon :name="saved ? 'pixelarticons:heart' : 'pixelarticons:bookmark'" size="1.2rem" />
        </button>

        <!-- Profile (Visual Only) -->
        <button 
             class="text-white hover:scale-110 active:scale-95 transition-transform flex items-center justify-center"
             title="Ver perfil"
        >
             <Icon name="pixelarticons:user" size="1.2rem" />
        </button>
    </div>

    <!-- Kaomoji Card Body -->
    <button 
        @click="copyToClipboard"
        class="
            relative 
            flex items-center justify-center 
            bg-white 
            shadow-sm 
            transition-all duration-300 
            noto-sans 
            text-secondary 
            text-base
            border-primary/30
            hover:border-primary
            border-1 
            rounded-lg 
            p-2
            min-w-[100px]
            cursor-pointer
        "
        :class="[
            showTooltip ? 'border-primary shadow-md -translate-y-1' : ''
        ]"
    >
        {{ kaomoji }}
    </button>
  </div>
</template>
