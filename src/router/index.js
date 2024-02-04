import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: "/",
        name: 'home',
        component: ()=> import('../views/home.vue')
    },
    {
        path: "/lazy",
        name: 'lazy',
        component: ()=> import('../views/lazy.vue')
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router