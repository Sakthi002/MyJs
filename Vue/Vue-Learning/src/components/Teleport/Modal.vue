<script setup>
import { ref } from 'vue';

const open = ref(false)
</script>

<template>

    <button v-if="!open" @click="open = true">Open</button>

    <Teleport to="body">

        <div class="overlay" v-if="open"></div>

        <div class="modal" v-if="open">
            <p>This is the modal component</p>
            <button @click="open = false">Close</button>
        </div>
    </Teleport>
</template>

<style scoped>

    .overlay {
        position: absolute;
        top: 0px;
        bottom: 0px;
        right: 0px;
        left: 0px;
        background: rgba(0,0,0,0.5);
    }

    .modal {
        position: absolute;
        top: 20%;
        left: 40%;
        z-index: 3;
        width: 20%;
        background: #fff;
        padding: 20px;
    }
</style>