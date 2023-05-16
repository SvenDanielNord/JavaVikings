<script>

export default {
    props: {
        gearObject: {
            type: Object
        },

    },
    data() {
        return {
            listOfUrls: [],
        };
    },
    watch: {
        gearObject() {
            this.updateUrlList()
        },
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
        <div class="card" v-if="listOfUrls.length > 0">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <img class="smallPictures" :src="listOfUrls[0]" alt="">
                    </div>
                </div>
                <div class="row">
                    <div class="col-4">
                        <img class="smallPictures" :src="listOfUrls[2]" alt="">
                    </div>
                    <div class="col-4">
                        <img class="smallPictures" :src="listOfUrls[1]" alt="">
                    </div>
                    <div class="col-4">
                        <img class="smallPictures" :src="listOfUrls[3]" alt="">
                    </div>
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

            <p class="card-text">{{ gearObject.name }}</p>

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

