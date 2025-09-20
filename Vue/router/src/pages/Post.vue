<script setup>
import { onMounted, ref, watch, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const props = defineProps(['id']);

console.log(props);

const route = useRoute();
const router = useRouter();

const post = ref(null)

const fetchPost = async () => {

    let response = await fetch('https://jsonplaceholder.typicode.com/posts/'+props.id);

    post.value = await response.json();
};

const goBack = () => {

    router.replace({ name: 'posts' });
}

watchEffect(fetchPost)

// onBeforeRouteUpdate((to, from) => {
//     console.log(to);
//     fetchPost(to.params.id)
// })

// fetchPost(props.id)

</script>

<template>

    <div class="mt-4" v-if="post">

        <h1>{{ post.title }}</h1>
        <p>{{ post.body }}</p>
    </div>

    <button class="btn btn-primary" @click="goBack">Back</button>
</template>