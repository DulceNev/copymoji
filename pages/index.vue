<script setup lang="ts">
import type CardContentHomepageVue from '~/components/CardContentHomepage.vue';
</script>

<template>
  <div class="flex flex-col items-center w-full min-h-screen bg-white">
    <!-- Cover Section -->
    <div class="relative w-full py-20 px-4 flex flex-col items-center justify-center overflow-hidden">
      <!-- Decorative Elements -->
      <!-- Top Left -->
      <div class="absolute top-10 left-10 flex flex-col items-center gap-2">
        <span class="text-yellow-300 text-2xl">✧</span>


        <span class="text-blue-400 text-2xl">(ҩ•̀ - •́)و✧</span>
      </div>

      <!-- Top Center -->
      <div class="absolute top-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
        <span class="text-yellow-300 text-2xl">✧</span>
      </div>

      <!-- Top Right -->
      <div class="absolute top-10 right-10 flex flex-col items-center gap-2">
        <span class="text-purple-400 text-2xl">♡</span>
        <span class="text-pink-400 text-2xl">ꉂꉂ(ᵔᗜᵔ*)</span>
      </div>

      <!-- Middle Left -->
      <div class="absolute left-20 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-2">
        <span class="text-purple-400 text-2xl">♡</span>
        <span class="text-yellow-300 text-2xl">✧</span>
      </div>

      <!-- Middle Right -->
      <div class="absolute right-20 top-1/2 transform -translate-y-1/2">
        <span class="text-yellow-300 text-2xl">✧</span>
      </div>

      <!-- Bottom Left -->
      <div class="absolute bottom-20 left-10 flex flex-col items-center gap-2">
        <span class="text-red-400 text-2xl">- ̗̀ ෆ( ˶’ᵕ’˶)ෆ ̖́-</span>
      </div>

      <!-- Bottom Center -->
      <div class="absolute bottom-16 left-1/2 transform -translate-x-1/2">
        <span class="text-yellow-300 text-2xl">✧</span>
      </div>

      <!-- Bottom Right -->
      <div class="absolute bottom-10 right-10 flex flex-col items-end gap-2">
        <div class="flex gap-2">
          <span class="text-green-400 text-2xl">ꕤᴗ ᴗ)⁾⁾♡</span>
          <span class="text-purple-400 text-2xl">♡</span>
        </div>
        <div class="flex gap-2">
          <span class="text-yellow-300 text-2xl">✧</span>
        </div>
      </div>

      <!-- Main Text -->
      <div class="relative z-10 max-w-2xl mx-auto text-center px-4">
        <div class="relative py-8">
          <div
            class="absolute left-0 right-0 top-1/2 h-0.5 bg-orange-400 border-t-2 border-b-2 border-dashed border-yellow-400">
          </div>
          <div
            class="absolute left-0 right-0 bottom-1/2 h-0.5 bg-orange-400 border-t-2 border-b-2 border-dashed border-yellow-400">
          </div>
          <h1 class="text-xl md:text-xl font-bold text-secondary relative bg-white px-8 py-4 inline-block">
            Encuentra kaomojis, separadores, decoradores de texto, dot art y todo lo que necesitas para darle magia a
            tus mensajes y posts
          </h1>
        </div>
      </div>
    </div>

    <!-- Rest of the content -->
    <div class="w-full py-10 bg-primary-content text-center">
      <h2 class="text-lg font-bold text-primary mb-6">¿Qué encontraré aquí?</h2>
      <div class="flex flex-wrap items-center justify-center gap-6 px-4">
        <CardContentHomepage />
        <CardContentHomepage />
        <CardContentHomepage />
        <CardContentHomepage />
      </div>
    </div>
  </div>
</template>