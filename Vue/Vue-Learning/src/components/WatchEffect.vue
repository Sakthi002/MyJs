<script setup>
    
    import { ref, watch, watchEffect, watchPostEffect } from 'vue';

    const todoId = ref(1);
    const todoResponse = ref("");

    const count = ref(1);

    // watch(todoId, async (newVal, oldVal) => {
    //     const res = await fetch('https://jsonplaceholder.typicode.com/todos/'+todoId.value);
    //     todoResponse.value = await res.json();
    //     console.log(todoResponse.value);
    // }, { immediate: true })

    // watchEffect(async () => {
    //     console.log(count.value)
    //     const res = await fetch('https://jsonplaceholder.typicode.com/todos/'+todoId.value);
    //     todoResponse.value = await res.json();
    //     console.log(todoResponse.value);
    // })

    // post effect
    // On initial dom console wont print bcoz watchEffect executes before DOM update
    watchPostEffect(async () => {
        console.log(count.value)
        document.getElementById("subscriber") && console.log(document.getElementById("subscriber").innerText);
    })

</script>

<template>

    <h1>WatchEffect</h1>

    <div>
        Todo : <input type="text" v-model="todoId"></input>
    </div>

    <div>
        Count : <input type="text" v-model="count"></input>
    </div>

    <div id="subscriber">Subscribers Count : {{ count }}</div>
</template>