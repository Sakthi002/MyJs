<script setup>
import Divider from './components/FunctionalComponents/Divider';
import Button from './components/FunctionalComponents/Button';
// import TestAsyncComponent from './components/AsyncComponents/TestAsyncComponent.vue';
import { computed, defineAsyncComponent, provide, reactive, ref, watch, watchEffect, watchPostEffect } from 'vue';
import AsyncExample from './components/AsyncComponents/AsyncExample.vue';
import Input from './components/Input.vue';
import Card from './components/Card.vue';
import Counter from './components/Counter.vue';
import Users from './components/Users.vue';
import { useAuthStore } from '../stores/authStore';
const auth = useAuthStore();
auth.getUser()

const showAsync = ref(false)

const AsyncComp = defineAsyncComponent(() => import('./components/AsyncComponents/TestAsyncComponent.vue'));

let count = 0;
const inc = () => {
  count++;
}

const count1 = ref(0)
const inc1 = () => {
  count1.value++;
  
}

const count2 = ref({ count : 0 })
const inc2 = () => {
  count2.value.count++;
}

let count3 = reactive({ count : 0 })
const inc3 = () => {
  count3 = { count: 1 };
}

// const doubleCount = computed(() => {
//   return count1.value * 2;
// })

// doubleCount.value = 10; // WARNING

const doubleCount = computed({
  get : () => {
    return count1.value * 2;
  },
  set: (val) => {
    count1.value = val / 2;
  }
})

doubleCount.value = 10

const cond1 = ref(true)
  
  const items = ref([
    { id: 1, name: 'table'},
    { id: 2, name: 'tv'},
  ])

  const addItem = () => {
    items.value.unshift({ id: 3, name: "fridge"})
  }

  const cClick = () => {
    console.log('Child clicked');
  }

  const pClick = () => {
    console.log('Parent clicked');
  }

  const gpClick = () => {
    console.log('Grand parent clicked');
  }

  const title = ref("");

  const onChange = (value, name) => {

    console.log(name, value);

    title.value = value
  }

  const watchCount = ref(1)

  watch(watchCount, (newValue, oldValue) => {
    console.log(`Value changed from ${oldValue} to ${newValue}`);
  }, { immediate: true })

  watch(doubleCount, (oldValue, newValue) => {
    console.log(oldValue, newValue);
  })

  let x = ref(0)
  let y = ref(0)

  watch([x, y], ([newX, newY], [oldX, oldY]) => {
    console.log(newX, 'newX');
    console.log(oldX, 'oldX');
    console.log(newY, 'newY');
    console.log(oldY, 'oldY');
  })

  const obj1 = reactive({
    name : "Sakthi"
  })

  const obj1Upd = () => {
    obj1.name = "Viji"
  }

  watch(obj1, (newValue, oldValue) => {
    console.log(newValue, oldValue);
  })


  watch(() => obj1.name, (newValue, oldValue) => {
    console.log(newValue, oldValue);
  })

  const nestObj = reactive({ count : 1, location : { name: "DPI" }})

  watch(nestObj, (newValue, oldValue) => {
    console.log(newValue, oldValue);
  })

  const nestObjUpd1Level = () => {
    nestObj.count = 2;
  }

  const nestObjUpd2Level = () => {
    nestObj.location.name = "BLR";
  }

  const effectCount = ref(1);

  watchPostEffect(()=>{
    console.log('Immediate effect',effectCount.value, document.getElementById('test'));
  })

  const titleVal = ref('Hello Vue');

  provide('title', titleVal)
</script>

<template>
  <h1>You did it!</h1>
  <divider></divider>
  <Button></Button>

  <button type="button" @click="showAsync = !showAsync">Toggle</button>

  <AsyncComp v-if="showAsync"></AsyncComp>

  <!-- <TestAsyncComponent v-if="showAsync"></TestAsyncComponent> -->
  
  <button @click="inc">Inc</button>
  <p>{{ count }}</p>

  <button @click="inc1">Inc1</button>
  <p>{{ count1 }}</p>

  <button @click="inc2">Inc2</button>
  <p>{{ count2.count }}</p>

  <button @click="inc3">Inc3</button>
  <p>{{ count3.count }}</p>

  <p>double : {{ doubleCount }}</p>

  <AsyncExample></AsyncExample>

  <template v-if="cond1">
    <h1>Conditon check</h1>
  </template>

  <ul>

    <li v-for="item in items" :key="item.id"> {{ item.name }} 
      <input type="text"></input>
    </li>

    <button @click="addItem" type="button">Add</button>
  </ul>

  <div id="gparent" @click.self="gpClick">
    Grand Parent
    <div id="parent" @click="pClick">
      Parent
      <div id="child" @click="cClick">
        Child
      </div>
    </div>
  </div>

  <Input :value="title" name="title" :onChange="onChange"></Input>

  <input v-model.trim="title" type="text" name="title" />

  <p>{{ title }}</p>

  <p>{{ watchCount }}</p>
  <button type="button" @click="watchCount++">Inc Watch Count</button>

  <input type="number" v-model="x" />
  <input type="number" v-model="y" />

  <p>{{ obj1.name }}</p>

  <button type="button" @click="obj1Upd">upd1Obj</button>

  <p>{{ nestObj.count }}</p>
  <p>{{ nestObj.location.name }}</p>

  <button type="button" @click="nestObjUpd1Level">nestObjUpd1Level</button>
  <button type="button" @click="nestObjUpd2Level">nestObjUpd2Level</button>

  <p id="test">EffectCount :: {{ effectCount }}</p>

  <button type="button" @click="effectCount++">effectCountInc</button>

  <Card>
    <template #body="{ message }"><p>{{ message }}</p></template>
    <template #header><p>Heading</p></template>
  </Card>

  <button type="button" @click="titleVal = 'New Title'">Change Title</button>
{{ titleVal }}

<Counter></Counter>

<Users></Users>
</template>

<style scoped></style>
