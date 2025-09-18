<script setup>

import { ref } from 'vue';
import CompA from './CompA.vue';
import CompB from './CompB.vue';

const show = ref(false);
const docState = ref('save');

const activeComp = ref(CompA)

</script>

<template>

    <h1>Transition Component</h1>

    <!-- <p><button @click="show = !show">Toggle</button></p> -->

    <!-- <Transition name="fade">
        <div v-if="show">
            <h2>Hi Hello How Are You</h2>
        </div>
    </Transition> -->

    <Transition name="fade" mode="out-in" appear>

        <button v-if="docState === 'save'" @click="docState = 'cancel'">Save</button>
        <button v-else-if="docState === 'edit'" @click="docState = 'save'">Edit</button>
        <button v-else-if="docState === 'cancel'" @click="docState = 'edit'">Cancel</button>
    </Transition>

    <div>
        <button @click="activeComp = CompA">CompA</button>
        <button @click="activeComp = CompB">CompB</button>
    </div>
    <Transition name="fade" mode="out-in" appear>

        <component :is="activeComp"></component>
    </Transition>
</template>

<style scoped>

    .fade-enter-from, .fade-leave-to {
        opacity: 0;
    }

    .fade-enter-to, .fade-leave-from {
        opacity: 1;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 1s ease;
    }
</style>