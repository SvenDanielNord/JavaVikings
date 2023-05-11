<script>
import { RouterLink } from 'vue-router'
import LoadCharacters from '../components/LoadCharacter.vue'

export default {
    components: {
        RouterLink,
        LoadCharacters
    },
}
</script>

<template>
    <div>
        <RouterLink to="/">Home</RouterLink>
        <LoadCharacters />
    </div>
</template>
