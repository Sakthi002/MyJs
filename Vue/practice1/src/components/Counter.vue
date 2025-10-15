<template>

<h1>Counter</h1>

<p>Counter: {{ count }}</p>
<p><button type="button" @click="increment">Increment</button></p>
<p><button type="button" @click="decrement">decrement</button></p>
</template>

<script setup>

import { useCounter } from '../composables/useCounter';

const { count, increment, decrement } = useCounter();

</script>