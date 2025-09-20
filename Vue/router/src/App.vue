<script setup>

import Header from './components/Header.vue';

</script>

<template>
  
  <Header></Header>

  <div class="container">

    <div class="row">

      <router-view name="left" class="col-sm-2"></router-view>

      <div class="col">

        <router-view></router-view>
      </div>

      <router-view name="right" class="col-sm-2"></router-view>

    </div>
  </div> 
</template>

<style scoped></style>
