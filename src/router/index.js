import {createWebHistory,createRouter} from "vue-router"
import HomePage from '../views/Home.vue'
import SearchVue from '../views/Search.vue'
import PostPage from '../views/Posts.vue'
import CallbackPage from '../views/CallbackPage.vue'
const routes =[
    {
        name:"HomePage",
        path:"/",
        component:HomePage,
    },
    {
        name:"SearchPage",
        path:"/search",
        component:SearchVue
    },
    {
        name:"PostPage",
        path:"/posts",
        component:PostPage
    },
    {
        name:"CallbackPage",
        path:"/callback",
        component:CallbackPage
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router