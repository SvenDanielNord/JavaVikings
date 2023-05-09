<script>
import { RouterLink } from 'vue-router'

export default {
    components: {
        RouterLink
    },
    data() {
        return {
            character: []
        }
    },
    methods: {
        loadAllCharacters() {
            for (let i = 0; i < localStorage.length; i++) {
                const characterName = localStorage.key(i)
                const characterStats = localStorage.getItem(characterName)
                this.character.push({ name: characterName, stats: characterStats})
            }
        },
        fight(characters) {
            console.log(characters.name, characters.stats)
            alert('Too bad, you lost sucker')
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
                <li @click="fight(characters)" v-for="characters in character" :key="characters.name">{{ characters.name }}</li>
            </ul>
        </div>
        <RouterLink to="/">Home</RouterLink>
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