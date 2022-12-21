import {createRouter, createWebHistory} from 'vue-router'

import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
    },
    {
        path: '/user/:id',
        name: 'user',
        component: () => import('../views/UserView.vue')
    },
    {
        path: '/posts',
        name: 'posts',
        component: () => import('../views/PostsView.vue')
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes,
})

export default router
