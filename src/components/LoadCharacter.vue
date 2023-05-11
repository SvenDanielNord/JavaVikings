<script>
import TimeToFight from './TimeToFight.vue'

export default {
    components: {
        TimeToFight
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
            console.log(this.characters)
        },
        setFigtherOne(char) {
            this.figtherOne = char

        },
        setFigtherTwo(char) {
            this.figtherTwo = char
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
                    <li class="bg" @click="setFigtherOne(char)" v-for="char in characters" :key="char.name">
                        {{ char.name }}
                    </li>
                    <!-- bilder för figther1 i en pictureboxLoad -->
                </ul>
            </div>
            <div class="flex">
                <ul>
                    <!-- TODO: Fixa key:ed value -->
                    <h2>Figther 2!</h2>
                    <fieldset class="bg">
                        <div>Chosen figther: {{ figtherTwo.name }}</div>
                    </fieldset>
                    <li class="bg" @click="setFigtherTwo(char)" v-for="char in characters" :key="char.name">
                        {{ char.name }}
                    </li>

                    <!-- bilder för figther2 i en pictureboxLoad -->
                </ul>
            </div>
        </div>
        <TimeToFight :characterOne="figtherOne" :characterTwo="figtherTwo"/>
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
    justify-content: start;
}

.bg {
    background-color: aliceblue;
}
</style>