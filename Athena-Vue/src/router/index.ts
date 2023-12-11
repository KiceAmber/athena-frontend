import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";

const routes: RouteRecordRaw = [
    {
        path: "/",
        redirect: "/dashboard",
    },
    // {
    //     path: "/",
    //     name: "Home",
    //     component: Home,
    //     children: [

    //     ],
    // },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;