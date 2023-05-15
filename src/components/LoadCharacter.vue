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
    <div>
        <h1>Pick a worthy opponent!</h1>
        <div>

            <div class="flex">
                <ul>
                    <fieldset class="bg">
                        <div>Chosen figther: {{ figtherOne.name }}</div>
                    </fieldset>

                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Fighter 1
                        </button>
                        <ul class="dropdown-menu">
                            <li class="dropdown-item" @click="setFigtherOne(char)" v-for="char in characters"
                                :key="char.name">
                                {{ char.name }}
                            </li>
                        </ul>
                    </div>
                </ul>
                <div>
                    <PictureBoxLoad :gearObject="figtherOne" />
                </div>
            </div>



            <div class="flex">
                <ul>
                    <fieldset class="bg">
                        <div>Chosen figther: {{ figtherTwo.name }}</div>
                    </fieldset>

                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Fighter 2
                        </button>
                        <ul class="dropdown-menu">
                            <li class="dropdown-item" @click="setFigtherTwo(char)" v-for="char in characters"
                                :key="char.name">
                                {{ char.name }}
                            </li>
                        </ul>
                    </div>
                </ul>
                <div>
                    <PictureBoxLoad :gearObject="figtherTwo" />
                </div>
            </div>
        </div>
        <TimeToFight :characterOne="figtherOne" :characterTwo="figtherTwo" />
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
</style>