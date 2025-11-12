
<template>
  <div data-theme="Pink" class="min-h-screen flex flex-col">
    <!-- 🌟 HEADER -->
    <header class="bg-primary-content flex justify-evenly items-center h-20">
      <NavButton text="Kaomojis" to="/" />

      <NavButton text="Separadores" to="/separadores" />
      <NavButton text="Simbolos" to="/simbolos" />
      <NuxtLink
        to="/"
        class="h-20 w-20 mt-5 bg-white rounded-tl-full rounded-tr-full flex justify-center items-center text-center text-primary"
      >
        <p class="font-bold">
          (˶owo˶)
          Copymoji
        </p>
      </NuxtLink>
      <!-- <div class="h-12 w-12 bg-white rounded-tl-full rounded-tr-full"></div> -->
      <NavButton text="Dot Art" to="/dot-art" />
      <NavButton text="Personas" to="/buscar-personas" />
      <NavButton text="Mi Perfil" to="/mi-perfil" />
    </header>

    <!-- 📄 CONTENIDO DE LA PÁGINA -->
    <main class="h-screen">
      <slot />
    </main>

    <!-- 🦶 FOOTER -->
    <footer class="text-center p-4 text-sm bg-primary-content text-gray-400">
      Diseñado con amor por Dulce Nevarez 2025.
    </footer>
  </div>
</template>