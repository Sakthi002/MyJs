<template>

    <div>

        <h1>Counter Component</h1>

        <div class="text-center">

            <button @click.prevent="decrease()">-</button>
            <span>{{ counter }}</span>
            <button @click.prevent="increase()">+</button>
        </div>
    </div>
</template>

<script setup>
    
    import { ref } from 'vue';

    const counter = ref(0);

    const increase = () => {
        counter.value++;
    }

    const decrease = () => {
        counter.value++;
    }
</script>

<style scoped>
    .text-center { text-align: center; }
</style>