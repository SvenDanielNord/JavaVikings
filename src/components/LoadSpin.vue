<script>
export default{
   name: "LoadSpin"

}


</script>

<template>
  <div class="loader"></div>
</template>

<style scoped>

.loader {
  width: 150px; /* control the size */
  aspect-ratio: 1;
  display: grid;
  cursor:pointer;
}
.loader,
.loader:before {
  --_g: linear-gradient(#17177c 0 0) 50%; /* update the color here */
  background: 
    var(--_g)/34% 8%  space no-repeat,
    var(--_g)/8%  34% no-repeat space;
}
.loader:before {
  content: "";
  transition:.5s;
}
.loader:hover:before {
  transform: rotate(45deg);
}

</style>