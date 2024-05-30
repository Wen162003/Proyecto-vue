<template>
                                    <!-- clase dinamica -->
  <div class="tweet-form container"  :class="{ open: cerrarTweets }">
    <form @submit.prevent="enviarTweets">
      <input class="form-control" placeholder="Tu nombre" v-model="nombre" />
      <textarea
        class="form-control"
        rows="3"
        placeholder="Escribe tu tweet"
        v-model="tweet"
      ></textarea>
      <button type="submit" class="btn btn-primary">Enviar tweet</button>
    </form>
  </div>
</template>

<script>
 import { ref } from "vue";
 import {saveTweetsApi} from "../api/tweet"

  export default{
    props:{
      cerrarTweets: Boolean,
      reloadTweets: Function,
      abrirTweets: Function,
      
    },
    setup(props){
      let nombre = ref("")
      let tweet = ref("")

       const enviarTweets = () =>{
        if(!tweet.value || !nombre.value) return;
        saveTweetsApi(tweet.value, nombre.value,)
        tweet.value = "";
        nombre.value = "";
        props.reloadTweets();
        props.cerrarTweets(); 
       };

       return{
         enviarTweets,
         nombre,
         tweet,
       }
    },
  };
</script>

<style scoped>
   .tweet-form{
      margin-top: 20px;
      height: 0;
      overflow: hidden;
   }
   .tweet-form.open{
    height: auto;
   }
   
   .form{
    margin-bottom: 50px;
   }

   .input{
    margin-bottom: 10px;
    background-color: blueviolet;
   }
   button{
    width: 100%;
    margin-bottom: 10px;
   }

</style>