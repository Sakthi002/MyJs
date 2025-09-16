<script setup>

import { defineAsyncComponent, ref } from 'vue';
import Loader from './Loader.vue';
import Error from './Error.vue';

// const showTodos = ref(false);

// const TodoComponent = defineAsyncComponent(()=> import('./TodoList.vue'))

const TodoComponent = defineAsyncComponent({
    loader: () => {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                resolve(import ('./TodoList.vue'))
            }, 3000);
        })
    },
    loadingComponent: Loader,
    errorComponent: Error
})

const AsyncTodoList = defineAsyncComponent({
    loader: () => import('./TodoList.vue'),
    loadingComponent: Loader,
    errorComponent: Error
})

</script>

<template>

    <h1>Async Component</h1>

    <p><button type="button" @click="showTodos = !showTodos">Toggle</button></p>

    <!-- <TodoComponent v-if="showTodos"></TodoComponent> -->

     <AsyncTodoList></AsyncTodoList>
</template>