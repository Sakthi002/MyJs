<script setup>

import { ref, shallowRef } from 'vue';
import CompA from './CompA.vue';
import CompB from './CompB.vue';

const current = shallowRef(CompA);

const updateActiveComp = (comp) => {

    current.value = comp === 'A' ? CompA : CompB;
}
</script>

<template>

    <h1>Keep Alive Component</h1>

    <div>
        <button @click="updateActiveComp('A')">CompA</button>
        <button @click="updateActiveComp('B')">CompB</button>
    </div>

    <KeepAlive :include="['CompB']" :max="2">
        <component :is="current"></component>
    </KeepAlive>
</template>