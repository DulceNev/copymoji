<script setup>
import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue'

const fileName = ref('Ningún archivo seleccionado')
const resolution = ref(100)
const invertColors = ref(false)
const asciiOutput = ref('')
const copyButtonText = ref('Copiar')
const isDragging = ref(false)

const fileInput = ref(null)
const uploadArea = ref(null)
const hiddenCanvas = ref(null)

// Layout Refs
const controlsSection = ref(null)
const artContainer = ref(null)
const artContent = ref(null)
const contentScale = ref(1)
const fixedHeight = ref(null)
let resizeObserver = null

let loadedImage = null
let isGenerating = false

const MIN_RES = 10
const MAX_RES = 200

function triggerFileInput() {
  fileInput.value?.click()
}

function handleFileChange(event) {
  const file = event.target.files && event.target.files[0]
  handleFile(file)
}

function handleFile(file) {
  if (!file || !file.type.startsWith("image/")) {
    fileName.value = "Selecciona un archivo de imagen válido"
    return
  }

  fileName.value = file.name

  const reader = new FileReader()
  reader.onload = () => {
    const img = new Image()
    img.onload = () => {
      loadedImage = img
      generateDotArt()
    }
    img.src = reader.result
  }
  reader.readAsDataURL(file)
}

function onDragEnter() {
  isDragging.value = true
}
function onDragOver() {
  isDragging.value = true
}
function onDragLeave() {
  isDragging.value = false
}
function onDrop(e) {
  isDragging.value = false
  const dt = e.dataTransfer
  const file = dt && dt.files && dt.files[0]
  handleFile(file)
}

function syncResolution() {
  let val = Number(resolution.value)
  
  if (Number.isNaN(val)) {
    val = MIN_RES
  } else {
    if (val < MIN_RES) val = MIN_RES
    if (val > MAX_RES) val = MAX_RES
  }
  
  resolution.value = val
  
  if (loadedImage) generateDotArt()
}

function generateDotArt() {
  if (!loadedImage || !hiddenCanvas.value || isGenerating) return

  isGenerating = true

  const ctx = hiddenCanvas.value.getContext("2d", { willReadFrequently: true })
  if (!ctx) {
    isGenerating = false
    return
  }

  const baseResolution = 80

  const aspectRatio = loadedImage.height / loadedImage.width || 1
  const targetWidth = Math.max(16, Math.round(baseResolution))
  const charAspect = 0.52
  const targetHeight = Math.max(8, Math.round(targetWidth * aspectRatio * charAspect))

  hiddenCanvas.value.width = targetWidth
  hiddenCanvas.value.height = targetHeight

  ctx.clearRect(0, 0, targetWidth, targetHeight)
  ctx.drawImage(loadedImage, 0, 0, targetWidth, targetHeight)

  const imageData = ctx.getImageData(0, 0, targetWidth, targetHeight).data
  const invert = invertColors.value

  const minSlider = MIN_RES
  const maxSlider = MAX_RES
  let sliderVal = Number(resolution.value)
  if (Number.isNaN(sliderVal)) {
    sliderVal = (minSlider + maxSlider) / 2
  }
  const sliderSpan = maxSlider - minSlider || 1
  const sliderNorm = (sliderVal - minSlider) / sliderSpan
  const minThreshold = 80
  const maxThreshold = 230
  const threshold = minThreshold + sliderNorm * (maxThreshold - minThreshold)
  let result = ""

  for (let y = 0; y < targetHeight; y += 1) {
    let row = ""
    for (let x = 0; x < targetWidth; x += 1) {
      const idx = (y * targetWidth + x) * 4
      const r = imageData[idx]
      const g = imageData[idx + 1]
      const b = imageData[idx + 2]

      const brightness = 0.299 * r + 0.587 * g + 0.114 * b

      let char
      if (!invert) {
        char = brightness < threshold ? "•" : " "
      } else {
        char = brightness > threshold ? "•" : " "
      }

      row += char
    }
    result += row
    if (y < targetHeight - 1) result += "\n"
  }

  asciiOutput.value = result
  isGenerating = false
}

defineExpose({
  asciiOutput
})

async function copyToClipboard() {
  const text = asciiOutput.value || ""
  if (!text.trim()) {
    copyButtonText.value = "Nada para copiar"
    setTimeout(() => {
      copyButtonText.value = "Copiar"
    }, 1100)
    return
  }

  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text)
    } else {
      const tempArea = document.createElement("textarea")
      tempArea.value = text
      tempArea.style.position = "fixed"
      tempArea.style.left = "-9999px"
      document.body.appendChild(tempArea)
      tempArea.focus()
      tempArea.select()
      document.execCommand("copy")
      document.body.removeChild(tempArea)
    }

    const original = "Copiar"
    copyButtonText.value = "¡Copiado!"
    setTimeout(() => {
      copyButtonText.value = original
    }, 1200)
  } catch (err) {
    const original = "Copiar"
    copyButtonText.value = "Error"
    setTimeout(() => {
      copyButtonText.value = original
    }, 1400)
  }
}



function updateLayout() {
  if (controlsSection.value) {
    fixedHeight.value = controlsSection.value.offsetHeight
  }
  adjustScale()
}

