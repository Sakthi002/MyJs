import { ref } from "vue";

export function useFetch(url, options = {}, autoFetch = true, delay = 0) {

    const loading = ref(false);
    const error = ref(null);
    const data = ref(null);

    const fetchData = async () => {

        loading.value = true;
        error.value = null;
        data.value = null;

        try {

            if(delay > 0) await new Promise((resolve) => setTimeout(resolve, delay));

            const response = await fetch(url);

            data.value = await response.json();

        } catch (err) {

            error.value = err.message;

        } finally {

            loading.value = false
        }
    }

    if(autoFetch) fetchData();

    return { data, loading, error, fetchData }
}