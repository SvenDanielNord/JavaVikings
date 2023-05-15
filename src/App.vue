<script setup>

// import { RouterLink, RouterView } from 'vue-router'


import { RouterView } from 'vue-router'

</script>
  
<template>
  <div class="container">
    <div class="menu row text-center">

      <div class="col-12">
        <h1>JavaVikings</h1>
      </div>

      <div class="col-4">
        <RouterLink to="/" v-slot="{ navigate }"><button class="btn btn-danger" @click="navigate">Home</button>
        </RouterLink>
      </div>

      <div class="col-4">
        <RouterLink to="/gear" v-slot="{ navigate }"><button class="btn btn-danger" @click="navigate">Generate
            Gear</button></RouterLink>

      </div>

      <div class="col-4">
        <RouterLink to="/fight" v-slot="{ navigate }"><button class="btn btn-danger" @click="navigate">Fight</button>
        </RouterLink>
      </div>
    </div>

    <RouterView />
    
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


