<script>

import PictureBox from '../components/PictureBox.vue';


export default {
    components: {

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
    },


}
</script>

<template>
    <div class="container">
        <div class="menu row justify-content-center">
            <div class="col-3 text-center">
                <RouterLink to="/"><button class="btn btn-danger">Home</button>
                </RouterLink>
            </div>

            <div class="col-3 text-center">
                <RouterLink to="/fight"><button class="btn btn-danger">Fight</button>
                </RouterLink>
            </div>
        </div>

        <div class="row mt-3">
            <div class="col-12">
                <div id="save" class="mb-3 input-group justify-content-center">
                    <!-- Borde detta vara en form? -->
                    <button button class="btn btn-danger " @click="saveCharacter">Save</button>
                    <input type="text" class="form-group" id="name" v-model="characterName" required minlength="4"
                        maxlength="16" size="11" placeholder="Character name" aria-label="Save"
                        aria-describedby="basic-addon1">
                </div>
            </div>
        </div>
    </div>


    <div class="col">
        <button button class="btn btn-danger" @click="clearCharacter">Clear storage</button>
    </div>


    <div class="container col-12 text-center">
        <PictureBox @stat="(stat, name, url) => updateItems(stat, name, url)" class="itemHelmet" search="hjälm" />
        <PictureBox @stat="(stat, name, url) => updateItems(stat, name, url)" class="itemArmor" search="tröja" />
        <div class="row justify-content-center row-cols-auto">
            <PictureBox @stat="(stat, name, url) => updateItems(stat, name, url)" class="itemSword" search="svärd" />
            <PictureBox @stat="(stat, name, url) => updateItems(stat, name, url)" class="itemShield" search="sköld" />
        </div>

        <PictureBox @stat="(stat, name, url) => updateItems(stat, name, url)" class="itemLeggs" search="byxa" />
        <PictureBox @stat="(stat, name, url) => updateItems(stat, name, url)" class="itemFeet" search="skor" />
    </div>
</template>

<style>
.mt-3 {
    margin-top: 3 !important;
}
</style>