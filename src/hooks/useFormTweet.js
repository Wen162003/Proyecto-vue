import {ref} from "vue";

export default function useFormTweets (){
    const cerrarTweets = ref(false);

    const abrirTweets = () => {
        cerrarTweets.value = !cerrarTweets.value
    };

    return {
        cerrarTweets,
        abrirTweets,
    }
}

