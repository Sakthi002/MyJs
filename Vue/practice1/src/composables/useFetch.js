import { ref, unref, watchEffect } from "vue";

export function useFetch(url) {

    const loading = ref(false);

    const usersData = ref([]);

    const fetchData = async () => {

        loading.value = true;

        let apiUrl = unref(url)

        let response = await fetch(apiUrl);

        usersData.value = await response.json();

        setTimeout(()=>{
            loading.value = false;
        },3000)
    }

    watchEffect(()=>{
        fetchData()
    })

    return { 
        loading,
        usersData
    }
}