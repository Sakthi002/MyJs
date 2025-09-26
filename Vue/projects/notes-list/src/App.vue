<script setup>

import { onMounted } from 'vue';
import Navbar from './components/Layout/Navbar.vue';
import { useAuthStore } from './stores/AuthStore';

const authStore = useAuthStore();

onMounted(() => {

	authStore.init();
})

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
