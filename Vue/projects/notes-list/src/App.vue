<script setup>

import Navbar from './components/Layout/Navbar.vue';

</script>

<template>
  
	<Navbar></Navbar>
	
    <div class="container px-2">
      
      	<RouterView></RouterView>
    </div>
</template>

<style>

	@import 'bulma/css/bulma.min.css'

</style>
