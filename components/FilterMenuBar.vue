<script setup lang="ts">
const props = defineProps<{
  filters: string[]
}>()

const { activeFilter, setFilter, clearFilters } = useContentStore()
</script>

<template>
    <div class="flex gap-3 pb-4 flex-wrap justify-center">
        <button
          v-for="filter in props.filters"
          :key="filter"
          class="text-primary text-base font-semibold cursor-pointer py-1 px-6 rounded-full active:scale-95 transition-all capitalize"
          :class="activeFilter === filter.toLowerCase() ? 'bg-primary text-primary-content' : 'hover:bg-primary hover:text-primary-content'"
          @click="setFilter(filter.toLowerCase())"
        >
          {{ filter }}
        </button>
        <button
          class="text-primary text-base font-semibold cursor-pointer py-1 px-6 rounded-full active:scale-95 transition-all"
          :class="activeFilter === '' ? 'bg-primary text-primary-content' : 'hover:bg-primary hover:text-primary-content'"
          @click="clearFilters"
        >
          Todo!
        </button>
    </div>
</template>
