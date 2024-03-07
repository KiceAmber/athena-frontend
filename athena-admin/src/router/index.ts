import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/layout/index.vue";

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
        component: Layout,
        redirect: "/admin/dashboard",
        children: [
            {
                path: "dashboard",
                name: "dashboard",
                component: () => import("@/views/dashboard/index.vue"),
                meta: { title: "仪表盘", icon: "Odometer" },
            },
            {
                path: "category",
                name: "category",
                component: () => import("@/views/category/index.vue"),
                meta: { title: "分类管理", icon: "Wallet" },
            },
            {
                path: "tag",
                name: "tag",
                component: () => import("@/views/tag/index.vue"),
                meta: { title: "标签管理", icon: "PriceTag" },
            },
            {
                path: "picture",
                name: "picture",
                component: () => import("@/views/picture/index.vue"),
                meta: { title: "图片管理", icon: "Picture" },
            },
            {
                path: "edit",
                name: "edit",
                component: () => import("@/views/edit_article/index.vue"),
                meta: { title: "发布文章", icon: "Document" },
            },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, _, next) => {
    if (to.path == "/login") {
        next();
    } else {
        if (!localStorage.getItem("gtoken")) {
            router.push("/login")
        } else {
            next();
        }
    }
})

export default router;