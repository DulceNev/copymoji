<script setup lang="ts">
import ProfileCard from '~/components/ProfileCard.vue';
import SearchBar from '~/components/SearchBar.vue';

</script>

<template>
  <main class="h-full flex flex-col items-center text-center gap-5 py-5">
    <h1 class="text-secondary">
      ¡Encuentra a tus amigos o busca nuevos para compartir sus creaciones!
    </h1>
    <form class="w-full flex flex-col items-center gap-2">
      <SearchBar text="Escribe para buscar kaomojis..." />
      <div class="flex items-center gap-2">
        <ActionButton text="Buscar" />
      </div>
    </form>

    <section class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-3">
    
      <ProfileCard/>
      <ProfileCard/>
      <ProfileCard/>
      <ProfileCard/>
      <ProfileCard/>

    </section>

  </main>
</template>