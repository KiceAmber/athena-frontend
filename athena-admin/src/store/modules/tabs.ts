import {defineStore} from "pinia";

interface TabItem {
    key: number;
    label: string;
    path: string;
}

const useTabsStore = defineStore("tabs", {
    state: () => {
        return {
            openedTabs: [
                {
                    key: 0,
                    label: "主页",
                    path: "/admin/dashboard"
                },
            ], // 默认标签页
        };
    },
    actions: {
        addTabs(tabItem: TabItem) {
            this.openedTabs.push(tabItem);
        },
        removeTabs(key: number) {
            // 如果是最后一个标签，还要删除，那么默认为主页的标签
            if (this.openedTabs.length <= 1) {
                this.openedTabs = [{
                    key: 0,
                    label: "主页",
                    path: "/admin/dashboard"
                }]
            } else {
                this.openedTabs.forEach(item => {
                    if (item.key == key) {
                    }
                })
            }
        },
    },
    getters: {},
});

export default useTabsStore;