<script setup>

// import { RouterLink, RouterView } from 'vue-router'


import { RouterView } from 'vue-router'

</script>
  
<template>
  <div class="container d-flex justify-content-center">
  <h1>JavaVikings</h1>
  </div>
  <div class="container d-flex justify-content-center">
    <div class="row justify-content-center row-cols-auto">
      <div class="col">
        <RouterLink to="/" v-slot="{ navigate }"><button class="btn btn-danger" @click="navigate">Home</button></RouterLink>
      </div>
      <div class="col">
        <RouterLink to="/gear" v-slot="{ navigate }"><button class="btn btn-danger" @click="navigate">Generate Gear</button></RouterLink>

      </div>
        <RouterView />
    </div>
    

  </div>
</template>

<style lang="scss" scoped>
@import '~bootstrap/scss/mixins';
@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables';



// .container {
//   display: flex;
//   flex-direction: row;
//   align-items: center;
// }
</style>


