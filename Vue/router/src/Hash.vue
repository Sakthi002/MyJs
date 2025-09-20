<script setup>

import { computed, ref } from 'vue';

import Home from './pages/Home.vue';
import About from './pages/About.vue';
import NotFound from './pages/NotFound.vue';

const currentHash = ref(window.location.hash);

window.addEventListener('hashchange', (e) => {
  currentHash.value = window.location.hash;
})

const routes = {
  '/' : Home,
  '/about' : About
};

const currentComp = computed(() => {
  return routes[currentHash.value.slice(1)] || NotFound
})

</script>

<template>
  <h1>Root Component</h1>
  <ul>
    <li><a href="#/">Home</a></li>
    <li><a href="#/about">About</a></li>
    <li><a href="#/contact">Contact</a></li>
  </ul>

  <component :is="currentComp"></component>
 
</template>

<style scoped></style>
