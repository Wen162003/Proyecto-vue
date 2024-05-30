<script>
 export default {
   props:{
      cerrarTweets: Boolean,
      abrirTweets:Function,
   }
 }
</script>

<template>
   <nav class="navbar navbar-dark bg-dark">
     <div class="container">
        <span class="navbar-brand">
          Simulador de tweets
        </span>
        <button 
        class="btn btn-success pl-4 pr-4"
        :class="{ 'btn-success': !cerrarTweets, 'btn-danger':cerrarTweets }"
         @click="abrirTweets"
         >
          {{ !cerrarTweets ? "nuevo tweet" : "cerrar tweet" }}
        </button>
     </div>
   </nav>
</template>

<style lang="scss">

</style>
