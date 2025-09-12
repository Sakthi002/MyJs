<script setup>
import { ref } from 'vue';
import Post from './Post.vue';

let posts = ref([
    { id: 1, title : "Post 1" },
    { id: 2, title : "Post 2" },
    { id: 3, title : "Post 3" },
    { id: 4, title : "Post 4" },
    { id: 5, title : "Post 5" },
])

const updateTitle = (id) => {

    // Way 1
    // let post = posts.value.find(obj => obj.id === id);
    // post.title = "Updated";

    // Way 2
    posts.value = posts.value.map(obj => {
        if(obj.id === id) {
            obj.title = "Updated"
        }
        return obj;
    })
}
</script>

<template>

    <div><h2>Posts</h2></div>

    <Post v-for="post in posts" :key="post.id" :post="post" @editPost="updateTitle"></Post>
</template>