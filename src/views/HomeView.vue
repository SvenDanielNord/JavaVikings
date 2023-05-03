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
        
        <h1>JavaVikings</h1>
        <RouterLink to="/about">About</RouterLink>
        <button @click="fetchUrl">Generera gear</button>
        <PictureBox />
        

    </div>
</template>

<style>
body{
    display: flex;
}

</style>