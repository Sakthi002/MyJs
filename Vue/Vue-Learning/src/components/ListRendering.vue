<script setup>
    
    import { ref } from 'vue';

    const list = ref([
        { id: 1, name : 'item 1' },
        { id: 2, name : 'item 2' },
        { id: 3, name : 'item 3' },
        { id: 4, name : 'item 4' }
    ])

    function shuffle() {

        console.log(list.value.sort(()=> Math.random() - 0.5));
        
        return list.value.sort(()=> Math.random() - 0.5)

        console.log(list.value);
        
    }

    let obj = {
        title : 'My book',
        author : 'I am'
    }
</script>

<template>

    <h1>List Rendering</h1>

    <ul>
        <li v-for="(value, key, index) in obj">{{ key }} - {{ value }}</li>
    </ul>

    <ul>
        <li v-for="(item, index) in list" :key="item.id">
            {{ item.name }}
            <input type="text" />
        </li>
    </ul>

    <div><button @click="shuffle">Shuffle</button></div>
</template>