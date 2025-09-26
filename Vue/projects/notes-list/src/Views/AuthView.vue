<template>

    <div>

        <div class="tabs is-centered">
         
            <ul>
         
                <li :class="{ 'is-active' : !register}"><a @click.prevent="register = false">Login</a></li>
         
                <li :class="{ 'is-active' : register}"><a @click.prevent="register = true">Register</a></li>
            </ul>
        </div>

        <form @submit.prevent="onSubmit">

            <div class="card auth-form">

                <div class="card-content">
                
                    <div class="title has-text-centered">{{ formTitle }}</div>
                 
                    <div v-if="displayError" class="notification is-danger is-light">
                        <button class="delete" @click="clearErrors"></button>
                        {{ displayError }}
                    </div>
                    
                    <div class="content">
                   
                        <div class="field">
                            
                            <label class="label">Email</label>
                            
                            <div class="control">

                                <input class="input" type="email" placeholder="Email address..." v-model="creds.email">
                            </div>
                        </div>

                        <div class="field">
                        
                            <label class="label">Password</label>
                        
                            <div class="control">
                        
                                <input class="input" type="password" placeholder="Password..." v-model="creds.password">
                            </div>
                        </div>

                        <div class="field is-grouped is-grouped-right">

                            <p class="control">
                            
                                <button class="button is-danger">{{ formTitle }}</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>

    import { useAuthStore } from '@/stores/AuthStore';
    
    import { storeToRefs } from 'pinia';

    import { computed, reactive, ref, watch } from 'vue';

    const authStore = useAuthStore();

    const { errMessage } = storeToRefs(authStore);

    const register = ref(false);

    const formTitle = computed(() => {

        return register.value ? 'Register' : 'Login'
    });

    const creds = reactive({
        email: '',
        password: ''
    })

    const errorMessage = ref("");

    const displayError = computed(() => {

        return errMessage.value || errorMessage.value;
    })

    const onSubmit = () => {
        
        errorMessage.value = "";

        authStore.clearError();

         if (!creds.email.trim() || !creds.password.trim()) {
   
            errorMessage.value = 'Please enter email and password!';
   
            return;
        }

        if(register.value) {

            authStore.registerUser(creds);
        
        } else {

            console.log('do login', creds);
        }
    }

    const clearErrors = () => {

        errorMessage.value = "";

        authStore.clearError();
    }

    watch(register, (newValue) => {

        creds.email = "";

        creds.password = "";
        
        errorMessage.value = "";

        authStore.clearError();
    })
</script>

<style scoped>
    .auth-form {
        max-width: 500px;
        margin: 0 auto;
    }
</style>