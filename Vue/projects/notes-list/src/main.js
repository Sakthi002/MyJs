import { createApp } from 'vue'

import router from './router';

import App from './App.vue'
import { createPinia } from 'pinia';
import { useAuthStore } from './stores/AuthStore';

const pinia = createPinia();

router.beforeEach((to, from) => {

    const authStore = useAuthStore();

    const isAuthenticated = authStore.user.uid;

    if(isAuthenticated && to.name === 'auth') {

        return { name: 'notes' }
    }

    if(!isAuthenticated && to.name !== 'auth') {

        return { name: 'auth' }
    }
});

const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount('#app');
