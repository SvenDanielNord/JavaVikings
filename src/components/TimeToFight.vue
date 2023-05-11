<script>
import { getLocation } from '../data/FetchLocation.js'

export default {
    data() {
        return {
            location: '',
            winner: '',
            loser: '',
            playerOne: {
                name: '',
                stats: 0
            },
            playerTwo: {
                name: '',
                stats: 0
            },
        }
    },
    props: {
        fighterEtt: {},
        fighterTva: {}
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
            this.playerOne.stats = 0
            this.playerOne.name = this.fighterEtt.name
            for (const fighter of this.fighterEtt.gear) {
                this.playerOne.stats += fighter.itemStat;
            }
            this.playerTwo.stats = 0
            this.playerTwo.name = this.fighterTva.name
            for (const fighter of this.fighterTva.gear) {
                this.playerTwo.stats += fighter.itemStat;
            }
            this.checkWinner()
        },
        checkWinner() {
            this.winner = this.playerOne.stats > this.playerTwo.stats ? this.playerOne.name : this.playerTwo.name;
            this.loser = this.playerOne.stats > this.playerTwo.stats ? this.playerTwo.name : this.playerOne.name;
        },
    }
}
</script>

<template>
    <div>
        <button @click="test">Fight!</button>
    </div>
</template>