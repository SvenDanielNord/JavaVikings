<script>
import LoadCharacters from '../components/LoadCharacter.vue'

export default {
    data() {
        return {
            location: null,
            fighter: null,
        }
    },
    components: {
        
        LoadCharacters
    }
}
</script>

<template>
    <div>
        
        <LoadCharacters />
    </div>
</template>
