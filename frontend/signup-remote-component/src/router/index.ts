import {createRouter, createWebHistory} from "vue-router";
import Signup from "../components/Signup.vue";
import MissingAuth from "../components/MissingAuth.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Signup,
        meta: { requiresAuth: true },
    },
    {
        path: '/missing',
        name: 'MissingAuth',
        component: MissingAuth
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})


router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        const token = to.query.token
        if (token == null) {
            next("/missing")
            return
        }
        next()
    } else {
        next();
    }
});

export default router;
