


<script>
import {searchForThing} from '../data/FetchData.js' 

export default{
    data() {
        return {
            url: null,
            title: null,
        }
    },
    methods: {
        async fetchUrl() {
            let response = await searchForThing('mössa')
            this.url = response.url
            this.title = response.description
        },
        checkDescription(description) {
            if (typeof description === 'object') {
                this.title = description['@value']
            } else if (description.length < 2) {
                //TODO: Gör bättre
                this.title = 'Missing information'
            } else {
                this.title = description
            }
        }
    },
    async mounted() {
        let response = await searchForThing('mössa')
        this.url = response.url
        this.description = response.description
        this.checkDescription(this.description)
    }
    

}

</script>
<template>
    <div><a @click="fetchUrl" :title="title"><img :src="this.url" alt=""></a></div>
</template>

