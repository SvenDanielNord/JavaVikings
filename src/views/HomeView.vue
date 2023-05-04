<script>
import { RouterLink } from 'vue-router'
import PictureBox from '../components/PictureBox.vue';


export default {
    components: {
        RouterLink,
        PictureBox
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
            <PictureBox class="itemHelmet" search="hjälm" />
            <PictureBox class="itemArmor" search="tröja" />
            <PictureBox class="itemSword" search="svärd" />
            <PictureBox class="itemShield" search="sköld" />
            <PictureBox class="itemLeggs" search="byxa" />
            <PictureBox class="itemFeet" search="Skor" />
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