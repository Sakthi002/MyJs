<script setup>
import { defineAsyncComponent, Suspense } from 'vue';

const CatComp = defineAsyncComponent(() => import('./CatComponent.vue'))
</script>

<template>

    <Suspense>

        <CatComp></CatComp>

        <template #fallback>
            
            <div>Loading</div>
        </template>
    </Suspense>
</template>