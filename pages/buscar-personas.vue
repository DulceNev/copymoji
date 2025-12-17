<script setup lang="ts">
import ProfileCard from '~/components/ProfileCard.vue';
import SearchBar from '~/components/SearchBar.vue';

</script>

<template>
  <main class="h-full flex flex-col items-center text-center gap-5 py-5">

    <SearchBar placeholder-search="..." />

    <section class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-3">

      <ProfileCard />
      <ProfileCard />
      <ProfileCard />

    </section>

  </main>
</template>