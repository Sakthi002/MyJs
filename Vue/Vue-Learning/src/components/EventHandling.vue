<script setup>
    
    import { ref } from 'vue';

    const handleClick = (name,  e) => {

        console.log(e.target.tagName,'clicked')
    }

    const handlePrevent = () => {
        console.log('Link Clicked')
    }

    const childClick = () => {
        console.log("Child Clicked");
    }

    const patentClick = () => {
        console.log("Parent Clicked");
    }

    function onDivClick() {
  console.log("Div clicked");
}
</script>

<template>

    <h1>Event Handling</h1>

    <div><button @click="handleClick('Sakthi', $event)">Click me</button></div>

    <a href="www.google.com" @click.prevent="handlePrevent">Google</a>

    <div id="parent" @click="patentClick">
        Parent
        <div id="child" @click.stop="childClick">Child</div>
    </div>

 <div class="box" @click.self="onDivClick">
    Parent Div
    <button>Click Child</button>
  </div>
</template>