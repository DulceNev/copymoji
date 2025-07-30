<script setup lang="ts">
import ProfileCard from "~/components/ProfileCard.vue";
</script>

<template>
  <div class="relative w-full">
    <img
      src="../public/img/foto-portada.jpg"
      alt="Foto de portada"
      class="w-full h-26 object-cover absolute top-0 left-0 z-0"
    />

    <div
      class="relative z-10 flex flex-col items-center text-center gap-5 py-5"
    >
      <ProfileCard />

      <div>
        <div class="flex gap-3 pb-4">
          <NavButton text="Mis creaciones" to="/" />
          <NavButton text="Mis guardados" to="/" />
          <NavButton text="Perfiles favoritos" to="/" />
        </div>

        <section>
          <div
            class="tooltip tooltip-primary"
            data-tip="como se ponen iconos aqui aa"
          >
            <button
              class="noto-sans text-secondary border-1 rounded-lg p-2 text-sm"
            >
              ⋆｡‧˚ʚ 🍓 ɞ˚‧｡⋆
            </button>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>