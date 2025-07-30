<template>
  <main class="h-full flex flex-col items-center text-center gap-5 py-5">
    <h1 class="text-secondary">
      Separadores decorativos para dividir y embellecer tu contenido. ¡Úsalos en
      tu web o blog!
    </h1>

    <form class="w-full flex flex-col items-center gap-2">
      <SearchBar text="Escribe para buscar separadores..." />
      <div class="flex items-center gap-2">
        <ActionButton text="Buscar" />
        <ActionButton text="Agregar nuevo" />
      </div>
    </form>

    <div>
      <div class="flex gap-3 pb-4">
        <NavButton text="Estrellas" to="/" />
        <NavButton text="Corazones" to="/" />
        <NavButton text="Primavera" to="/" />
        <NavButton text="Lazos" to="/" />
        <NavButton text="Animales" to="/" />
        <NavButton text="Todo!" to="/" />
      </div>

      <section>
        <div
          class="tooltip tooltip-primary"
          data-tip="como se ponen iconos aqui aa"
        >
          <button
            class="noto-sans text-secondary border-1 rounded-lg p-2 text-sm"
          >
            ❀・❀・❀・❀・❀
          </button>
        </div>
      </section>
    </div>
  </main>
</template>