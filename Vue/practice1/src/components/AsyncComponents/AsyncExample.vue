<template>
    
    <h1>Async Example</h1>

    <AsyncUserProfile></AsyncUserProfile>
</template>

<script setup>
import { defineAsyncComponent, ref } from 'vue';
import Loader from './Loader.vue';
import Error from './Error.vue';

const loadWithError = ref(false)

const AsyncUserProfile = defineAsyncComponent({

    loader: () => new Promise((resolve, reject) => {

        setTimeout(() => {

            if(loadWithError.value) {

                reject("Error")
            
            } else {
            
                resolve(import('./UserProfile.vue'))
            }
        }, 2000)
    }),

    loadingComponent: Loader,
    errorComponent: Error
})

</script>
