
<script>
import { searchForThing } from '../data/FetchData.js'

export default {

    props: ["search"],
    emits: ["stat", 'loads'],

    data() {
        return {
            url: null,
            title: null,
            loading: false,
            stats: 0,
        }
    },

    methods: {
        async fetchUrl(search) {
            this.loading = true
            try {
                let response = await searchForThing(search)
                while (response.url.includes("emuseumplus") || response.url.includes("catview") || response.url.includes("collections") || response.url.includes("f0bf98f")) {
                    response = await searchForThing(search)
                }
                this.loading = false
                this.url = response.url
                this.checkDescription(response.description)
                this.generateStats()
                this.emitStats()
            }
            catch (error) {
                alert(error.message)
            }
        },
        checkDescription(description) {
            if (typeof description === "object") {
                this.title = description["@value"];
            }
            else {
                this.title = description;
            }
        },
        generateStats() {
            if (this.url !== undefined) {
                let randomNumber = Math.floor(Math.random() * 20) + 5
                this.stats = ((Math.round(this.url.length / 3)) + randomNumber)
            }
        },
        emitStats() {
            this.$emit('stat', this.stats, this.search, this.url)
        },
        emitLoading() {
            this.$emit('loads')
        }
    },
    async mounted() {
        this.fetchUrl(this.search);
    },
}

</script>

<template>
    <div v-if="loading" class="pictureSize container">
        <div class="spinner-border"></div>
    </div>
    <div v-else><a @click="fetchUrl(search)" :title="title"><img id="gear" class="pictureSize border-on-hover"
                :src="this.url" @load="emitLoading()" alt=""></a></div>
</template>



<style>
.pictureSize {
    width: 125px;
    height: 125px;
}

@media (max-width: 768px) {
    .pictureSize {
        width: 100px;
        height: 100px;
    }
}

@media (max-width: 576px) {
    .pictureSize {
        width: 75px;
        height: 75px;
    }
}

.border-on-hover:hover {
    border: 5px solid transparent;
    transition: 0.1s;

}
</style>


