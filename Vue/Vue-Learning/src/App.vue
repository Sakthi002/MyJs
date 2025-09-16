<script setup>

  // import TemplateRef from './components/TemplateRef.vue';
  // import PropsParent from './components/PropsParent.vue';
  // import Posts from './components/ChildToParentCommunication/Posts.vue';
  // import CustomInput from './components/CustomInput.vue';
  // import FallThroughParent from './components/FallThroughAttributes/Parent.vue';
  // import SlotComponent from './components/Slots/SlotComponent.vue';
  // import AsyncComponent from './components/AsyncComponent/AsyncComponent.vue';
  import MouseTracker from './components/Composables/MouseTracker.vue';
  
  import { ref } from 'vue';
import TodoList from './components/Composables/TodoList.vue';
import AsyncTodo from './components/Composables/AsyncTodo.vue';
import Posts1 from './components/Composables/Posts1.vue';
  
  // import Posts from './components/ProvideInject/Posts.vue';

  // import UserName from './components/UserName.vue';

  // const showCycle = ref(false);

  // const searchText = ref("Sakthi Web Dev");

  // const firstName = ref("Sakthi");
  // const lastName = ref("Vue Dev");

</script>

<template>
  <h1>Hello From Root</h1>
  <!-- <div><button @click="showCycle = !showCycle">Toggle Cycle</button></div> -->
  <!-- <Counter></Counter> -->
  <!-- <TemplateSyntax></TemplateSyntax> -->
  <!-- <Reactivity></Reactivity> -->
  <!-- <ComputedProperty class="foo bar"></ComputedProperty> -->
  <!-- <ConditionalRendering></ConditionalRendering> -->
  <!-- <ListRendering></ListRendering> -->
  <!-- <EventHandling></EventHandling> -->
   <!-- <FormInputs></FormInputs> -->
  <!-- <WatchComponent></WatchComponent> -->
  <!-- <WatchEffect></WatchEffect> -->
  <!-- <LifeCycle v-if="showCycle"></LifeCycle> -->
  <!-- <TemplateRef></TemplateRef> -->
  <!-- <props-parent></props-parent> -->
  <!-- <Posts></Posts> -->
  <!-- <CustomInput :searchText="searchText" @updateText="updateValue"></CustomInput> -->

  <!-- <CustomInput v-model:title.no-hyphens="searchText"></CustomInput> -->
  <!-- <CustomInput :modelValue="searchText" @update:model-value="(value) => searchText = value"></CustomInput> -->
  <!-- <div>Parent: {{ searchText }}</div> -->

  <!-- <UserName v-model:firstName="firstName" v-model:lastName="lastName"></UserName>
  <p>{{ firstName }} {{ lastName }}</p> -->

  <!-- <FallThroughParent></FallThroughParent> -->
  <!-- <SlotComponent></SlotComponent> -->
  <!-- <Posts></Posts> -->

  <!-- <AsyncComponent></AsyncComponent> -->
<!-- 
  <MouseTracker></MouseTracker>

  <TodoList></TodoList> -->

  <!-- <AsyncTodo></AsyncTodo> -->

  <Posts1></Posts1>
</template>

<style scoped></style>
