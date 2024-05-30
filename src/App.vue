<template>
  <Menu :abrirTweets="abrirTweets" :cerrarTweets="cerrarTweets"  />
  <tweetForm :cerrarTweets="cerrarTweets" :abrirTweets="abrirTweets" :reloadTweets="reloadTweets" />
  <tweetsList :tweets="tweets" />
  
</template>

<script>
import {ref} from "vue";
import Menu from './components/Menu.vue'
import tweetForm from "./components/tweetForm.vue"
import useFromTweets from "./hooks/useFormTweet"
import tweetsList from "./components/tweetsList.vue"
import {getTweetsApi} from "./api/tweet"


 export default {
   components:{
     Menu,
     tweetForm,
     tweetsList,
   },
   

   setup(){
    let tweets = ref(getTweetsApi().reverse());
    const reloadTweets = ()=>{
      tweets.value = getTweetsApi().reverse();
    }
      // operador spread
    return{
      ...useFromTweets(), 
      tweets,
      reloadTweets,
    }
   },
 }
</script>


<style lang="scss">

</style>
