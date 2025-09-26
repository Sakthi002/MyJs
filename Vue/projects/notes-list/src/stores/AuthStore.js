import { defineStore } from "pinia";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "@/js/firebase";
import { computed, ref } from "vue";

export const useAuthStore = defineStore('auth', () => {

    const errorMessage = ref('')

    const registerUser = (creds) => {

        errorMessage.value = "";

        createUserWithEmailAndPassword(auth, creds.email, creds.password).then((response) => {
        
            console.log(response,'response');
            
        }).catch((error) => {

            errorMessage.value = error.message;
        });
    }

    const errMessage = computed(()=>{
        return errorMessage.value
    })

    const clearError = () => {

        errorMessage.value = "";
    }

    return {
        registerUser,
        errMessage,
        clearError
    }
})