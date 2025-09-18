<script setup>
import { ref } from 'vue';

let targetElement = ref("h1");
</script>

<template>

    <h1>V-IS DIRECTIVE</h1>

    <component :is="targetElement">Hello Vue</component>

    <p><button @click="targetElement = 'span'">Update</button></p>
</template>