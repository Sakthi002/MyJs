import { defineStore } from "pinia";
import { computed, ref } from "vue";

// OPTIONS
// export const useCounter = defineStore('counter', {

//     state: () => {
//         return {
//             count : 0
//         }
//     },

//     getters: {

//         doubleCount(state) {

//             return state.count * 2
//         }
//     },

//     actions: {
//         increment() {
//             this.count++
//         }
//     }
// })

// COMPOSITION API
export const useCounter = defineStore('counter', () => {

    const count = ref(1);
    const name = ref("Sakthi Vue Dev");

    const doubleCount = computed(() => count.value * 3);

    const doubleCountPlusOne = computed(() => {
        return (value) => doubleCount.value + value
    })

    const increment = () => count.value++;

    function $reset() {
        count.value = 0;
        name.value = "Sakthi Vue Dev"
    }

    return { count, name, increment, $reset, doubleCount, doubleCountPlusOne }
})