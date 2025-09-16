<script setup>
import { inject } from 'vue';


const message = inject('message')
const mainMessage = inject('mainMessage')
const {refMsg, updateMsg} = inject('refMsg')

console.log(message);

</script>

<template>

    <h1>Category Component</h1>

    <p>{{ message }}</p>

    <p>{{ mainMessage }}</p>

    <p>{{ refMsg }}</p>

    <p><button @click="updateMsg">Update</button></p>
</template>