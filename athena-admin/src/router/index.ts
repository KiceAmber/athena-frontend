import {createRouter, createWebHistory} from "vue-router";

const routes = [
	{
		path: "/",
		redirect: "/dashboard",
	},
	{
		path: "/dashboard",
		component: () => import("@/views/Dashboard.vue"),
	},
	{
		path: "/article",
		children: [
			{
				path:"list",
				component: () => import("@/views/article/List.vue")
			},
		],
	},
    {
		path: "/tag",
		children: [
			{
				path:"list",
				component: () => import("@/views/tag/List.vue")
			},
		],

    }
 ]

export default createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior() {
		return {
			left: 0,
			top: 0,
		}
	}
})
