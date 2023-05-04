


<script>
import { searchForThing } from '../data/FetchData.js'
import LoadSpin from './LoadSpin.vue'

export default {
    props: ["search"],
    data() {
        return {
            url: null,
            title: null,
            loading: false
        };
    },
    methods: {
        async fetchUrl(search) {
            this.loading = true;
            let response = await searchForThing(search);
            this.loading = false;
            while (response.url.includes("emuseumplus")) {
                response = await searchForThing(search);
            }
            this.url = response.url;
            this.checkDescription(response.description);
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
        }
    },
    async mounted() {
        let response = this.fetchUrl(this.search);
        this.url = response.url;
        this.description = response.description;
        this.checkDescription(response.description);
    },
    components: { LoadSpin }
}

</script>
<template>
    <div v-if="loading"><LoadSpin /></div>
    <div v-else><a @click="fetchUrl(search)" :title="title"><img :src="this.url" alt=""></a></div>
</template>

