<script setup lang="ts">

const props = defineProps<Props>();
interface Props {
  dotArt: string;
}
</script>

<template>
<div class="w-52 h-52 border-2 border-primary rounded-2xl p-8 text-center cursor-pointer justify-center items-center">
{{ $props.dotArt }}
  </div>
</template>