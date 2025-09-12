<script setup>

    import { ref } from 'vue';

    const isAwesome = ref(true);

    const type = ref(1);

    setInterval(() => {

        type.value++;

    }, 3000);

    const showPara = ref(true);

    const showDiv = ref(true)
</script>

<template>

    <h1>Conditional Rendering</h1>

    <div><button @click="isAwesome = !isAwesome">Toggle</button></div>

    <div v-if="isAwesome">Vue is Awesome!!!</div>

    <div v-else>Vue is not Awesome</div>

    <div v-if="type === 1">1</div>
    <div v-else-if="type === 2">2</div>
    <div v-else-if="type === 3">3</div>
    <div v-else>Stop</div>

    <template v-if="showPara">
        <h1>Paragraph</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </template>

    <div v-show="showDiv">On v-show</div>
</template>