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
    <div class="container" v-if="listOfUrls.length > 0">

        <div class="row">
            <div class="col-12">
                <img class="smallPictures" :src="listOfUrls[0]" alt="">
            </div>
        </div>
        <div class="row">
            <div class="col-3"></div>
            <div class="col-2 text-end">
                <img class="smallPictures" :src="listOfUrls[2]" alt="">
            </div>
            <div class="col-2">
                <img class="smallPictures" :src="listOfUrls[1]" alt="">
            </div>
            <div class="col-2 text-start">
                <img class="smallPictures" :src="listOfUrls[3]" alt="">
            </div>
            <div class="col-3"></div>
        </div>
        <div class="row">
            <div class="col-12">
                <img class="smallPictures" :src="listOfUrls[4]" alt="">
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <img class="smallPictures" :src="listOfUrls[5]" alt="">
            </div>
        </div>

    </div>
</template>

<style>
.smallPictures {
    width: 40px;
    height: 40px;
    border: 1px solid black;
}
</style>

