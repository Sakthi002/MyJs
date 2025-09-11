<template>

    <div>

        <h1>{{ message }}</h1>

        <div v-html="htmlContent"></div>

        <div v-bind:id="dynamicId" :[dynamicAttr]="dynamicValue" >Dynamic Id</div>

        <div :="attributes">Multiple Attributes Binding</div>

        <div v-on:click="onClick">{{  1 + 1 }}- {{ true ? 'Yes' : 'No' }}</div>
    </div>
</template>

<script setup>

    const message = "Template Code";

    const htmlContent = '<h2>H2 Content</h2>'

    const dynamicId = "div-id";

    const dynamicAttr = 'title';
    const dynamicValue = 'This is the title';

    const attributes = {
        id: "attr-id",
        class: "attr-class"
    }

    function onClick() {
        alert('clicked')
    }
</script>