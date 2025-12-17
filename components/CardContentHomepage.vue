<script setup lang="ts">
const props = defineProps<Props>();
interface Props {
    to: string;
    description: string
    title: string
    image: string;
}
</script>

<template>
    <div class="group">
        <div class="w-60 h-[25rem] p-5 text-center flex flex-col items-center justify-between bg-white rounded-xl">

            <div class="overflow-hidden rounded-full size-40 border-4 border-white shadow-sm flex-shrink-0">
                <img :src="props.image" :alt="props.title"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
            </div>

            <div class="flex-1 flex flex-col justify-center py-4 w-full">
                <h3 class="text-lg font-bold text-primary mb-2">{{ props.title }}</h3>

                <p class="text-secondary text-sm line-clamp-5">
                    {{ props.description }}
                </p>
            </div>

            <NuxtLink :to="props.to" active-class="bg-primary text-primary-content"
                class="mt-auto text-primary text-sm font-semibold cursor-pointer py-2 px-8 rounded-full border-2 border-primary hover:bg-primary hover:text-primary-content active:scale-95 transition-all w-fit">
                Quiero ir aquí!
            </NuxtLink>

        </div>
    </div>
</template>