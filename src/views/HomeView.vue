<script>
import { RouterLink } from 'vue-router'
import { searchForThing } from '../data/FetchData';

async function fetchUrl() {
    let response = await searchForThing('mössa')
    let json = response.json
    console.log(json)
    return json
}

//let fetch = {
//    let response = await searchForThing('mössa')
//}


export default {
    components: {
        RouterLink
    },
    data() {
        return {
            url: fetchUrl()
        }
    },
    methods: {

    }
}
</script>

<template>
    <div>
        <p>Hello!</p>
        <RouterLink to="/about">About</RouterLink>
        {{ url }}
    </div>
</template>