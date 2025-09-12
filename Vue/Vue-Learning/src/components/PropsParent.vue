<script setup>

import { ref } from 'vue';

import PropsChild from './PropsChild.vue';

const propDetails = ref({
    id: 1,
    name: 'Name'
})

function changeTitle() {
    propDetails.value.name = "Changed Name"
}

</script>

<template>

    <h1>Parent Component</h1>

    <h5>Parent : {{ propDetails.name }}</h5>

    <PropsChild :postId="12" pageTitle="Posts" :propDetails="propDetails" :changeTitle="changeTitle" postType="articles"></PropsChild>

    <PropsChild postId="13" :propDetails="propDetails" :changeTitle="changeTitle" postType="news"></PropsChild>

</template>