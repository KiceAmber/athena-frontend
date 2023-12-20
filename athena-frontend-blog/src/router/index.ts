import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";

import Home from "@/views/Home.vue"

const routes: RouteRecordRaw[] = [
    {
        path: "/admin",
        redirect: "/dashboard",
    },
    {
        path: "/admin/",
        name: "Home",
        component: Home,
        children: [
            {
                path: "/dashboard",
                name: "Dashboard",
                component: () => import("@/views/Dashboard.vue"),
            }
        ],
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("@/views/Login.vue"),
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;