function adjustScale() {
  if (!artContainer.value || !artContent.value) return

  const contentW = artContent.value.scrollWidth
  const contentH = artContent.value.scrollHeight
  const containerW = artContainer.value.clientWidth
  const containerH = artContainer.value.clientHeight

  if (contentW === 0 || contentH === 0 || containerW === 0 || containerH === 0) return

  // Calculamos el factor de escala para que "quepa" (contain)
  // Dejamos un pequeño margen (e.g. 95% del espacio)
  const scaleX = containerW / contentW
  const scaleY = containerH / contentH
  
  let scale = Math.min(scaleX, scaleY) * 0.95

  // Opcional: limitar para que no se agrande demasiado si el contenido es pequeño (píxeles gigantes)
  // Pero el usuario pidió ajustar. Si es muy pequeño, centrarlo a escala 1 es razonable.
  if (scale > 1) scale = 1

  contentScale.value = scale
}

onMounted(() => {
  resizeObserver = new ResizeObserver(() => {
    updateLayout()
  })
  
  if (controlsSection.value) {
    resizeObserver.observe(controlsSection.value)
  }
  // También observar el contenedor por si cambia el ancho de ventana
  if (artContainer.value) {
    resizeObserver.observe(artContainer.value)
  }
  
  // Ajuste inicial
  updateLayout()
  setTimeout(updateLayout, 200)
})

onUnmounted(() => {
  if (resizeObserver) resizeObserver.disconnect()
})

watch(asciiOutput, () => {
  nextTick(() => {
    adjustScale()
  })
})
</script>

<template>
  <div class="w-full max-w-4xl mx-auto pt-6 flex gap-5 ">
    <section ref="controlsSection" class="flex flex-col gap-5 w-[50%]">
      <!-- Upload Area -->
    <div 
      ref="uploadArea" 
      class="text-secondary hover:bg-primary-content border-3 border-dashed border-secondary rounded-xl p-12 text-center cursor-pointer transition-all duration-300 hover:border-primary hover:bg-base-200 group"
      :class="{ 'border-primary bg-base-200': isDragging }"
      @click="triggerFileInput"
      @dragenter.prevent.stop="onDragEnter"
      @dragover.prevent.stop="onDragOver"
      @dragleave.prevent.stop="onDragLeave"
      @drop.prevent.stop="onDrop"
    >
      <input 
        ref="fileInput"
        type="file" 
        id="imageInput" 
        accept="image/*" 
        hidden 
        @change="handleFileChange"
      >
      <div class="flex flex-col items-center gap-1">
        <div class="w-16 h-16 flex items-center justify-center">
          <Icon name="pixelarticons:download" class="text-4xl" />
        </div>
        <div class="space-y-1">
          <p class="text-lg font-bold">Sube o arrastra tu imagen aquí</p>
          <p class="text-sm font-normal">{{ fileName }}</p>

        </div>
      </div>
    </div>

    <!-- Controls -->
    <div class="card border-3 border-primary text-secondary">
      <div class="card-body flex flex-col items-center justify-center">
        <div class="flex items-center justify-center gap-2">
        <Icon name="pixelarticons:command" class="text-2xl" />
        <h2 class="card-title text-xl">Configuración</h2>
        </div>
        
        <div class="flex flex-col gap-8 w-full">
          <!-- Resolution Control -->
          <div class="form-control ">
            <label class="label">
              <span class="label-text font-bold">Resolución (Umbral)</span>
              <span class="label-text-alt ">{{ resolution }}</span>
            </label>
            <div class="flex items-center gap-4">
              <input 
                type="range" 
                :min="MIN_RES" 
                :max="MAX_RES" 
                v-model="resolution" 
                @input="syncResolution"
                class="range range-primary range-sm" 
              />
              <input 
                type="number" 
                :min="MIN_RES" 
                :max="MAX_RES" 
                v-model="resolution"
                @input="syncResolution"
                class="input input-bordered input-sm w-20 text-center noto-sans" 
              />
            </div>
          </div>

          <!-- Invert Colors -->
          <div class="form-control">
            <label class="label cursor-pointer gap-4">
              <input 
                type="checkbox" 
                v-model="invertColors"
                @change="syncResolution"
                class="checkbox checkbox-primary border-3 border-primary rounded-none" 
              />
              <span class="label-text font-bold">Invertir colores</span>
            </label>
          </div>
        </div>
      </div>
    </div>
    </section>

    <!-- Output -->
    <div 
      class="card w-[50%] border-3 border-primary transition-[height] duration-100"
      :style="{ height: fixedHeight ? fixedHeight + 'px' : 'auto' }"
    >
      <div class="card-body flex flex-col h-full p-0">
        <div class="p-4 flex justify-between items-center bg-primary-content shrink-0 rounded-t-xl">
          <h3 class="font-bold text-primary">Resultado</h3>
          <button class="btn btn-primary btn-sm gap-2" @click="copyToClipboard">
            <Icon name="pixelarticons:copy" class="text-xl" />
            {{ copyButtonText }}
          </button>
        </div>
        
        <div ref="artContainer" class="relative flex-grow w-full bg-base-100 rounded-b-xl overflow-hidden flex items-center justify-center">
            <div class="absolute inset-0 flex items-center justify-center">
               <pre 
                 ref="artContent" 
                 class="text-xs text-gray-900 select-all origin-center transition-transform duration-200" 
                 :style="{ transform: `scale(${contentScale})` }"
                 style="font-family: 'Courier New', Courier, monospace; line-height: 1.0; white-space: pre;"
               >{{ asciiOutput || 'Tu DotArt aparecerá aquí...' }}</pre>
            </div>
        </div>
      </div>
    </div>

    <canvas ref="hiddenCanvas" id="hiddenCanvas" style="display: none;"></canvas>
  </div>
</template>


