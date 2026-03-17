<script setup lang="ts">
import FilterMenuBar from './FilterMenuBar.vue';
import SearchBar from './SearchBar.vue';

const props = defineProps<{
  description: string
  filters: string[]
}>()
</script>

<template>
    <h1 class="text-secondary">
      {{ props.description }}
    </h1>

    <SearchBar />

    <FilterMenuBar :filters="props.filters" />
</template>
