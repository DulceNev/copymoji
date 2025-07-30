<script setup lang="ts">
const props = defineProps<Props>();
interface Props {
  text: string;
  to: string;
}
</script>

<template>
  <NuxtLink
    :to="props.to"
    active-class="bg-primary text-primary-content"
    class="text-primary text-sm font-semibold cursor-pointer py-1 px-8 rounded-full hover:bg-primary hover:text-primary-content active:scale-95 transition-all"
  >
    {{ props.text }}
  </NuxtLink>
</template>