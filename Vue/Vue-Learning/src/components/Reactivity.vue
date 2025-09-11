<template>

    <h1>{{pageTitle}}</h1>

    <div><input type="text" v-model="pageTitle"></div>

    <button @click="onClick">Update</button>

    <div class="counter">

        <button @click="dec">-</button>
        <span>{{ count }}</span>
        <button @click="inc">+</button>
    </div>

    <div class="counter1">

        <button @click="decr">-</button>
        <span>{{ state.count }}</span>
        <button @click="incr">+</button>
    </div>

    {{ obj }}
    <button @click="updateObj">updateObj</button>
</template>

<script setup>

    import { reactive, ref } from 'vue';

    let pageTitle = "Reactivity in VUE";

    function onClick() {
        pageTitle = "Updated Title" // will not update as it is not reactive
    }

    let count = ref(0);

    function inc() {
        count.value++;
    }

    function dec() {
        count.value--;
    }

    const state = reactive({
        count : 10
    })

    function incr() {
        state.count++;
    }

    function decr() {
        state.count--;
    }

    let obj = reactive({ id: 1 })

    function updateObj() {
        obj = { id: 5 } // this will not work - loses the reactivity
    }
    
</script>