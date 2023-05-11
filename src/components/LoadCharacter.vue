<script>
import { getLocation } from '../data/FetchLocation.js'

export default {
    data() {
        return {
            character: [],
            location: null,
            fighter: null,
        }
    },
    methods: {
        loadAllCharacters() {
            for (let i = 0; i < localStorage.length; i++) {
                const characterName = localStorage.key(i)
                const characterStats = localStorage.getItem(characterName)
                this.character.push({ name: characterName, stats: characterStats })
            }
        },
        async getFighterAndLocation(character) {
            this.fighter = character.name
            this.location = await getLocation()
            this.timeToFight()
        },
        timeToFight() {
            alert(this.fighter + ' is fighting the mighty Bosse at ' + this.location + ', it\'s a close fight but Bosse lands the final hit to finish ' + this.fighter + ' R.I.P in peace :(')
        }
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
            <ul>
                <li @click="getFighterAndLocation(characters)" v-for="characters in character" :key="characters.name">{{ characters.name }}
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
div {
    color: rgb(255, 0, 0);
    font-size: xx-large;
}

li {
    list-style: none;
    cursor: pointer;
}
</style>