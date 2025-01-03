import { createRouter, createWebHistory } from 'vue-router';
import Login from './components/Login.vue';
import Register from './components/Register.vue';

const routes = [
    {
        path: '/Login',
        component: Login,
        meta: { public : true },
    },
    {
        path: '/Register',
        component: Register,
        meta: { public : true },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const isAuthenticated= !!localStorage.getItem('token');
    if(!to.meta.public && !isAuthenticated) {
        return next({name: 'Login'});
    }else{
        next();
    }
});
export default router;

