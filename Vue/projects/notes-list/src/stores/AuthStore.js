import { defineStore } from "pinia";

import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

import { auth } from "@/js/firebase";

import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { useNoteStore } from "./NoteStore";

export const useAuthStore = defineStore('auth', () => {

    const noteStore = useNoteStore();

    const user = ref({});

    const errorMessage = ref('')

    const router = useRouter();

    const init = () => {

        onAuthStateChanged(auth, (data) => {

            if (data) {
        
                user.value = { uid: data.uid, email: data.email }

                noteStore.getNotes();

            } else {
                
                user.value = {};
            }
        });
    }

    const registerUser = (creds) => {

        errorMessage.value = "";

        createUserWithEmailAndPassword(auth, creds.email, creds.password).then((response) => {
        
            router.push({ name: 'notes' });
            
        }).catch((error) => {

            errorMessage.value = error.message;
        });
    }

    const signInUser = (creds) => {

        errorMessage.value = "";

        signInWithEmailAndPassword(auth, creds.email, creds.password).then((userCredential) => {
           
            router.push({ name: 'notes' });
            
        }).catch((error) => {
            
            errorMessage.value = error.message;
        });
    }

    const logOut = () => {

        signOut(auth).then(() => {

            router.replace({ name: 'auth' });

            noteStore.clearNotes()
        
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
        user,
        init,
        registerUser,
        errMessage,
        clearError,
        signInUser,
        logOut
    }
})