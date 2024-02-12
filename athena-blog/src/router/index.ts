import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: "/",
        redirect: "/home",
    },
    {
        path: "/home",
        component: () => import("@/views/home/index.vue"),
    },
    {
        path: "/archive",
        component: () => import("@/views/archive/index.vue"),
    },
    {
        path: "/tag",
        component: () => import("@/views/tag/index.vue"),
    },
    {
        path: "/category",
        component: () => import("@/views/category/index.vue"),
    },
    {
        path: "/about",
        component: () => import("@/views/about/index.vue"),
    }
]

export default createRouter({
    history: createWebHistory(),
    routes,
})
