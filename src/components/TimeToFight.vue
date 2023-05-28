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
            fullMessage: '',
            forcedSpace: ' ',
            isDonePrinting: false,
            isBothFightersReady: false,
            isTTS: true,
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
            try {
                this.location = await getLocation()
            } catch (error) {
                console.error('Error fetching location:', error)
            }
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
        setText() {
            for (const message in this.messages) {
                this.messages[message] = pickRandomMessage(message)
            }
            const messageOrder = [
                this.messages.textOne,
                this.location,
                this.forcedSpace,
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
            this.settingUpTextAndTTS(messageOrder)
        },
        async settingUpTextAndTTS(messageOrder) {
            for (const text of messageOrder) {
                this.fullMessage += text
            }
            this.speak()
            for (const text of messageOrder) {
                for (const word of text) {
                    for (const letter of word) {
                        this.printText += letter
                    }
                    await this.sleep(40)
                }
            }
            this.isDonePrinting = true
        },
        sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms))
        },
        reloadPage() {
            window.location.reload()
        },
        checkFightersReady() {
            if (typeof this.characterOne.name !== 'undefined' && typeof this.characterTwo.name !== 'undefined') {
                this.isBothFightersReady = true;
            }
        },
        speak() {
            const tts = new SpeechSynthesisUtterance(this.fullMessage)
            tts.pitch = 0
            tts.rate = 0.9
            tts.lang = 'en'
            if (this.isTTS) {
                window.speechSynthesis.speak(tts)
            }
        },
        switchTTS() {
            this.isTTS = !this.isTTS
        }
    },
    watch: {
        characterOne: {
            handler() {
                this.checkFightersReady()
            },
        },
        characterTwo: {
            handler() {
                this.checkFightersReady()
            },
        },
    }
}
</script>

<template>
    <!-- Button trigger modal -->
    <button v-if="isBothFightersReady" type="button" class="btn btn-danger" data-bs-toggle="modal"
        data-bs-target="#staticBackdrop" @click="startFight()">
        Fight!
    </button>
    <svg v-if="isTTS" @click="switchTTS()" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
        class="bi bi-volume-up-fill white-mute-button" viewBox="0 0 16 16">
        <path
            d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z" />
        <path
            d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z" />
        <path
            d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z" />
    </svg>
    <svg v-else @click="switchTTS()" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
        class="bi bi-volume-mute-fill white-mute-button" viewBox="0 0 16 16">
        <path
            d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z" />
    </svg>
    <!-- Modal -->
    <div class="modal" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button @click="reloadPage()" type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                    <h1 class="modal-title w-100" id="staticBackdropLabel">Fight</h1>
                </div>
                <div>
                    {{ printText }}
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.white-mute-button {
    color: white;
}
</style>