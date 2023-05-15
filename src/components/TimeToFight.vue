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
            partOneMessages: [
                "In the midst of a serene afternoon in",
                "Under the clear blue sky of",
                "Amidst the serene beauty of",
                "In a peaceful corner of",
                "Surrounded by tranquility in"
            ],
            partTwoMessages: [
                "relishes the tranquility until an unexpected encounter with",
                "basks in the peaceful ambiance until the unexpected arrival of",
                "enjoys a moment of serenity until",
                "finds solace in the calmness until",
                "is at peace until"
            ],
            partThreeMessages: [
                "shatters the silence.",
                "sparks tension in the air.",
                "breaks the calmness.",
                "disturbs the peaceful atmosphere.",
                "disrupts the tranquility."
            ],
            partFourMessages: [
                "Fixing their gaze upon one another, both fighters lock eyes, their hands instinctively reaching for their swords.",
                "Their eyes meet in a moment of silent understanding as they simultaneously unsheathe their blades, preparing for the impending clash.",
                "With an intense stare, the fighters engage in a wordless exchange, drawing their swords in perfect synchronization.",
                "Their eyes lock in a fierce gaze as they prepare for an intense battle, their weapons ready.",
                "As tension builds, the fighters share a determined look, knowing what lies ahead."
            ],
            partFiveMessages: [
                "Swift and precise,",
                "With a sudden burst of energy,",
                "Quick and agile,",
                "In a graceful motion,",
                "Like a whirlwind,"
            ],
            partSixMessages: [
                "executes a calculated strike, momentarily disrupting",
                "delivers a staggering blow that momentarily staggers",
                "lands a well-aimed attack, momentarily disorienting",
                "launches a powerful assault, momentarily overwhelming",
                "strikes with precision, momentarily throwing off"
            ],
            partSevenMessages: [
                "'s balance. Yet,",
                ". But",
                "'s equilibrium. However,",
                ". Nonetheless,",
                "'s stability. Still,"
            ],
            partEightMessages: [
                "swiftly regains composure and retaliates with a swift counterattack.",
                "swiftly recovers, launching a relentless counter-assault.",
                "proves their resilience, quickly retaliating with a formidable strike.",
                "counterattacks with lightning speed, catching the opponent off guard.",
                "recovers swiftly and counterstrikes with exceptional agility."
            ],
            partNineMessages: [
                "Following a grueling and monotonous battle,",
                "In an arduous and tedious struggle,",
                "After enduring a prolonged and mind-numbing duel,",
                "Having fought relentlessly in an exhausting encounter,",
                "In a battle that seemed never-ending,"
            ],
            partTenMessages: [
                "emerges triumphant, ending the fight by severing the head of",
                "ultimately prevails, putting an end to the fight by beheading",
                "triumphs over the opponent, leaving them defeated",
                "prevails in the fight, proving their superiority against",
                "claims victory, bringing an end to the battle with"
            ],
            partOne: null,
            partTwo: null,
            partThree: null,
            partFour: null,
            partFive: null,
            partSix: null,
            partSeven: null,
            partEight: null,
            partNine: null,
            partTen: null,
            triggerTextBox: false,
            triggerTextTwo: false,
            triggerTextThree: false,
        }
    },
    props: {
        characterOne: {},
        characterTwo: {}
    },
    methods: {
        startFight() {
            this.testLocation()
            this.totalStats()
            this.setText()
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
        setPartOne() {
            this.partOne = this.partOneMessages[Math.floor(Math.random() * this.partOneMessages.length)]
        },
        setPartTwo() {
            this.partTwo = this.partTwoMessages[Math.floor(Math.random() * this.partTwoMessages.length)]
        },
        setPartThree() {
            this.partThree = this.partThreeMessages[Math.floor(Math.random() * this.partThreeMessages.length)]
        },
        setPartFour() {
            this.partFour = this.partFourMessages[Math.floor(Math.random() * this.partFourMessages.length)]
        },
        setPartFive() {
            this.partFive = this.partFiveMessages[Math.floor(Math.random() * this.partFiveMessages.length)]
        },
        setPartSix() {
            this.partSix = this.partSixMessages[Math.floor(Math.random() * this.partSixMessages.length)]
        },
        setPartSeven() {
            this.partSeven = this.partSevenMessages[Math.floor(Math.random() * this.partSevenMessages.length)]
        },
        setPartEight() {
            this.partEight = this.partEightMessages[Math.floor(Math.random() * this.partEightMessages.length)]
        },
        setPartNine() {
            this.partNine = this.partNineMessages[Math.floor(Math.random() * this.partNineMessages.length)]
        },
        setPartTen() {
            this.partTen = this.partTenMessages[Math.floor(Math.random() * this.partTenMessages.length)]
        },
        setText() {
            this.setPartOne()
            this.setPartTwo()
            this.setPartThree()
            this.setPartFour()
            this.setPartFive()
            this.setPartSix()
            this.setPartSeven()
            this.setPartEight()
            this.setPartNine()
            this.setPartTen()
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
            }, 5000)
        }
    }
}
</script>

<template>
    <div>
        <button @click="startFight()">Fight!</button>
        <div v-if="triggerTextBox" class="letMeSeeSomething">
            <div>
                {{ partOne }} {{ location }}, {{ fighterOne.name }} {{ partTwo }} {{ fighterTwo.name }} {{ partThree }} {{
                    partFour }}
            </div>
            <div v-if="triggerTextTwo">
                {{ partFive }} {{ fighterOne.name }} {{ partSix }} {{ fighterTwo.name }} {{ partSeven }} {{ fighterTwo.name
                }} {{ partEight }}
            </div>
            <div v-if="triggerTextThree">
                {{ partNine }} {{ winner }} {{ partTen }} {{ loser }}
            </div>
        </div>
    </div>
</template>

<style>
.letMeSeeSomething {
    background-color: white;
    font-family: 'Times New Roman', Times, serif;
}
</style>