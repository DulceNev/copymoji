<script setup>
</script>
<template>
  <main class="h-full flex flex-col items-center text-center gap-5 py-5">
    <h1 class="text-secondary">
      ¡Encuentra y copia adorables emoticones para hacer tus mensajes más
      lindos!
    </h1>

    <form class="w-full flex flex-col items-center gap-2">
      <SearchBar text="Escribe para buscar kaomojis..." />
      <div class="flex items-center gap-2">
        <ActionButton text="Buscar" />
        <ActionButton text="Agregar nuevo" />
      </div>
    </form>

    <div>
      <div class="flex gap-3 pb-4">
        <NavButton text="Positivo" to="/" />
        <NavButton text="Negativo" to="/" />
        <NavButton text="Animales" to="/" />
        <NavButton text="Amor" to="/" />
        <NavButton text="Todo!" to="/" />
      </div>

      <section>
        <button
          class="noto-sans text-secondary border-1 rounded-lg p-2 text-sm"
        >
          (˶>⩊<˶)
        </button>
      </section>
    </div>
  </main>
</template>