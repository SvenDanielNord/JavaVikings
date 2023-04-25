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
        <h1>About</h1>
        <p>This is the best site you will ever see.</p><br>
        <p>Send money to support</p>
        <RouterLink to="/">Home</RouterLink>
    </div>
</template>