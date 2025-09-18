<script setup>

    import { onActivated, onDeactivated, onMounted, onUnmounted, ref } from 'vue';

    const count = ref(0);

    function inc() {

        count.value++;
    }

    onMounted(()=>{
        console.log('Component A mounted');
    })

    onUnmounted(()=>{
        console.log('Component A Unmounted');
    })

    onActivated(() => {
        console.log('Component A Activated');
    })

    onDeactivated(()=>{
        console.log('Component A Deactivated');
    })
</script>

<template>

    <h1>Component A</h1>

    <p>Counter : {{ count }}</p>

    <button @click="inc">Inc</button>
</template>