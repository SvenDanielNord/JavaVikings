<script>
import { watch } from 'vue';

export default {
    props: {
        gearObject: {
            type: Object
        }
    },
    data() {
        return {
            listOfUrls: [],
        };
    },
    created() {
        watch(() => this.gearObject,
            () => {
                this.updateUrlList();
            }
        );
    },
    methods: {
        updateUrlList() {
            let newListOfUrls = []
            for (const item of this.gearObject.gear) {
                newListOfUrls.push(item.url)
            }
            this.listOfUrls = newListOfUrls
            newListOfUrls = []
        },
    },
}
</script>


<template>
    <div>
        <img class="smallPictures" :src="url" v-for="url of listOfUrls">
    </div>
</template>

<style>
.smallPictures {
    width: 40px;
    height: 40px;
    border: 1px solid black;
}
</style>

