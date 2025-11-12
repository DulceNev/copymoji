<script setup lang="ts">
const props = defineProps<Props>();
interface Props {
  text: string;
}
</script>
<template>
  <label
    class="input rounded-full border-2 border-primary text-primary w-2/3 lg:w-1/3"
  >
    <svg
      class="h-[1em] opacity-50 text-primary"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g
        stroke-linejoin="round"
        stroke-linecap="round"
        stroke-width="2.5"
        fill="none"
        stroke="currentColor"
      >
        <circle cx="11" cy="11" r="8">a</circle>
        <path d="m21 21-4.3-4.3">a</path>
      </g>
    </svg>
    <input type="search" class="grow" :placeholder="props.text" />
  </label>
</template>