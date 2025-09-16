import { ref } from "vue";

export function useTodo() {

    const loading = ref(false);
    const data = ref(null);
    const error = ref(null);

    const getTodos = async () => {

        loading.value = true;

        try {

            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
        
            data.value = await response.json();

        } catch(err) {

            error.value = err.message;

        } finally {

            loading.value = false;
        }
    }

    return { data, error, getTodos, loading  }
}