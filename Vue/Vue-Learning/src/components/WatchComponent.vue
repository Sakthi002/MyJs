<template>

    <h1>Watch Component</h1>

    <span>Counter : {{ counter }}</span>

    <button @click="inc">Increment</button>

    <p>Ask Yes/No question</p>

    <input type="text" v-model="question"></input>

    <template v-if="responseData">
        
        <p>Answer: {{ responseData.answer }}</p>

        <img :src="responseData.image" style="width: 200px;" />
    </template>

    <div>x : <input type="text" v-model="x"/></div>
    <div>y : <input type="text" v-model="y"/></div>

    <div>Count: <input type="text" v-model="obj.count"/></div>
    <div>Nest Count: <input type="text" v-model="nestObj.count.value"/></div>
</template>

<script setup>
    
    import { reactive, ref, watch } from 'vue';

    const counter = ref(0);

    function inc() {
        counter.value++;
    }

    watch(counter, (newValue, oldValue) => {

        console.log(`Counter value changed from ${oldValue} to ${newValue}`);

    })

    const question = ref("");
    const answer = ref("");
    const responseData = ref("");

    watch(question, async (newVal, oldVal) => {

        if(newVal.indexOf('?') > -1) {
        
            answer.value = "Thinking";
            responseData.value = "";

            try {
                const res = await fetch('https://yesno.wtf/api');
                responseData.value = await res.json()
                answer.value = responseData.value.answer;
            } catch (error) {
                 responseData.value = "";
            }
        
        } else {
        
            answer.value = ""
        }
    })

    // SOURCE TYPES
    const x = ref('1');
    const y = ref('10');

    // REF
    // watch(x, (newX) => {
    //     console.log(`x value is ${newX}`);
    // })

    // watch(y, (newY) => {
    //     console.log(`y value is ${newY}`);
    // })

    // GETTER FUNCTIONS

    // function sumVal() {
    //     return x.value + y.value
    // }

    // watch(sumVal, (newSum) => {
    //     console.log(`SUm value is: ${newSum}`); 
    // })

    // ARRAY OF REFS/GETTER FUNCTIONS

    // watch([x, sumVal], ([newX, newSum]) => {
    //     console.log(`x value is ${newX} and sum is ${newSum}`);
    // })

    // watch([x, y], ([newX, newY]) => {
    //     console.log(`x value is ${newX} and y is ${newY}`);
    // })

    const obj = reactive({count: 1, name : 'Course 1'});

    // this will not work - we can`t directly watch reactive object properties - we need to use getter function 
    // watch(obj.count, (newVal, oldVal) => {
    //     console.log(`new ${newVal} old ${oldVal}`);
    // })

    // With getter function - will get oldvalue and newvalue
    // watch(() => obj.count, (newVal, oldVal) => {
    //     console.log(`new ${newVal} old ${oldVal}`);
    // })

    // We can directly watch reactive object
    // issue with thsi is - we cant get old values as an obj pointed to a same memory
    watch(obj, (newObj, oldObj) => {
        console.log(`new obj ${newObj.count} old obj ${oldObj.count}`);
    })

    const nestObj = reactive({ count: { value : 10, name: 'test' }});
    
    // Nested Obj
    // watch(nestObj, (newNest, oldNest) => {
    //     console.log(`new nest obj ${newNest.count.value} old nest obj ${oldNest.count.value}`);
    // })

    // Nested Obj properties
    watch(nestObj.count, (newNest, oldNest) => {
        console.log(`new nest count ${newNest.value} old nest obj ${oldNest.value}`);
    })
</script>