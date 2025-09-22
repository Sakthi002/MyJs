<script setup>

import { useCounter } from '@/stores/counter';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const counter = useCounter();

// const count = counter.count;
// const doubleCount = counter.doubleCount;
// const increment = counter.increment;

// const count = computed(() => counter.count);
// const doubleCount = computed(() => counter.doubleCount);
// const increment = counter.increment;

const {count, name, doubleCount, doubleCountPlusOne } = storeToRefs(counter);
const increment = counter.increment;

function add() {
    // IT WILL CREATE TWO MUTATIONS 
    // counter.count = counter.count + 1;
    // counter.name = Math.floor(Math.random() * 10) + ' user'

    counter.$patch((state) => {
        state.count = state.count + 1,
        state.name = Math.floor(Math.random() * 10) + ' user'
    })
}

function reset() {
    counter.$reset()
}

counter.$subscribe((mutation, state) => {
    console.log(mutation, 'mutation');
    console.log(state, 'state');
})
</script>

<template>

    <h1>Counter Page</h1>

    <h3>Counter: {{ count }}</h3>
    <h3>Double: {{ doubleCount }}</h3>
    <h3>doubleCountPlusOne: {{ doubleCountPlusOne(10) }}</h3>
    <h3>Name: {{ name }}</h3>

    <button @click="add()" class="btn btn-primary">Increment</button>
    <button @click="reset()" class="btn btn-danger">Reset</button>
</template>