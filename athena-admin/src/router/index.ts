import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: "/",
        redirect: "/login",
    },
    {
        path: "/login",
        component: () => import("@/views/login/index.vue"),
    },
    {
        path: "/admin",
        component: () => import("@/layout/index.vue"),
        redirect: "/admin/dashboard",
        children: [
            {
                path: "dashboard",
                component: () => import("@/views/dashboard/index.vue"),
            },
            {
                path: "article",
                component: () => import("@/views/article/index.vue"),
            },
            {
                path: "category",
                component: () => import("@/views/category/index.vue"),
            },
            {
                path: "tag",
                component: () => import("@/views/tag/index.vue"),
            },
            {
                path: "picture",
                component: () => import("@/views/picture/index.vue"),
            },
            {
                path: "edit",
                component: () => import("@/views/edit_article/index.vue"),
            },
        ]
    },
]

export default createRouter({
    history: createWebHistory(),
    routes,
})
