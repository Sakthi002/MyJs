<script setup>
import { onMounted, ref } from 'vue';
import Example from './Child/Example.vue';

const customRef = ref(null);

const count = ref("0");

const items = ref([1,2,3,4])
const itemsRef = ref([])

function updateRef() {
    console.log("Update ref called")
}

const childCompRef = ref(null);

onMounted(() => {
  console.log("onMounted →", customRef.value);
  customRef.value.style.color = "blue"
  console.log(itemsRef.value);
  console.log(childCompRef.value, 'chil');

  childCompRef.value.updateTitle()
})

</script>

<template>

    <h1>Template Ref</h1>

    <div id="comp-body" ref="customRef"> DIV DIV DIV</div>
    <div :ref="(el) => updateRef(el)"> Another Div</div>

    <div>

        <input type="text" v-model="count"></input>
    </div>

    <div v-for="item in items" ref="itemsRef">{{ item }}</div>

    <Example ref="childCompRef"></Example>
</template>