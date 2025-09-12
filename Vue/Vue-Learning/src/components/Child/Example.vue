<script setup>

    import { ref } from 'vue';

    const title = ref("Title");

    function updateTitle() {
        title.value = "Updated title"
    }

    defineExpose({
        title,
        updateTitle
    })
</script>

<template>

    <h1>Example Component</h1>

    <h3>{{ title }}</h3>
</template>