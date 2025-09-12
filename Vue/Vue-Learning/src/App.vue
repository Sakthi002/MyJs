<script setup>

  // import TemplateRef from './components/TemplateRef.vue';
  // import PropsParent from './components/PropsParent.vue';
  import Posts from './components/ChildToParentCommunication/Posts.vue';
  
  import { ref } from 'vue';

  const showCycle = ref(false);

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
  <Posts></Posts>
</template>

<style scoped></style>
