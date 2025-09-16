<script setup>

import { useMouse } from '@/composables/mouseMove';
import { onMounted, onUnmounted, ref } from 'vue';

const { x, y } = useMouse();

</script>

<template>

    <h1>Mouse Tracker</h1>

    <p>Mouse position is at: {{ x }} , {{ y }}</p>
</template>