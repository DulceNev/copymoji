<script setup lang="ts">
const props = defineProps<Props>();

interface Props {
  text: string;
}
</script>
<template>
  <button
    class="border-2 rounded-full py-1 px-5 text-sm border-primary text-secondary cursor-pointer hover:bg-primary-content active:scale-95 transition-all"
  >
    {{ props.text }}
  </button>
</template>