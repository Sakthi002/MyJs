<script setup>

import { provide, ref } from 'vue';
import SinglePost from './SinglePost.vue';

const message = "Hello I am Sakthivel"
provide('message', message);

const refMsg = ref("Reactive message");

provide('refMsg', {refMsg, updateMsg})

function updateMsg () {
    refMsg.value = "Updated Reactive Message"
}

</script>

<template>

    <h1>Posts Component</h1>

    <SinglePost></SinglePost>
</template>