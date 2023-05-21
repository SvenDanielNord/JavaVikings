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
    <div class="container">
        <div class="menu row text-center">
            <div class="col"></div>

            <div class="col-3 text-center">
                <RouterLink to="/"><button class="btn btn-danger">Home</button>
                </RouterLink>
            </div>

            <div class="col-3 text-center">
                <RouterLink to="/gear"><button class="btn btn-danger">Generate Gear</button>
                </RouterLink>
            </div>

            <div class="col"></div>
        </div>
    </div>


    <div>

        <LoadCharacters />
    </div>
</template>
