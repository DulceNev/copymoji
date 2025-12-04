<script setup lang="ts">
import { Icon } from '#components';
import ActionButton from '~/components/ActionButton.vue';
import DotArtItem from '~/components/DotArtItem.vue';
</script>

<template>
  <main class="h-full flex flex-col items-center text-center gap-5 py-5 ">
    <h1 class="text-secondary">
      El Dot Art es arte hecho con puntos, donde cada carácter forma una imagen o diseño único
    </h1>

  
  <section class="flex gap-3">

    <div class="flex flex-col gap-3">
  <label for="file-upload" class="w-80 border-2 border-dashed border-primary rounded-2xl p-8 text-center cursor-pointer hover:bg-primary/10 transition duration-300">

    <Icon  name="pixelarticons:download" class="text-secondary text-4xl"  />
    <p class=" text-xl font-medium text-secondary uppercase tracking-wider">
      subir imagen
    </p>

    <p class="text-sm text-secondary">
      selecciona una imagen para convertir
    </p>

    <input id="file-upload" name="file-upload" type="file" class="sr-only" accept="image/*">
    
  </label>

  <div class="w-80 border-2 border-dashed border-primary rounded-2xl p-8 text-center duration-300 text-secondary">
      <div class="flex gap-1  items-center justify-center">
      <Icon name="pixelarticons:command" class="text-lg"/>
      <p class="">Configuración</p>
      </div>

      <p class="text-sm">Controles de resolución(Num)</p>
      <input type="range" min="0" max="100" value="30" class="range range-xs text-primary" />

      <div class="flex gap-1 justify-start items-center mt-2">
      <input type="checkbox" class="checkbox checkbox-primary checkbox-xs" />
      <p class="text-xs">Invertir blanco y negro</p>
      </div>
    </div>

    </div>

    <div class="w-96 border-2 border-dashed border-primary rounded-2xl p-8 text-center duration-300 text-secondary flex justify-center items-center">
      <p>Sube una imagen para generar 
tu propio DotArt! 🌸</p>
    </div>

  
  </section>

  <ActionButton text="Agregar" class="w-2xs"/>

  <section class="text-secondary">

  <p>Galeria de DotArt</p>

  <div class="grid grid-cols-5 gap-3 mt-2">

  <DotArtItem dot-art="puntitos"/>
  <DotArtItem dot-art="puntitos"/>
  <DotArtItem dot-art="puntitos"/>
  <DotArtItem dot-art="puntitos"/>
  <DotArtItem dot-art="puntitos"/>

  </div>
  </section>

  </main>
</template>