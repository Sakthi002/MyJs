import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth', {
  
    state: ()=> ({
        user: null,
        token: null,
    }),

    getters: {

        isLoggedIn : (state) => state.user
    },

    actions: {

        async getUser() {

            try {

            } catch(err) {
                
            }
        }
    }
})