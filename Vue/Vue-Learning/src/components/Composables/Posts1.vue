<script setup>

import { useFetch } from '@/composables/useFetch';
import Post from './Post.vue';
import { ref, computed } from 'vue';

const page = ref(1);

const url = computed(() => {
    return 'https://jsonplaceholder.typicode.com/posts?_limit=5&_page=' + page.value
})

const { data, loading, error } = useFetch(url);

const posts = data;

</script>

<template>

    <h1>Posts</h1>

    <template v-for="post in posts" :key="post.id">

        <Post :post="post"></Post>
    </template>

    <p>
        <button v-for="n in 5" :key="n" @click="page = n">{{ n }}</button>
    </p>

    <p v-if="loading">Loading....</p>

    <p v-if="error" style="color: red;">Error Occured</p>
</template>