<script setup>

import { onMounted } from 'vue';
import Navbar from './components/Layout/Navbar.vue';
import { useNoteStore } from './stores/NoteStore';

const noteStore = useNoteStore();

onMounted(() => {

	noteStore.getNotes();
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
