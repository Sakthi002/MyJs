<script setup>
    
    import { ref } from 'vue';

    const props = defineProps({
        propDetails: Object,
        changeTitle: { type: Function, default: () => {} },
        pageTitle: { type: String, default: "Blogs" },
        postId: { type: [String, Number], required: true },
        postType: { type: String, validator : (value) => ['story', 'news'].includes(value)}
    })
</script>

<template>

    <h1>{{ pageTitle }}</h1>

    <h5>Child : {{ propDetails.name }}</h5>

    <button @click="changeTitle">Change</button>
</template>