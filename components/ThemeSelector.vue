<script setup lang="ts">
const themes = [
  { name: 'Pink', color: '#E8729A' },
  { name: 'Blue', color: '#4AADE0' },
  { name: 'Purple', color: '#9B7FE6' },
  { name: 'Green', color: '#5BBF8A' },
  { name: 'Yellow', color: '#E4A94D' },
  { name: 'Black', color: '#4A4D57' },
]

const currentTheme = useState('theme', () => 'Pink')

function selectTheme(themeName: string) {
  currentTheme.value = themeName
  document.querySelector('[data-theme]')?.setAttribute('data-theme', themeName)
}
</script>

<template>
  <div class="flex flex-col gap-2 px-3 py-2">
    <span class="text-sm font-semibold text-secondary uppercase tracking-widest">Tema</span>
    <div class="flex gap-2">
      <button
        v-for="theme in themes"
        :key="theme.name"
        :title="theme.name"
        class="w-6 h-6 rounded-full cursor-pointer border-2 transition-all hover:scale-110 active:scale-95"
        :class="currentTheme === theme.name ? 'border-primary scale-110' : 'border-transparent'"
        :style="{ backgroundColor: theme.color }"
        @click="selectTheme(theme.name)"
      />
    </div>
  </div>
</template>
