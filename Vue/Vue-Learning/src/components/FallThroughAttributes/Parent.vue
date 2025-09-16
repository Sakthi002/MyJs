<script setup>

import MyButton from './MyButton.vue';

const onClick = () => {
    console.log('Parent Clicked');
}

</script>

<template>

    <h1>Parent Component</h1>

    <MyButton id="my-b" class="my-btn" style="color:red" @click="onClick"></MyButton>
</template>