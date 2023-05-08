<script>
import { RouterLink } from 'vue-router'

export default {
    components: {
        RouterLink
    },
    data() {
        return {
            characters: []
        }
    },
    methods: {
        loadAllCharacters() {
            for (let i = 0; i < localStorage.length; i++) {
                const characterName = localStorage.key(i)
                const characterStats = localStorage.getItem(characterName)
                this.characters.push({ name: characterName, stats: characterStats})
            }
        },
    },
    mounted() {
        this.loadAllCharacters()
    }
}
</script>

<template>
    <div>
        <h1>Time to fight!</h1>
        <div>
            <ul>
                <li v-for="character in characters" :key="character.name">{{ character.name }}</li>
            </ul>
        </div>
        <RouterLink to="/">Home</RouterLink>
    </div>
</template>

<style>
    li {
        color: rgb(255, 0, 0);
        font-size: xx-large;
        list-style: none;
    }
</style>