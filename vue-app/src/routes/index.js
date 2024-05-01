import { createRouter, createWebHistory } from "vue-router";
import Home from'../components/HomeComponent.vue';
import Login from'../components/LoginComponent.vue';
import { authGuard } from '../guards/authGuard'; 

const router = createRouter({
    history: createWebHistory(''),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            beforeEnter: authGuard
        },
        // {
        //     path: '/cadastro',
        //     name: 'cadastro',
        //     component: Cadastro,
        // },
        {
            path: '/:catchAll(.*)',
            redirect: () => {
                return '/login';
            }
        }
    ]
});

export default router;