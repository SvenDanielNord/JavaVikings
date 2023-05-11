<script>
import { RouterLink } from 'vue-router'




export default {
    components: {
        RouterLink,
    }   
}
</script>

<template>
    <div class="flexCenter">

        <div class="flexGap">
            <RouterLink to="/fight" v-slot="{ navigate }" ><button @click={navigate}>Fight</button></RouterLink>
            <RouterLink to="/gear" v-slot="{ navigate }" ><button @click={navigate}>Generera gear</button></RouterLink>
        </div>
        <div class="flexCenter">
            <p>You gotta fight! For your right to party! </p>
        </div>

    </div>
</template>

<style>
p {
    color: orangered;
    font-size: x-large;
    

}
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