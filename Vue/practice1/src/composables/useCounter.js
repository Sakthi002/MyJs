import { ref } from "vue";

export function useCounter() {

    const count = ref(1);

    const increment = () => {
        count.value++;
    }

    const decrement = () => {
        count.value--;
    }

    return { count, increment, decrement };
}