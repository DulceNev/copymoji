<script setup>
import { ref } from 'vue'

const props = defineProps({
  art: {
    type: String,
    required: true
  }
})

const isCopied = ref(false)

async function copy() {
  if (!navigator.clipboard) return
  await navigator.clipboard.writeText(props.art)
  isCopied.value = true
  setTimeout(() => isCopied.value = false, 2000)
}
</script>

<template>
  <div class="card border-3 border-primary bg-base-100 hover:shadow-lg transition-all duration-300 group h-64 overflow-hidden relative">
    <div class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <button class="btn btn-sm btn-circle btn-primary" @click="copy" :title="isCopied ? 'Copiado' : 'Copiar'">
             <Icon v-if="!isCopied" name="pixelarticons:copy" class="text-lg" />
             <Icon v-else name="pixelarticons:check" class="text-lg" />
        </button>
    </div>
    <div class="card-body p-2 flex items-center justify-center h-full w-full overflow-hidden">
         <div class="w-full h-full flex items-center justify-center">
             <pre 
               class="text-[6px] whitespace-pre text-center select-none cursor-default" 
               style="font-family: 'Courier New', Courier, monospace; line-height: 0.8;"
             >{{ art }}</pre>
         </div>
    </div>
  </div>
</template>
