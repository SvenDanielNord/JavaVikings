<script>
import { RouterLink } from 'vue-router'
import { searchForThing } from '../data/FetchData';
import PictureBox from '../components/PictureBox.vue';


export default {
    components: {
    RouterLink,
    PictureBox
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
        <PictureBox />
        

    </div>
</template>