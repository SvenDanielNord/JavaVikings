<script>
import { getLocation } from '../data/FetchLocation.js'
import { pickRandomMessage } from '../data/FightMessage'

export default {
    data() {
        return {
            location: null,
            winner: null,
            loser: null,
            printText: '',
            textDonePrinting: false,
            fighterOne: {
                name: null,
                stats: null
            },
            fighterTwo: {
                name: null,
                stats: null
            },
            messages: {
                textOne: null,
                textTwo: null,
                textThree: null,
                textFour: null,
                textFive: null,
                textSix: null,
                textSeven: null,
                textEight: null,
                textNine: null,
                textTen: null,
            }
        }
    },
    props: {
        characterOne: {},
        characterTwo: {}
    },
    methods: {
        startFight() {
            this.makePlayer()
            this.getFightLocation().then(() => {
                this.setText()
            })
        },
        async getFightLocation() {
            this.location = await getLocation()
        },
        makePlayer() {
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
        async setText() {
            for (const message in this.messages) {
                this.messages[message] = pickRandomMessage(message)
            }

            const messageOrder = [
                this.messages.textOne,
                this.location,
                this.fighterOne.name,
                this.messages.textTwo,
                this.fighterTwo.name,
                this.messages.textThree,
                this.messages.textFour,
                this.messages.textFive,
                this.fighterOne.name,
                this.messages.textSix,
                this.fighterTwo.name,
                this.messages.textSeven,
                this.fighterTwo.name,
                this.messages.textEight,
                this.messages.textNine,
                this.winner,
                this.messages.textTen,
                this.loser,
            ]
            for (const text of messageOrder) {
                for (const word of text) {
                    for (const letter of word) {
                        this.printText += letter
                    }
                    await this.sleep(40)
                }
                this.printText += ' '
            }
            this.textDonePrinting = true
        },
        sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms))
        }
    }
}
</script>

<template>
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
        @click="startFight()">
        Fight!
    </button>
    <!-- Modal -->
    <div class="modal" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title w-100" id="staticBackdropLabel">Fight</h1>
                </div>
                <div>
                    {{ printText }}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                        v-if="textDonePrinting">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

