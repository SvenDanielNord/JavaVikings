<script>
import { RouterLink } from 'vue-router'

export default {
    components: {
        RouterLink
    }
}
</script>

<template>
    <div>
        <p>Hello!</p>
        <RouterLink to="/about">Home</RouterLink>
    </div>
</template>