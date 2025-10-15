<template>

    <input type="text" :value="value" @input="onChange($event.target.value, name)" :name="name"></input>
</template>

<script setup>

    const props = defineProps({
        value: { type: String, default : '' },
        name: { type: String, default : '' },
        onChange: { type: Function }
    })
</script>