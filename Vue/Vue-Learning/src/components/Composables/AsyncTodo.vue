<script setup>
import { defineAsyncComponent } from 'vue';


    const AsyncTodoList = defineAsyncComponent({
        loader: () => import('./TodoList.vue')
    })
</script>

<template>

    <AsyncTodoList></AsyncTodoList>
</template>