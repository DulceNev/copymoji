<template>
  <main class="h-full flex flex-col items-center text-center gap-5 py-5">
    <h1 class="text-secondary">
      Símbolos decorativos para resaltar y dar un toque único a tu contenido.
      <br />
      Ideales para usar en títulos o textos
    </h1>

    <form class="w-full flex flex-col items-center gap-2">
      <SearchBar text="Escribe para buscar simbolos..." />
      <div class="flex items-center gap-2">
        <ActionButton text="Buscar" />
        <ActionButton text="Agregar nuevo" />
      </div>
    </form>

    <div>
      <div class="flex gap-3 pb-4">
        <NavButton text="Colores" to="/" />
        <NavButton text="Primavera" to="/" />
        <NavButton text="Fruta" to="/" />
        <NavButton text="Océano" to="/" />
        <NavButton text="Blanco y negro!" to="/" />
        <NavButton text="Todo!" to="/" />
      </div>

      <section>
        <div class="flex gap-3 justify-center">
          <button
            class="noto-sans text-secondary border-1 rounded-lg p-2 text-sm"
          >
            ‧₊ ᵎᵎ 🍒 ⋅ ˚✮
          </button>

          <button
            class="noto-sans text-secondary border-1 rounded-lg p-2 text-sm"
          >
            ⋆.˚🦋༘⋆
          </button>
        </div>
      </section>
    </div>
  </main>
</template>