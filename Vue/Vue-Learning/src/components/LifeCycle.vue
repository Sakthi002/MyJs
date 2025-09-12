<script setup>

import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from 'vue';

const count = ref(0);

setTimeout(()=>{
    count.value++;
    console.log(count.value);
    
}, 3000)

function getData() {
    console.log('function');
}

onBeforeMount(() => {
    console.log(document.getElementById("title"), 'onBeforeMount');
    console.log('On Before Mount')
    getData();
});

onBeforeMount(() => {
    console.log(document.getElementById("title"), 'onBeforeMount 2');
    console.log('On Before Mount 2')
    getData();
});

onMounted(()=>{
    console.log(document.getElementById("title"), 'onMounted');
    console.log('On Mounted')
})

onBeforeUnmount(() => {
    console.log(document.getElementById("title"), 'onBeforeUnmount');
    console.log('On Before Unmount')
})

onUnmounted(()=>{
    console.log(document.getElementById("title"), 'onUnmounted');
    console.log("On Unmounted");
})

onBeforeUpdate(() => {
    console.log("On Before Update", count.value);
})

onUpdated(() => {
    console.log("On Updated", count.value);
})
</script>

<template>

    <h1 id="title">Lifecycle Methods</h1>

    <p>Count: {{ count }}</p>
</template>