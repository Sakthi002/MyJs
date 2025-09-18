<script setup>
import { ref } from 'vue';


// const vFocus = {

//     mounted(el) {

//         el.focus();        
//     }
// }

let page = ref("Demo");
let page1 = ref("Page2")

setTimeout(() => {
    page1.value = "page 2 Updated"
}, 3000)

let page2 = ref("Page 3")

let counter = ref(1)

let message = ref("message");
let show = ref(true)
</script>

<template>

    <div><input type="text" name="text" id="text" v-focus="page"></div>

    <div v-pre>

        <p>{{ page }}</p>

        <p>{{ page1 }}</p>
    </div>

    <p v-once>{{ page1 }}</p>

    <p v-cloak>{{ page2 }}</p>

    <div v-memo="[counter % 2 === 0]">
        <p>Memoized block (only updates when counter is even)</p>
      <p>Value: {{ counter }}</p>
    </div>

    <div>
      <p>Normal block (always updates)</p>
      <p>Value: {{ counter }}</p>
    </div>

     <button @click="counter++">Increment</button>


     <p v-if="show" v-once>{{ message }}</p>

     <p><button @click="show = !show">Toggle</button></p>
     <p><button @click="message = 'updated message'">Update</button></p>
</template>