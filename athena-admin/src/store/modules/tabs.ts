import { defineStore } from "pinia";

const useTabsStore = defineStore("tabs", {
	state: () => {
		return {
			openedTabs: ["/admin/dashboard"], // 默认标签页
		};
	},
	actions: {
		addTabs(tabItem: any) {},
		removeTabs() {},
	},
	getters: {},
});

export default useTabsStore;