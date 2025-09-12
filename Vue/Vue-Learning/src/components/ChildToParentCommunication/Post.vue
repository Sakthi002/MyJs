<script setup>
defineProps({
    post : { type: Object, required: true }
})

// const emit = defineEmits(['editPost'])

const emit = defineEmits({
    editPost : (postId) => postId && typeof postId === 'number' 
})


const updatePost = (id) => {
    emit('editPost', id)
}
</script>

<template>

    <p>Id: {{ post.id }}</p>
    <p>Title: {{ post.title }}</p>
    <!-- <p><button @click="$emit('editPost', post.id)">Edit Name</button></p> -->
    <p><button @click="updatePost(post.id)">Edit Name</button></p>
    <hr></hr>
</template>