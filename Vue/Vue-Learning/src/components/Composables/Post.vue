<script setup>

    defineProps({
        post: Object
    })
</script>

<template>

    <h3>{{ post.title }}</h3>

    <p>{{ post.body }}</p>
</template>