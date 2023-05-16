<script>
import TimeToFight from './TimeToFight.vue'
import PictureBoxLoad from './PictureBoxLoad.vue'

export default {
    components: {
        PictureBoxLoad, TimeToFight
    },
    data() {
        return {
            location: null,
            characters: [],
            figtherOne: [],
            figtherTwo: [],
        }
    },
    methods: {
        loadAllCharacters() {
            for (let i = 0; i < localStorage.length; i++) {
                const characterName = localStorage.key(i)
                const characterGear = localStorage.getItem(characterName)
                this.characters.push({ name: characterName, gear: JSON.parse(characterGear) })
            }
        },
        setFigtherOne(char) {
            this.figtherOne = char
        },
        setFigtherTwo(char) {
            this.figtherTwo = char
        },
    },
    mounted() {
        this.loadAllCharacters()
    }
}
</script>

<template>
    <div class="container text-center">

        <div class="row mt-3">
            <div class="dropdown col-12">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Fighter 1
                </button>
                <ul class="dropdown-menu">
                    <li class="dropdown-item" @click="setFigtherOne(char)" v-for="char in characters" :key="char.name">
                        {{ char.name }}
                    </li>
                </ul>
            </div>
        </div>

        <div class="row mt-3">
            <div class="col"></div>
            <div class="col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2">
                <PictureBoxLoad :gearObject="figtherOne" />
            </div>
            <div class="col"></div>
        </div>



        <div class="row mt-3">
            <div class="dropdown col-12">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Fighter 2
                </button>
                <ul class="dropdown-menu">
                    <li class="dropdown-item" @click="setFigtherTwo(char)" v-for="char in characters" :key="char.name">
                        {{ char.name }}
                    </li>
                </ul>
            </div>
        </div>

        <div class="row mt-3">
            <div class="col"></div>
            <div class="col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2">
                <PictureBoxLoad :gearObject="figtherTwo" />
            </div>
            <div class="col"></div>
        </div>

        <div class="row mt-3">
            <div class="col-12">
                <TimeToFight :characterOne="figtherOne" :characterTwo="figtherTwo" />
            </div>
        </div>

    </div>
</template>

<style scoped>
div {
    color: rgb(8, 8, 8);
    font-size: x-large;
}

li {
    list-style: none;
    cursor: pointer;
}

.mt-3 {
    margin-top: 3 !important;
}
</style>