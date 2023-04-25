


<script>
import {searchForThing} from '../data/FetchData.js' 

export default{
    data() {
        return {
            url: null,
        }
    },
    methods: {
        async fetchUrl() {
            let response = await searchForThing('mössa')
            this.url = response.url
        }
    },
    async mounted() {
        let response = await searchForThing('mössa')
        this.url = response.url
    }
    

}

</script>
<template>
    <div><a @click="fetchUrl"><img :src="this.url" alt=""></a></div>
</template>

