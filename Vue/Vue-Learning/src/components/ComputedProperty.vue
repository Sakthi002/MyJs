<script setup>

    import { computed, ref } from 'vue';

    const count = ref(1);

    function inc() {
        count.value++;
    }

    const doubledCount = computed({
        get() {
            return count.value * 2;
        },
        set(val) {
            count.value = val / 2;
        }
    })

    function setDval() {
        doubledCount.value = 30;
    }
</script>

<template>

    <h2 :class="$attrs.class">I am a Computed</h2>

    <p>Count value : {{ count }}</p>

    <p>Doubled Count value : {{ doubledCount }}</p>

    <p><button @click="inc">Increment</button></p>
    <p><button @click="setDval">setDval</button></p>
</template>