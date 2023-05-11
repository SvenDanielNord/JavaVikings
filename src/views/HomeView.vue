<script>
import { RouterLink } from 'vue-router'
import PictureBox from '../components/PictureBox.vue';


export default {
    components: {
        RouterLink,
        PictureBox
    },
    data() {
        return {
            items:
                [{ itemName: "hjälm", itemStat: 0, url: "" },
                { itemName: "tröja", itemStat: 0, url: "" },
                { itemName: "svärd", itemStat: 0, url: "" },
                { itemName: "sköld", itemStat: 0, url: "" },
                { itemName: "byxa", itemStat: 0, url: "" },
                { itemName: "skor", itemStat: 0, url: "" }],

            characterName: '',
            totalStats: 0,
        }
    },
    methods: {
        updateItems(stat, name, url) {
            for (const item of this.items) {
                if (item.itemName === name) {
                    item.itemStat = stat
                    item.url = url
                }
            }
        },
        saveCharacter() {
            localStorage.setItem(this.characterName, JSON.stringify(this.items))
        },
        clearCharacter() {
            localStorage.clear()
        },
        loadCharacter() {
            const getCharacterName = this.characterName
            const getCharacterStats = localStorage.getItem(getCharacterName)
            console.log('Name: ' + getCharacterName + ' Stats: ' + getCharacterStats)
        },
        
        //TODO: Skapa klass för items???
    },
    
    
}
</script>

<template>
    <div class="flexCenter">

        <div class="flexGap">
            <RouterLink to="/fight">Fight</RouterLink>
            <button>Generera gear</button>
            <input type="text" id="name" v-model="characterName" required minlength="4" maxlength="16" size="10">
            <button @click="saveCharacter">Save character</button>
            <button @click="loadCharacter">Load storage</button>
            <button @click="clearCharacter">Clear storage</button>
        </div>

        <div class="theGrid">
            <PictureBox @stat="(stat, name, url) => updateItems(stat, name, url)" class="itemHelmet" search="hjälm" />
            <PictureBox @stat="(stat, name, url) => updateItems(stat, name, url)" class="itemArmor" search="tröja" />
            <PictureBox @stat="(stat, name, url) => updateItems(stat, name, url)" class="itemSword" search="svärd" />
            <PictureBox @stat="(stat, name, url) => updateItems(stat, name, url)" class="itemShield" search="sköld" />
            <PictureBox @stat="(stat, name, url) => updateItems(stat, name, url)" class="itemLeggs" search="byxa" />
            <PictureBox @stat="(stat, name, url) => updateItems(stat, name, url)" class="itemFeet" search="skor" />
        </div>

    </div>
</template>

<style>
.flexCenter {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.flexGap {
    display: flex;
    gap: 1rem;
    margin-bottom: 3rem;
}

img {
    height: 125px;
    width: 125px;
    border: 5px black solid;
}

.theGrid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
}

.itemHelmet {
    grid-column: 2 / span 2;
    grid-row: 1;
    justify-self: center;
    align-self: center;
}

.itemArmor {
    grid-column: 2 / span 2;
    grid-row: 2;
    justify-self: center;
    align-self: center;
}

.itemSword {
    grid-column: 2;
    grid-row: 3;
    justify-self: center;
    align-self: center;
}

.itemShield {
    grid-column: 3;
    grid-row: 3;
    justify-self: center;
    align-self: center;
}

.itemLeggs {
    grid-column: 2 / span 2;
    grid-row: 4;
    justify-self: center;
    align-self: center;
}

.itemFeet {
    grid-column: 2 / span 2;
    grid-row: 5;
    justify-self: center;
    align-self: center;
}

@media (max-width: 480px) {
    img {
        height: 105px;
        width: 105px;
    }
}

@media (min-width: 768px) {
    img {
        height: 200px;
        width: 200px;
    }
}
</style>