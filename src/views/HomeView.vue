<script>
import { RouterLink } from 'vue-router'
import { searchForThing } from '../data/FetchData';


export default {
    components: {
        RouterLink
    },
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
    <div>
        <p>Hello!</p>
        <RouterLink to="/about">About</RouterLink>
        <button @click="fetchUrl">Hämta ny bild länk</button>
        {{ url }}
    </div>
</template>