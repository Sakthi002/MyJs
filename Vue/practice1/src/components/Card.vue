<template>

    <div>
        <slot name="header"></slot>
        <slot name="body" :message="'messageee'"></slot>
        <h1>Title :: {{ title }}</h1>
    </div>
</template>

<script setup>
import { inject } from 'vue';


const title = inject('title')
</script>