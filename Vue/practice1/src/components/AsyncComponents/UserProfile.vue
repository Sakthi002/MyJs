<template>

<p>Name:: {{ user.name }}</p>
<p>Age:: {{ user.age }}</p>

</template>

<script setup>
    
    const user = {
        name : "Sakthi",
        age: 30
    }
</script>