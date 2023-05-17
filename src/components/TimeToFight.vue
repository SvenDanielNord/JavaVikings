<script>
import { getLocation } from '../data/FetchLocation.js'

export default {
    data() {
        return {
            location: null,
            winner: null,
            loser: null,
            fighterOne: {
                name: null,
                stats: null
            },
            fighterTwo: {
                name: null,
                stats: null
            },
            messages: {
                textOne: [
                    "In the midst of a serene afternoon in",
                    "Under the clear blue sky of",
                    "Amidst the serene beauty of",
                    "In a peaceful corner of",
                    "Surrounded by tranquility in"
                ],
                textTwo: [
                    "relishes the tranquility until an unexpected encounter with",
                    "basks in the peaceful ambiance until the unexpected arrival of",
                    "enjoys a moment of serenity until",
                    "finds solace in the calmness until",
                    "is at peace until"
                ],
                textThree: [
                    "shatters the silence.",
                    "sparks tension in the air.",
                    "breaks the calmness.",
                    "disturbs the peaceful atmosphere.",
                    "disrupts the tranquility."
                ],
                textFour: [
                    "Fixing their gaze upon one another, both fighters lock eyes, their hands instinctively reaching for their swords.",
                    "Their eyes meet in a moment of silent understanding as they simultaneously unsheathe their blades, preparing for the impending clash.",
                    "With an intense stare, the fighters engage in a wordless exchange, drawing their swords in perfect synchronization.",
                    "Their eyes lock in a fierce gaze as they prepare for an intense battle, their weapons ready.",
                    "As tension builds, the fighters share a determined look, knowing what lies ahead."
                ],
                textFive: [
                    "Swift and precise,",
                    "With a sudden burst of energy,",
                    "Quick and agile,",
                    "In a graceful motion,",
                    "Like a whirlwind,"
                ],
                textSix: [
                    "executes a calculated strike, momentarily disrupting",
                    "delivers a staggering blow that momentarily staggers",
                    "lands a well-aimed attack, momentarily disorienting",
                    "launches a powerful assault, momentarily overwhelming",
                    "strikes with precision, momentarily throwing off"
                ],
                textSeven: [
                    "'s balance. Yet,",
                    ". But",
                    "'s equilibrium. However,",
                    ". Nonetheless,",
                    "'s stability. Still,"
                ],
                textEight: [
                    "swiftly regains composure and retaliates with a swift counterattack.",
                    "swiftly recovers, launching a relentless counter-assault.",
                    "proves their resilience, quickly retaliating with a formidable strike.",
                    "counterattacks with lightning speed, catching the opponent off guard.",
                    "recovers swiftly and counterstrikes with exceptional agility."
                ],
                textNine: [
                    "Following a grueling and monotonous battle,",
                    "In an arduous and tedious struggle,",
                    "After enduring a prolonged and mind-numbing duel,",
                    "Having fought relentlessly in an exhausting encounter,",
                    "In a battle that seemed never-ending,"
                ],
                textTen: [
                    "emerges triumphant, ending the fight by severing the head of",
                    "ultimately prevails, putting an end to the fight by beheading",
                    "triumphs over the opponent, leaving them defeated",
                    "prevails in the fight, proving their superiority against",
                    "claims victory, bringing an end to the battle with"
                ],
            },
            triggerTextBox: false,
            triggerTextTwo: false,
            triggerTextThree: false,
            triggerDone: false,
        }
    },
    props: {
        characterOne: {},
        characterTwo: {}
    },
    methods: {
        startFight() {
            this.testLocation().then(() => {
                this.makePlayer()
                this.setText()
            })
        },
        async testLocation() {
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
        setText() {
            this.textOne = this.messages.textOne[Math.floor(Math.random() * this.messages.textOne.length)]
            this.textTwo = this.messages.textTwo[Math.floor(Math.random() * this.messages.textTwo.length)]
            this.textThree = this.messages.textThree[Math.floor(Math.random() * this.messages.textThree.length)]
            this.textFour = this.messages.textFour[Math.floor(Math.random() * this.messages.textFour.length)]
            this.textFive = this.messages.textFive[Math.floor(Math.random() * this.messages.textFive.length)]
            this.textSix = this.messages.textSix[Math.floor(Math.random() * this.messages.textSix.length)]
            this.textSeven = this.messages.textSeven[Math.floor(Math.random() * this.messages.textSeven.length)]
            this.textEight = this.messages.textEight[Math.floor(Math.random() * this.messages.textEight.length)]
            this.textNine = this.messages.textNine[Math.floor(Math.random() * this.messages.textNine.length)]
            this.textTen = this.messages.textTen[Math.floor(Math.random() * this.messages.textTen.length)]
            this.triggerText()
        },
        triggerText() {
            this.triggerTextBox = true
            setTimeout(() => {
                this.triggerTextTwo = true
                this.triggerPartThree()
            }, 5000)
        },
        triggerPartThree() {
            setTimeout(() => {
                this.triggerTextThree = true
                this.triggerDone = true
            }, 5000)
        }
    }
}
</script>

<template>
    <!-- <div>
        <button @click="startFight()">Fight!</button>
        <div v-if="triggerTextBox" class="letMeSeeSomething">
            <div class="fade-in-text">
                {{ textOne }} {{ location }}, {{ fighterOne.name }} {{ textTwo }} {{ fighterTwo.name }} {{ textThree }} {{
                    textFour }}
            </div>
            <div v-if="triggerTextTwo" class="fade-in-text">
                {{ textFive }} {{ fighterOne.name }} {{ textSix }} {{ fighterTwo.name }} {{ textSeven }} {{ fighterTwo.name
                }} {{ textEight }}
            </div>
            <div v-if="triggerTextThree" class="fade-in-text">
                {{ textNine }} {{ winner }} {{ textTen }} {{ loser }}
            </div>
        </div>
    </div> -->
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop" @click="startFight()">
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
                <div class="modal-body">
                        <div v-if="triggerTextBox">
                            <div class="fade-in-text">
                                {{ textOne }} {{ location }}, {{ fighterOne.name }} {{ textTwo }} {{ fighterTwo.name }} {{
                                    textThree }} {{ textFour }}
                            </div>
                            <div v-if="triggerTextTwo" class="fade-in-text">
                                {{ textFive }} {{ fighterOne.name }} {{ textSix }} {{ fighterTwo.name }} {{ textSeven }} {{
                                    fighterTwo.name
                                }} {{ textEight }}
                            </div>
                            <div v-if="triggerTextThree" class="fade-in-text">
                                {{ textNine }} {{ winner }} {{ textTen }} {{ loser }}
                            </div>
                      
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" v-if="triggerDone">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '~bootstrap/scss/mixins';
@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables';

.fade-in-text {
    opacity: 0;
    animation: fade 0.7s forwards;
}

@keyframes fade {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

</style>