<script setup lang="ts">

</script>

<template>
  <main class="h-full flex flex-col items-center text-center gap-5 py-5 ">
    <h1 class="text-secondary">
      El Dot Art es arte hecho con puntos, donde cada carácter forma una imagen o diseño único
    </h1>

  
  <label for="file-upload" 
         class="
           border-2 border-primary rounded-2xl p-8 
           text-center 
           cursor-pointer 
           hover:bg-primary/20 transition duration-300
         "
  >

//icono
    <p class="mt-4 text-xl font-medium text-secondary uppercase tracking-wider">
      subir imagen
    </p>

    <p class="text-sm text-secondary mt-1">
      selecciona una imagen para convertir
    </p>

    <input id="file-upload" name="file-upload" type="file" class="sr-only" accept="image/*">
    
  </label>

  </main>
</template>