<script setup>

import { ref } from 'vue';

const data = await fetch('https://api.thecatapi.com/v1/images/search');
const [res] = await data.json();



</script>

<template>

    <div class="image">

        <img :src="res.url" width="300" height="200"></img>
    </div>
</template>