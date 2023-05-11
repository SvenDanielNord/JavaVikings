<script>
import { getLocation } from '../data/FetchLocation.js'
import PictureBoxLoad from './PictureBoxLoad.vue'


export default {
    components: {
        PictureBoxLoad
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
        fight(characters) {
            console.log(characters.name, characters.gear)
            alert('Too bad, you lost sucker')
        },
        // combineStats() {
        //     this.totalStats = 0
        //     for (const item of this.items) {
        //         this.totalStats += item.itemStat
        //     }
    },
    mounted() {
        this.loadAllCharacters()
    }
}
</script>

<template>
    <div>
        <h1>Pick a worthy opponent!</h1>
        <div>

            <div class="flex">
                <ul>
                    <!-- TODO: Fixa key:ed value -->
                    <h2>Figther 1!</h2>
                    <fieldset class="bg">
                        <div>Chosen figther: {{ figtherOne.name }}</div>
                    </fieldset>
                    <li class="bg" @click="setFigtherOne(char)" v-for="char in characters">
                        {{ char.name }}
                    </li>
                </ul>
                <!-- bilder för figther1 i en pictureboxLoad -->
                <div>
                    <PictureBoxLoad :gearObject="figtherOne" />
                </div>
            </div>
            <div class="flex">
                <ul>
                    <!-- TODO: Fixa key:ed value -->
                    <h2>Figther 2!</h2>
                    <fieldset class="bg">
                        <div>Chosen figther: {{ figtherTwo.name }}</div>
                    </fieldset>
                    <li class="bg" @click="setFigtherTwo(char)" v-for="char in characters">
                        {{ char.name }}
                    </li>
                </ul>
                <!-- bilder för figther2 i en pictureboxLoad -->
                <div>
                    <PictureBoxLoad :gearObject="figtherTwo" />
                </div>
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

.flex {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;
}

.bg {
    background-color: aliceblue;
}

</style>