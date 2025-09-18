<script setup>
import Modal from './Modal.vue';
    
</script>

<template>

    <div class="container">

        <h1>Teleport</h1>

        <div class="content">

            <Modal></Modal>
        </div>
    </div>
</template>

<style>
html, body, #app {
    height: 100%;
}

.container {
    height: 100%;
    display: grid;
    justify-content: center;
    align-items: center;
}

.content {
    max-width: 400px;
    position: relative;
}
</style>