<script setup>

import { ref, TransitionGroup } from 'vue';

const list = ref([1,2,3,4,5]);

const addItem = () => {

    let value = Math.floor(Math.random() * 100);
    let index = Math.floor(Math.random() * list.value.length);
    list.value.splice(index, 0, value);
}

const removeItem = (index) => {
    list.value.splice(index, 1)
}

</script>

<template>

    <h1>Transition Group</h1>

    <div><button @click.prevent="addItem">Add</button></div>

    <ul>
    
        <TransitionGroup name="list" appear>
    
            <li v-for="(item,index) in list" style="padding: 4px;" :key="item">
    
                {{ item }} - <button @click.prevent="removeItem(index)">&#x2715;</button>
            </li>
        </TransitionGroup>
    </ul>
</template>

<style scoped>
    .list-enter-from, .list-leave-to {
        opacity: 0;
    }

    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }

    .list-leave-active {
        position: absolute;
    }

    .list-move {
        transition: all 1s;
    }
</style>