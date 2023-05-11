<script>
export default {
    props: ["search"],
    emits: ["stat"],

    data() {
        return {
            listOfUrls: ["det", "funkar"],
        };
    },

    methods: {
    
    },
}

</script>


<template>
    <div>
        <a href="#" v-for="url of listOfUrls">
        {{ url }}
        </a>

    </div>
</template>

