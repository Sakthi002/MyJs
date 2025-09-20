import { createApp } from 'vue'
import App from './App.vue'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import NotFound from './pages/NotFound.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Posts from './pages/Posts.vue'
import Post from './pages/Post.vue'
import LeftSidebar from './components/LeftSidebar.vue'
import RightSidebar from './components/RightSidebar.vue'
import Blog from './pages/Blog.vue'
import Search from './pages/Search.vue'
import Admin from './pages/Admin.vue'

const routes = [
    { 
        path: '/', 
        component: Home,
        props: { name : 'Sakthi Vue Dev' } 
    },

    { 
        path: '/about', 
        components: {
            default: About,
            left: LeftSidebar,
            right: RightSidebar
        },
        props: { default : true, left: false, right: false }
    },

    { 
        path: '/blogs/:id', 
        name: 'blogs',
        components: {
            default: Blog,
            left: LeftSidebar,
            right: RightSidebar
        },
        props: { default : true, left: false, right: true }
    },
    
    { 
        path: '/articles', 
        component: Posts,
        name: 'posts',
        children: [
            {
                path: ':id',
                component: Post,
                name: 'post',
                props: true
            }
        ]
    },
     { 
        path: '/search', 
        component: Search,
        props: (route) => ({ query: route.query.q })
    },

    {
        path: '/admin',
        name: 'admin',
        component: Admin,
        beforeEnter: requireAccess
    },

    // { path: '/posts/:id', component: Post },
    { path: '/:pathMatch(.*)', component: NotFound}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

function requireAccess(to, from, next) {
    next(true);
}

const authAccess = (to) => {

    return new Promise((resolve, reject) => {

        if(to.path.includes('articles') || to.path.includes('notfound')) {
           
            resolve(true)
        
        } else {
        
            resolve(false)
        }   
    })
}

router.beforeEach(async (to, from, next) => {
    
    // const hasAccess = await authAccess(to);
    
    // if(!hasAccess) return { path: '/notfound' }
 
    // else true;

    next(true)
})

router.beforeResolve(async (to) => {

    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    
    app.provide('postsValue', await response.json());
})

const app = createApp(App);
app.use(router);
app.mount('#app')
