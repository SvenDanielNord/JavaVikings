<script>
export default {
    data() {
        return {
            character: [],
            figtherOne: null,
            figtherTwo: null,
        }
    },
    methods: {
        loadAllCharacters() {
            // for (let i = 0; i < localStorage.length; i++) {
            //     const characterName = localStorage.key(i)
            //     const characterStats = localStorage.getItem(characterName)
            //     this.character.push({ name: characterName, stats: characterStats })
            // }
            for (let i = 0; i < localStorage.length; i++) {
                this.character.push(localStorage.key(i))
            }
        },
        setFigtherOne(char) {
            this.figtherOne = char
        },
        setFigtherTwo(char) {
            this.figtherTwo = char
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
            <!-- <ul>
                <li @click="fight(characters)" v-for="characters in character" :key="characters.name">{{ characters.name }}
                </li>
            </ul> -->
            <div class="flex">
                <ul>
                    <!-- TODO: Fixa key:ed value -->
                    <h2>Figther 1!</h2>
                    <fieldset class="bg">
                        <div>Chosen figther: {{ figtherOne }}</div>
                    </fieldset>
                    <li class="bg" @click="setFigtherOne(char)" v-for="char in character">
                        {{ char }}
                    </li>
                </ul>
            </div>
            <div class="flex">
                <ul>
                    <!-- TODO: Fixa key:ed value -->
                    <h2>Figther 2!</h2>
                    <fieldset class="bg">
                        <div>Chosen figther: {{ figtherTwo }}</div>
                    </fieldset>
                    <li class="bg" @click="setFigtherTwo(char)" v-for="char in character">
                        {{ char }}
                    </li>
                </ul>
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
    justify-content: start;
}

.bg{
    background-color: aliceblue;
}


</style>