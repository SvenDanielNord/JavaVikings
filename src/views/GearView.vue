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
            saveAlert: false,
            loadSome: true,
            countPicBox: 0,
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
            this.showSaveAlert()
        },
        showSaveAlert() {
            this.saveAlert = true
            this.characterName = "";
            setTimeout(() => {
                this.saveAlert = false;
            }, 3000);
        },
        checkLoad() {
            this.countPicBox++
            if (this.countPicBox > 5) {
                this.loadSome = false;
            }
        },

        clearCharacter() {
            localStorage.clear()
        },
    },


}
</script>

<template>
    <div class="container">
        <div class="menu row justify-content-center">
            <div class="col-sm-4 col text-center">
                <RouterLink to="/"><button class="btn btn-danger buttonSize">Home</button>
                </RouterLink>
            </div>

            <div class="col-sm-4 col text-center">
                <RouterLink to="/fight"><button class="btn btn-danger buttonSize">Fight</button>
                </RouterLink>
            </div>
        </div>

        <div class="row mt-4">
            <div class="col-12">

                <div id="save" class="mb-3 input-group justify-content-center">
                    <!-- Borde detta vara en form? -->
                    <button v-if="this.loadSome" disabled="true" button class="btn btn-danger "
                        @click="saveCharacter">Save</button>
                    <button v-else button class="btn btn-danger " @click="saveCharacter">Save</button>
                    <input type="text" class="form-group" id="name" v-model="characterName" required minlength="4"
                        maxlength="16" size="11" placeholder="Character name" aria-label="Save"
                        aria-describedby="basic-addon1">
                </div>

            </div>
        </div>

        <div class="row text-center justify-content-center">
            <div v-if="saveAlert" class="col-5 saveAlertMessage"> Character saved!</div>
        </div>
    </div>


    <div class="col">
        <button button class="btn btn-danger" @click="clearCharacter">Clear storage</button>
    </div>



    <div class="container text-center">
        <div class="row">
            <div class="col-12">
                <PictureBox @loads="() => checkLoad()" @stat="(stat, name, url) => updateItems(stat, name, url)"
                    class="itemHelmet" search="hjälm" @load="console.log(5)" />
            </div>
        </div>

        <div class="row justify-content-center">
            <div class="col col-md-3 col-lg-2 mt-4">
                <PictureBox @loads="() => checkLoad()" @stat="(stat, name, url) => updateItems(stat, name, url)"
                    class="itemSword" search="svärd" />
            </div>

            <div class="col col-md-3 col-lg-2 mt-4">
                <PictureBox @loads="() => checkLoad()" @stat="(stat, name, url) => updateItems(stat, name, url)"
                    class="itemArmor" search="tröja" />
            </div>

            <div class=" col col-md-3 col-lg-2 mt-4">
                <PictureBox @loads="() => checkLoad()" @stat="(stat, name, url) => updateItems(stat, name, url)"
                    class="itemShield" search="sköld" />
            </div>
        </div>


        <div class="row">
            <div class="col">
                <PictureBox @loads="() => checkLoad()" @stat="(stat, name, url) => updateItems(stat, name, url)"
                    class="itemLeggs mt-4" search="byxa" />
            </div>
        </div>
        
        <div class = "row">
            <div class= "col">
                <PictureBox @loads="() => checkLoad()" @stat="(stat, name, url) => updateItems(stat, name, url)"
                    class="itemFeet mt-4" search="skor" />
            </div>
        </div>

    </div>
</template>

<style>

.saveAlertMessage {
    color: rgb(224, 44, 44);
    border-radius: 0.5rem;
}</style>