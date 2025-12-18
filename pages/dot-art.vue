<script setup lang="ts">

</script>

<template>
    <div class="flex flex-col items-center justify-center mt-5 ">
    <h1 class="text-xl font-bold text-primary">Dot Art Generator</h1>
    <p class="text-secondary text-xs w-[50%] text-center">NOTA: Para obtener mejores resultados en el dot art, se recomienda usar imágenes simples, con pocos detalles, alto contraste y formas claras.
Imágenes muy complejas o con muchos colores pueden perder detalle al convertirse en puntos.</p>
    </div>

 <div class="flex flex-col items-center justify-center">
  <DotArtGenarator/>
   <ActionButton text="Agregar DotArt" class="mt-5 mb-5"/>
 </div>

 <div>
    <p>Galeria de Dot Art</p>
 </div>
 

</template>