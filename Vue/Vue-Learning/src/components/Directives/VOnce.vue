<script setup>

import { ref } from 'vue';

let message = ref("message");

let show = ref(true)

let value1 = ref('Value 1')
let value2 = ref('Value 2')

</script>

<template>

    <div><input type="text" v-model="value1"></div>
    <div><input type="text" v-model="value2"></div>
    <div v-once>
        <p>Value 1: {{ value1 }}</p>
        <p>Value 2: {{ value2 }}</p>
    </div>
    
    <p v-if="show" v-once>{{ message }}</p>

    <p><button @click="show = !show">Toggle</button></p>

    <p><button @click="message = 'updated message'">Update</button></p>
</template>