<template>
  <div data-theme="Pink" class="min-h-screen flex flex-col">
    <!-- 🌟 HEADER -->
    <header class="bg-primary-content flex justify-evenly items-center h-20">
      <NavButton text="Kaomojis" to="/kaomojis" />

      <NavButton text="Separadores" to="/separadores" />
      <NuxtLink to="/"
        class="h-20 w-20 mt-5 bg-white rounded-tl-full rounded-tr-full flex justify-center items-center text-center text-primary">
        <p class="font-bold">
          (˶owo˶)
          Copymoji
        </p>
      </NuxtLink>

      <NavButton text="Simbolos" to="/simbolos" />

      <button
        class=" text-primary text-base font-semibold cursor-pointer py-1 px-8 rounded-full hover:bg-primary hover:text-primary-content active:scale-95 transition-all"
        popovertarget="popover-1" style="anchor-name:--anchor-1">
        Menu
      </button>
      <div id="popover-1" class="dropdown rounded-box bg-base-100 shadow-sm border-1 border-primary overflow-hidden"
        popover style="position-anchor:--anchor-1">
        <ul class="menu w-52 space-y-1">
          <li>
            <NavButton text="Dot Art" to="/dot-art" />
          </li>
          <li>
            <NavButton text="Personas" to="/buscar-personas" />
          </li>
          <li>
            <NavButton text="Mi Perfil" to="/mi-perfil" />
          </li>
        </ul>
        <div class="border-t border-primary/20 mx-2">
          <ThemeSelector />
        </div>
      </div>
    </header>

    <!-- 📄 CONTENIDO DE LA PÁGINA -->
    <main class="h-screen">
      <slot />
    </main>


  </div>
</template>