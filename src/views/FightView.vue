<script>
import { RouterLink } from 'vue-router'
import LoadCharacters from '../components/LoadCharacter.vue'

export default {
    data() {
        return {
            location: null,
            fighter: null,
        }
    },
    components: {
        RouterLink,
        LoadCharacters
    }
}
</script>

<template>
    <div>
        <RouterLink to="/" v-slot="{ navigate }" ><button @click={navigate}>Home</button></RouterLink>
        <LoadCharacters />
    </div>
</template>
