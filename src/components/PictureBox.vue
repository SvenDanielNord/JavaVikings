


<script>
import { searchForThing } from '../data/FetchData.js'
import LoadSpin from './LoadSpin.vue'

export default {
    props: ["search"],
    data() {
        return {
            url: null,
            title: null,
            loading: false,
            stats: null,
        };
    },
    methods: {
        async fetchUrl(search) {
            this.loading = true;
            let response = await searchForThing(search);
            this.loading = false;
            while (response.url.includes("emuseumplus") || response.url.includes("collections")) {
                response = await searchForThing(search);
            }
            this.url = response.url;
            this.checkDescription(response.description);
            this.generateStats(response.description)
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
        generateStats(description) {
            if (description !== undefined) {
                this.stats += Math.round(description.length / 3);
                console.log(this.stats)
            }
        },
    },
    async mounted() {
        let response = this.fetchUrl(this.search);
        this.url = response.url;
        this.description = response.description;
        this.checkDescription(response.description);
        this.generateStats(response.description)
    },
    components: { LoadSpin }
}

</script>
<template>
    <div v-if="loading"><LoadSpin /></div>
    <div v-else><a @click="fetchUrl(search)" :title="title"><img :src="this.url" alt=""></a></div>
</template>

