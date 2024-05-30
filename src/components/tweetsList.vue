<template>
  <div class="container">
    <h1 class="text-center">Lista de Tweets...</h1>
    <p>No hay tweets</p>
    <div class="tweet" v-for="tweet in tweets" :key="tweet.id">
        <p class="tweet_titulo">{{ tweet.nombre}}</p>
        <p class="tweet_text">{{ tweet.tweet }}</p>
        <span>{{fromatDate(tweet.createAt)}}</span>
        <!-- <close /> -->
    </div>
  </div>
</template>

<script>
import moment from'moment';
import "moment/locale/es"
// import {close} from "./icons/index"

  export default {
    props:{
        tweets:Array,
    },
    // components:{
    //   close,
    // },
    setup(props) {
        const fromatDate = (date) => {
            return moment(date).fromNow("");
        }
        
        return{
      fromatDate,
        }
    }
  }
</script>
<style scoped>
   .tweet{
    position: relative;
    border: 1px solid gray;
    padding: 20px;
    margin-bottom:  20px;
    display: flex;
    justify-content:space-between;
    align-items: center;
   }

   p{
    margin: 0;
   }
   .tweet_titulo{
    position:absolute;
    background-color: white;
    top: 0px;
    left: 10px;
    font-weight: bold;
   }
   .tweet_text{
    color: gray;
   }

   span{
    position: absolute;
    right: 10px;
    font-size: 12px;
    color: gray;
    background-color: white;
    padding: 0 20px;
    border: 1px solid gray;

   }

</style>