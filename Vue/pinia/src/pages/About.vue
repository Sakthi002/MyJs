<script setup>

import { useCounter } from '@/stores/counter';
const counter = useCounter();

</script>

<template>

    <h1>About Page</h1>

    <h3>Counter : {{ counter.count }}</h3>
</template>