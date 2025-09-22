import { createApp } from 'vue'
import App from './App.vue'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Posts from './pages/Posts.vue'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import Counter from './pages/Counter.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/posts',
        name: 'posts',
        component: Posts
    },
    {
        path: '/counter',
        name: 'counter',
        component: Counter
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const pinia = createPinia();

const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount('#app');
