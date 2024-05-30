import { v4 as uuidv4 } from 'uuid';
import {size} from "lodash"
// TWEET donde vamos a guardar los tweets
import{TWEET} from "../utils/constants";
 
// hacemos un export para poderla usar en un componente
// Es bueno poer API para que cuando se use en un componente sepamos que viene de api
export function saveTweetsApi(tweet,nombre){
    const tweets = getTweetsApi();
    
    if ( size(tweets) === 0) {
        const tweetTemp = [
        {
            id: uuidv4(),
            tweet,
            nombre,
            createAt:  new Date(),
        },
    ];
    localStorage.setItem(TWEET, JSON.stringify(tweetTemp)); 
    } else {
    tweets.push({
        id: uuidv4(),
        tweet,
        nombre,
        createAt:  new Date(),
       })
       localStorage.setItem(TWEET, JSON.stringify(tweets));
    }
}

export function getTweetsApi(){
    const tweets = localStorage.getItem(TWEET);
    if(tweets){
        return JSON.parse(tweets);
    } 
    return[];
}