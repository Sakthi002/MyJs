<script setup>
import { ref } from 'vue';


const msg = ref("Hello Memo");

setTimeout(()=>{
    msg.value = "Updated memo"
}, 3000);

const subscribers = ref(1000);
const views = ref(200000);
const likes = ref(3000);

const items = ref([
    { id: 1, name: 'Apple', quantity: 10 },
    { id: 2, name: 'Orange', quantity: 20 },
    { id: 3, name: 'Banana', quantity: 30 },
]);

function updateQty(id) {

    let item = items.value.find(item => item.id === id);
    item.quantity++;

}

function updateName(id) {

    let item = items.value.find(item => item.id === id);

    item.name = item.name + (Math.random() * 10).toFixed();

}

function addItem() {
    let id = items.value.length + 1;
    items.value.push({ id, name: 'Fruit '+ id, quantity: id * 10})
}
</script>

<template>

    <h1>V-MEMO EXAMPLE</h1>

    <p v-memo=[msg]>{{ msg }}</p>

    <div v-memo="[subscribers]">
        <p>Sunscribers : {{ subscribers }}</p>
        <p>Views : {{ views }}</p>
        <p>Likes : {{ likes }}</p>
    </div>

    <div>
        <button @click="subscribers++">Subscribers++</button>
        <button @click="views++">Views++</button>
        <button @click="likes++">Likes++</button>
    </div>

    <div>
        <p>Current State</p>
        <p>Sunscribers : {{ subscribers }}</p>
        <p>Views : {{ views }}</p>
        <p>Likes : {{ likes }}</p>
    </div>

    <div>

        <div><button @click="addItem">Add</button></div>
        <ul>
            <li v-for="item in items" :key="item.id" v-memo="[item.quantity]"> 
                <p>{{ item.name }} - {{ item.quantity }}</p>
            </li>
        </ul>
    </div>
</template>