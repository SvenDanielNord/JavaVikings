<script>
import { getLocation } from '../data/FetchLocation.js'

export default {
    data() {
        return {
            location: '',
            winner: '',
            loser: '',
            fighterOne: {
                name: '',
                stats: 0
            },
            fighterTwo: {
                name: '',
                stats: 0
            },
            trigger: false
        }
    },
    props: {
        characterOne: {},
        characterTwo: {}
    },
    methods: {
        test() {
            this.testLocation()
            this.totalStats()
        },
        async testLocation() {
            this.location = await getLocation()
        },
        totalStats() {
            this.fighterOne.stats = 0
            this.fighterOne.name = this.characterOne.name
            for (const fighter of this.characterOne.gear) {
                this.fighterOne.stats += fighter.itemStat;
            }
            this.fighterTwo.stats = 0
            this.fighterTwo.name = this.characterTwo.name
            for (const fighter of this.characterTwo.gear) {
                this.fighterTwo.stats += fighter.itemStat;
            }
            this.checkWinner()
        },
        checkWinner() {
            this.winner = this.fighterOne.stats > this.fighterTwo.stats ? this.fighterOne.name : this.fighterTwo.name;
            this.loser = this.fighterOne.stats > this.fighterTwo.stats ? this.fighterTwo.name : this.fighterOne.name;
        },
        triggerText() {
            console.log(this.trigger)
            this.trigger = true
            console.log(this.trigger)
        }
    }
}
</script>

<template>
    <div>
        <button @click="test(); triggerText()">Fight!</button>
        <div v-if="trigger" class="letMeSeeSomething">
            {{ fighterOne.name }} is enjoying a perfectly calm, nice sunny day in {{ location }} when suddenly {{ fighterTwo.name }} shows up.<br>
            They look each other deep in the eyes and draw thier swords. <br>
            {{ fighterOne.name }} put's {{ fighterTwo.name }} off balance with his swing, but {{ fighterTwo.name }} recovers quick and hits back. <br>
            After a long and extremly boring fight {{ winner }} secrues the victory by beheading {{ loser }}
        </div>
    </div>
</template>

<style>
.letMeSeeSomething {
    background-color: white;
}
</style>