<script setup>

    import { ref } from 'vue';

    const title = ref("Sakthi");
    const message = ref("Frontend Developer");
    const checked = ref(true);
    const checkedNames = ref([]);

    // custom checkbox values
    const customCheck = ref('Yes')

    const picked = ref('Two')

    const selected = ref('B');

    const lazyInput = ref("");
    const age = ref(null)
    const name = ref("")
</script>

<template>

    <h1>Form Input Bindings</h1>

    <div class="input">

        <input type="text" v-model="title"></input>

        <div>{{ title }}</div>
    </div>

    <div class="area">

        <textarea v-model="message" name="area"></textarea>

        <div style="white-space: pre-line;">{{ message }}</div>
    </div>

    <div class="check">

        <input type="checkbox" v-model="checked">

        <div>{{ checked }}</div>

        <input type="checkbox" value="Sakthi" v-model="checkedNames">Sakthi
        <input type="checkbox" value="Web" v-model="checkedNames">Web
        <input type="checkbox" value="Dev" v-model="checkedNames">Dev

         <div>{{ checkedNames }}</div>

         <input type="checkbox" v-model="customCheck" true-value="Yes" false-value="No">

        <div>{{ customCheck }}</div>
    </div>

    <div class="radio">
        <input type="radio" value="One" v-model="picked">One
        <input type="radio" value="Two" v-model="picked">Two

        <div>{{ picked }}</div>
    </div>

    <div class="select">
        <div>Selected : {{ selected }}</div>
        <select v-model="selected">
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
        </select>
    </div>

    <div>
        <input type="text" v-model.lazy="lazyInput">
        <div>{{ lazyInput }}</div>
    </div>

    <div>
        <input type="text" v-model.number="age">
        <div>{{ age }}</div>
    </div>

    <div>
        <input type="text" v-model.trim="name">
        <div>{{ name }}</div>
    </div>
</template>