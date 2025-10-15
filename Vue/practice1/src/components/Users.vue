<template>
    <h1>Users</h1>
    <p>Loading: {{ loading }}</p>
    <h1>Users</h1>
    <ul>
        <li v-for="user in usersData" :key="user.id">{{ user.name }}</li>
    </ul>
    <p><button type="button" @click="page++">Next</button></p>
</template>

<script setup>

import { useFetch } from '@/composables/useFetch';
import { computed, onMounted, ref } from 'vue';

const page = ref(1)
const url = computed(()=>{
    return 'https://jsonplaceholder.typicode.com/users?_limit=5&_page=' + page.value
});

const { loading, usersData } = useFetch(url);

</script>