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
    <div>
        
        <h1>JavaVikings</h1>
        <RouterLink to="/about">About</RouterLink>
        <button>Generera gear</button>

        <PictureBox search="hjälm"/>
        <PictureBox search="svärd"/>
        <PictureBox search="sköld"/>
        <PictureBox search="brynja"/>
        <PictureBox search="byxa"/>
        <PictureBox search="Skor"/>

        
        
        

    </div>
</template>

<style>
body{
    display: flex;
    
}
img {
        height: 30 px;
        width: 30 px;
    }

</style>