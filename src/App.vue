<script setup>

// import { RouterLink, RouterView } from 'vue-router'


import { RouterView } from 'vue-router'

</script>
  
<template>

  <div class="flexCenter">
    <h1>JavaVikings</h1>
    <!-- Lägg nav knapparna här istället. -->
    <RouterView />
  </div>

</template>

<style>
.flexCenter{
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>


