<script setup>
    
    import { ref } from 'vue';

    const props = defineProps({
        firstName: String,
        lastName: String
    })

    let fname = ref(props.firstName);
    let lname = ref(props.lastName)

</script>

<template>

    <input type="text" placeholder="First Name" v-model="fname" @input="(e) => $emit('update:firstName', e.target.value)"/>
    <input type="text" placeholder="Last Name" v-model="lname" @input="(e) => $emit('update:lastName', e.target.value)">

    {{ fname }} {{ lname }}
</template>