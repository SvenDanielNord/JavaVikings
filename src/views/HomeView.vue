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
            [{itemName: "hjälm", itemStat: 0},
            {itemName: "tröja", itemStat: 0},
            {itemName: "svärd", itemStat: 0},
            {itemName: "sköld", itemStat: 0},
            {itemName: "byxa", itemStat: 0},
            {itemName: "skor", itemStat: 0}],

            totalStats: 0,
        }
    },
    methods: {
        updateItems(stat, name) {
            for (const item of this.items) {
                if(item.itemName === name){
                    item.itemStat = stat
                }
            }

            this.combineStats()
        },
        combineStats() {
            this.totalStats = 0
            for (const item of this.items) {
                this.totalStats += item.itemStat

            }
            console.log("TotalStats is: " + this.totalStats)
        },

        //TODO: Skapa klass för items???
    },
}
</script>

<template>
    <div class="flexCenter">

        <div class="flexGap">
            <RouterLink to="/about">About</RouterLink>
            <button>Generera gear</button>
        </div>

        <div class="theGrid">
            <PictureBox @stat="(stat, name) => updateItems(stat, name)" class="itemHelmet" search="hjälm" />
            <PictureBox @stat="(stat, name) => updateItems(stat, name)" class="itemArmor" search="tröja" />
            <PictureBox @stat="(stat, name) => updateItems(stat, name)" class="itemSword" search="svärd" />
            <PictureBox @stat="(stat, name) => updateItems(stat, name)" class="itemShield" search="sköld" />
            <PictureBox @stat="(stat, name) => updateItems(stat, name)" class="itemLeggs" search="byxa" />
            <PictureBox @stat="(stat, name) => updateItems(stat, name)" class="itemFeet" search="skor" />
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