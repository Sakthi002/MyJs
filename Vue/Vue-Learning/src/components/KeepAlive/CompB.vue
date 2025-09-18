<script setup>

    import { onActivated, onDeactivated, onMounted, onUnmounted, ref } from 'vue';

    const message = ref("");

    onMounted(()=>{
        console.log('Component B mounted');
    })

    onUnmounted(()=>{
        console.log('Component B Unmounted');
    })

    onActivated(() => {
        console.log('Component B Activated');
    })

    onDeactivated(()=>{
        console.log('Component B Deactivated');
    })
</script>

<template>

    <h1>Component B</h1>

    <p><input type="text" v-model="message"></input></p>
    <p>Message : {{ message }}</p>
</template>