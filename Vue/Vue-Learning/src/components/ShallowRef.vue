<script setup>

import { reactive, ref, shallowReactive, shallowRef, triggerRef } from 'vue';

const state = shallowRef({ count : 0 });

function inc() {
    state.value = { count : state.value.count + 1 };
}

// setTimeout(() => {
//     state.value.count = 100 // this will not trigger
//     triggerRef(state)
//     // state.value = { count: 10 } // this will work
// }, 3000)

// const obj = reactive({ count : 0, nested : { a : 1 }});
// obj.count++;
// obj.nested.a++;
// console.log(obj.count); // 1
// console.log(obj.nested.a); // 2

const obj1 = shallowReactive({ count : 0, nested : { a : 1 }});

const incCount = () => obj1.count++
const incNested = () => obj1.nested.a++

</script>

<template>

    <h1>Shallow Ref</h1>

    <p> {{ state.count }}</p>

    <button @click="inc">Increment</button>

    <p>{{ obj1.count }}</p>
    <p>{{ obj1.nested.a }}</p>

     <button @click="incCount">Inc Count</button>
  <button @click="incNested">Inc Nested</button>
</template>