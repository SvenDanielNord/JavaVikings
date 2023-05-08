


<script>
import { searchForThing } from '../data/FetchData.js'
import LoadSpin from './LoadSpin.vue'

export default {
    components: { LoadSpin },
    props: ["search"],
    emits: ["stat"],

    data() {
        return {
            url: null,
            title: null,
            loading: false,
            stats: 0,
        };
    },

    methods: {
        async fetchUrl(search) {
            this.loading = true
            let response = await searchForThing(search)
            this.loading = false
            while (response.url.includes("emuseumplus") || response.url.includes("collections")) {
                response = await searchForThing(search)
            }
            this.url = response.url
            this.checkDescription(response.description)
            this.generateStats()
            // console.log(this.search + " har denna url: " + this.url)
            this.emitStats()
        },
        checkDescription(description) {
            if (typeof description === "object") {
                this.title = description["@value"];
                // } else if (description.length < 2) {
                //     //TODO: Gör bättre
                //     this.title = 'Missing information'
            }
            else {
                this.title = description;
            }
        },
        generateStats() {
            if (this.url !== undefined) {
                let randomNumber = Math.floor(Math.random() * 20) + 5
                this.stats = ((Math.round(this.url.length / 3)) + randomNumber)
                // console.log(this.search + " have " + this.stats + " stats.")
            }
        },
        emitStats() {
            this.$emit('stat', this.stats, this.search)
        },
    },

    async mounted() {
        let response = this.fetchUrl(this.search);
        this.url = response.url;
        this.title = response.description;
        this.checkDescription(response.description); //Ta bort parameter och hämta från title i data istället?
        this.generateStats()
    },
}

</script>
<template>
    <div v-if="loading">
        <LoadSpin />
    </div>
    <div v-else><a @click="fetchUrl(search)" :title="title"><img :src="this.url" alt=""></a></div>
</template>

