<script setup lang="ts">
import CardContentHomepage from '~/components/CardContentHomepage.vue';
</script>

<template>
  <div class="flex flex-col items-center w-full min-h-screen">
    <section class="relative w-full h-[500px] flex items-center justify-center overflow-hidden">

      <div class="relative z-10 text-center max-w-3xl px-10 animate-fade-in">
        <div class="relative inline-block">
          <span class="absolute -left-12 top-1/2 -translate-y-1/2 text-yellow-400 text-3xl font-light hidden md:block">
            <span class="block  w-4 h-4 border-yellow-400 mb-2">˗ˏˋ</span>
          </span>

          <h1 class="text-secondary text-lg md:text-xl font-mono leading-relaxed tracking-tight max-w-2xl">
            Encuentra kaomojis, separadores, decoradores de texto, dot art y todo lo que necesitas para darle magia a
            tus mensajes y posts
          </h1>

          <span class="absolute -right-12 top-1/2 -translate-y-1/2 text-yellow-400 text-3xl font-light hidden md:block">
            <span class="block  w-4 h-4 border-yellow-400 mb-2">ˎˊ˗</span>

          </span>
        </div>
      </div>

      <div class="absolute top-[15%] left-[10%] text-blue-400 text-lg font-mono animate-float-slow">
        (๑>ᴗ<)و </div>
          <div class="absolute top-[12%] right-[10%] text-pink-400 text-xl font-mono animate-float-slow-reverse">
            (/◕ヮ◕)/
          </div>
          <div class="absolute bottom-[20%] left-[20%] text-red-500 text-lg font-mono animate-float-slow"
            style="animation-delay: 1s;">
            (｡･ᴗー)✧
          </div>
          <div class="absolute bottom-[15%] right-[20%] text-green-400 text-lg font-mono animate-float-slow-reverse"
            style="animation-delay: 1.5s;">
            (❁´◡`❁)
          </div>

          <div class="absolute top-[25%] left-[40%] text-yellow-300 text-2xl animate-pulse-slow">✧</div>
          <div class="absolute bottom-[30%] left-[45%] text-yellow-300 text-2xl animate-pulse-slow delay-700">✧</div>
          <div class="absolute bottom-[40%] right-[10%] text-yellow-300 text-xl animate-pulse-slow">✧</div>

          <div class="absolute top-1/2 left-[5%] text-purple-300 text-xl animate-bounce-very-slow">♡</div>
          <div class="absolute bottom-[10%] right-[5%] text-purple-300 text-xl animate-bounce-very-slow delay-500">♡
          </div>
          <div class="absolute top-[35%] right-[25%] text-purple-200 text-lg animate-bounce-very-slow">♡</div>

          <div class="absolute top-10 left-[20%] w-3 h-3 border border-teal-400 rounded-full opacity-50"></div>
          <div class="absolute bottom-10 left-[5%] w-2 h-2 border border-green-400 rounded-full opacity-50"></div>
          <div class="absolute top-8 right-[30%] w-3 h-3 border border-lime-400 rounded-full opacity-50"></div>
          <div class="absolute bottom-4 left-[45%] w-2 h-2 border border-green-400 rounded-full opacity-50"></div>
    </section>

    <div class="w-full py-16 bg-primary-content text-center">
      <h2 class="text-lg font-bold text-primary mb-10 tracking-widest uppercase">¿Qué encontraré aquí?</h2>
      <div class="flex flex-wrap items-center justify-center gap-8 px-6 max-w-7xl mx-auto">
        <CardContentHomepage />
        <CardContentHomepage />
        <CardContentHomepage />
        <CardContentHomepage />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Entrada suave para todo el contenido */
.animate-fade-in {
  animation: fadeIn 1.5s ease-out;
}

/* Flotación muy lenta para los Kaomojis */
.animate-float-slow {
  animation: floatSlow 8s ease-in-out infinite;
}

.animate-float-slow-reverse {
  animation: floatSlowReverse 9s ease-in-out infinite;
}

/* Rebote casi imperceptible para corazones */
.animate-bounce-very-slow {
  animation: bounceSlow 10s ease-in-out infinite;
}

/* Pulso suave para las estrellas */
.animate-pulse-slow {
  animation: pulse 4s ease-in-out infinite;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes floatSlow {

  0%,
  100% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(10px, -20px);
  }
}

@keyframes floatSlowReverse {

  0%,
  100% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(-10px, -15px);
  }
}

@keyframes bounceSlow {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}

@keyframes pulse {

  0%,
  100% {
    opacity: 0.3;
    transform: scale(0.8);
  }

  50% {
    opacity: 1;
    transform: scale(1.1);
  }
}
</style>