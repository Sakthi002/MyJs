<script setup>

import { inject, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const posts = ref([]);

const fetchPosts = async () => {

    // let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    
    // posts.value = await response.json();

    posts.value = inject('postsValue')
}

const gotoPost = (postId) => {

    router.replace({ name: 'post', params: { id: postId }})
}

onMounted(() => {
    fetchPosts();
});

</script>

<template>

    <div class="row">

        <div class="col-md-8">

             <table class="table table-striped" v-if="posts.length">

                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="post in posts" :key="post.id">
                        <td>{{ post.id }}</td>
                        <td>{{ post.title }}</td>
                        <td>{{ post.body }}</td>
                        <td>
                            <button class="btn btn-info" @click="gotoPost(post.id)">View</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="col-md-4">
            <router-view></router-view>
        </div>
    </div>
</template>