<script setup lang="ts">
import CardContentHomepage from '~/components/CardContentHomepage.vue';
</script>

<template>
  <div class="flex flex-col items-center w-full min-h-screen">
    <section class="bg-base-100 relative w-full h-[500px] flex items-center justify-center overflow-hidden">

      <div class="relative z-10 text-center max-w-3xl px-10 animate-fade-in ">
        <div class="relative inline-block">
          <span class="absolute -left-12 top-1/2 -translate-y-1/2 text-primary text-3xl font-light hidden md:block">
            <span class="block w-4 h-4 mb-2">˗ˏˋ</span>
          </span>

          <h1 class="text-secondary text-xl md:text-2xl font-mono leading-relaxed tracking-tight max-w-2xl">
            Encuentra kaomojis, separadores, decoradores de texto, dot art y todo lo que necesitas para darle magia a
            tus mensajes y posts
          </h1>

          <span class="absolute -right-12 top-1/2 -translate-y-1/2 text-primary text-3xl font-light hidden md:block">
            <span class="block w-4 h-4 mb-2">ˎˊ˗</span>
          </span>
        </div>
      </div>

      <!-- Kaomojis flotantes -->
      <div class="absolute top-[10%] left-[8%] text-primary/70 text-2xl md:text-3xl font-mono animate-float-slow">
        (๑>ᴗ<)و
      </div>
      <div class="absolute top-[8%] right-[8%] text-primary/60 text-2xl md:text-3xl font-mono animate-float-slow-reverse">
        (/◕ヮ◕)/
      </div>
      <div class="absolute bottom-[18%] left-[15%] text-secondary/50 text-2xl md:text-3xl font-mono animate-float-slow"
        style="animation-delay: 1s;">
        (｡･ᴗー)✧
      </div>
      <div class="absolute bottom-[12%] right-[15%] text-primary/65 text-2xl md:text-3xl font-mono animate-float-slow-reverse"
        style="animation-delay: 1.5s;">
        (❁´◡`❁)
      </div>
      <div class="absolute top-[40%] left-[3%] text-secondary/40 text-xl md:text-2xl font-mono animate-float-slow"
        style="animation-delay: 2s;">
        (˶ᵔ ᵕ ᵔ˶)
      </div>
      <div class="absolute bottom-[35%] right-[5%] text-primary/55 text-xl md:text-2xl font-mono animate-float-slow-reverse"
        style="animation-delay: 0.5s;">
        (ﾉ´ヮ`)ﾉ*:・゚✧
      </div>

      <!-- Estrellas -->
      <div class="absolute top-[20%] left-[35%] text-primary/50 text-3xl animate-pulse-slow">✧</div>
      <div class="absolute bottom-[25%] left-[50%] text-primary/40 text-4xl animate-pulse-slow" style="animation-delay: 0.7s;">✦</div>
      <div class="absolute bottom-[40%] right-[12%] text-primary/50 text-3xl animate-pulse-slow" style="animation-delay: 1.2s;">✧</div>
      <div class="absolute top-[55%] left-[12%] text-primary/35 text-2xl animate-pulse-slow" style="animation-delay: 0.3s;">⋆</div>
      <div class="absolute top-[8%] left-[45%] text-primary/30 text-2xl animate-pulse-slow" style="animation-delay: 1.8s;">✧</div>

      <!-- Corazones -->
      <div class="absolute top-[45%] left-[5%] text-primary/60 text-3xl animate-bounce-very-slow">♡</div>
      <div class="absolute bottom-[8%] right-[8%] text-primary/50 text-3xl animate-bounce-very-slow" style="animation-delay: 0.5s;">♡</div>
      <div class="absolute top-[30%] right-[22%] text-primary/40 text-2xl animate-bounce-very-slow" style="animation-delay: 1s;">♡</div>
      <div class="absolute bottom-[5%] left-[40%] text-primary/35 text-2xl animate-bounce-very-slow" style="animation-delay: 1.5s;">♡</div>

      <!-- Bolitas decorativas -->
      <div class="absolute top-12 left-[22%] w-4 h-4 bg-primary/30 rounded-full animate-pulse-slow"></div>
      <div class="absolute bottom-12 left-[6%] w-3 h-3 bg-primary/20 rounded-full animate-pulse-slow" style="animation-delay: 0.5s;"></div>
      <div class="absolute top-10 right-[28%] w-4 h-4 bg-primary/25 rounded-full animate-pulse-slow" style="animation-delay: 1s;"></div>
      <div class="absolute bottom-6 left-[50%] w-3 h-3 bg-primary/20 rounded-full animate-pulse-slow" style="animation-delay: 1.5s;"></div>
      <div class="absolute top-[60%] right-[3%] w-3 h-3 bg-primary/25 rounded-full animate-pulse-slow" style="animation-delay: 0.8s;"></div>
    </section>

    <div class="w-full py-16 bg-primary-content text-center">
      <h2 class="text-xl font-bold text-primary mb-10 tracking-widest uppercase">¿Qué encontraré aquí?</h2>
      <div class="flex flex-wrap items-center justify-center gap-8 px-6 max-w-7xl mx-auto">
        <CardContentHomepage title="Kaomojis"
          description="Emoticones de estilo japonés que usan caracteres para crear expresiones adorables adecuados para cada situación."
          to="/kaomojis" image="/img/gato-cute.jpg" />
        <CardContentHomepage title="Separadores"
          description="Líneas decorativas diseñadas para dividir secciones en tus mensajes y darles una estructura visual limpia y bonita."
          to="/separadores" image="/img/gato-cute.jpg" />
        <CardContentHomepage title="Simbolos"
          description="Pequeños elementos y caracteres especiales para resaltar palabras o darle un toque único a tus nombres y perfiles."
          to="/simbolos" image="/img/gato-cute.jpg" />
        <CardContentHomepage title="Dot Art"
          description="Mini ilustraciones y marcos minimalistas en estilo pixel. Perfectos para tus fotos o tus mensajes."
          to="/dot-art" image="/img/gato-cute.jpg" />
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