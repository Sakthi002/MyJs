<script setup>

    const props = defineProps({
        title: { type: String, default: '' },
        titleModifiers: { type: Object, default: () => {}}
    })

    const emit = defineEmits(['update:title']);

    const update = (e) => {
        
        let value = e.target.value;

        if(props.titleModifiers['no-hyphens']) {
            value = value.split("-").join("");
        }
        
        emit('update:title', value)
    }
</script>

<template>

    <h1>Custom Input</h1>

    <div>

        <input type="text" name="title" id="title" :value="title" @input="update">
    </div>
</template>