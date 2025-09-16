<script setup>

import { useFetch } from '@/composables/useFetch';
import { onMounted, watch } from 'vue';

const { loading, error, data } = useFetch('https://jsonplaceholder.typicode.com/todos?_limit=5', {}, true, 4000);

watch(data, (newVal, oldVal) => {
    console.log(newVal, 'new');
    console.log(oldVal, 'old');    
});

</script>

<template>

<div v-if="loading">

    Fetching data.....
</div>

<div v-if="data && data.length">

    <ol v-for="value in data" :key="value.id">
        <li>{{ value.title }}</li>
    </ol>
</div>

<div v-if="error">
    Error Occured.....
</div>
    
</template>