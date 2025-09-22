<script setup>

import Header from './components/Header.vue';

</script>

<template>
  
  <Header></Header>

  <div class="container mt-4">

    <div class="row">

      <div class="col">

        <router-view></router-view>
      </div>
    </div>
  </div> 
</template>

<style scoped></style>
