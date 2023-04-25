<script>
import {searchForThing} from '../data/FetchData.js' 

export default{
    data(){
        return {
            picture: searchForThing.url,
            
        }
    },
    

}

</script>
<template>
    <p>hej</p>
    <div><img src="${picture}" alt=""></div>
</template>
