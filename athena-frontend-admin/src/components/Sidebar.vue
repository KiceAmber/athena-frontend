<script setup lang="ts">
import { useSidebarStore } from '@/store/sidebar';    
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const sidebar = useSidebarStore();

const route = useRoute();
const onRoutes = computed(() => {
    return route.path;
})

const items = [
    {
        icon: "Odometer",
        index: "/dashboard",
        title: "后台首页",
    },
    {
        icon: "Collection",
        index: "/article",
        title: "文章管理",
        subs: [
            {
                index: "/list",
                title: "文章列表",
            },
            {
                index: "/operation",
                title: "编写文章",
            }
        ]
    },
    {
        icon: "Lock",
        index: "/permission",
        title: "权限管理"
    },
    {
        icon: "Menu",
        index: "/menu",
        title: "菜单管理",
    }
];
</script>

<template>
    <div class="sidebar">
        <el-menu 
            class="el-menu-sidebar"
            :default-active="onRoutes"
            :collapse="sidebar.collapse"
            background-color="#324157"
            text-color="#fff"
            active-text-color="#20a0ff"
            unique-opened
            router
        >

        <template v-for="item in items">
                <template v-if="item.subs">
                    <el-sub-menu :index="item.index" :key="item.index" v-permiss="item.permiss">
                        <template #title>
                            <el-icon>
                                <component :is="item.icon"></component>
                            </el-icon>
                            <span>{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-sub-menu
                                v-if="subItem.subs"
                                :index="subItem.index"
                                :key="subItem.index"
                                v-permiss="item.permiss"
                            >
                                <template #title>{{ subItem.title }}</template>
                                <el-menu-item v-for="(threeItem, i) in subItem.subs" :key="i" :index="threeItem.index">
                                    {{ threeItem.title }}
                                </el-menu-item>
                            </el-sub-menu>
                            <el-menu-item v-else :index="subItem.index" v-permiss="item.permiss">
                                {{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-sub-menu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index" v-permiss="item.permiss">
                        <el-icon>
                            <component :is="item.icon"></component>
                        </el-icon>
                        <template #title>{{ item.title }}</template>
                    </el-menu-item>
                </template>
            </template>
        </el-menu> 
    </div>
</template>

<style lang="less" scoped>

.sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 60px;
    bottom: 0;
    overflow-y: scroll;
}

.sidebar::-webkit-scrollbar {
    width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
}
.sidebar > ul {
    height: 100%;
}
</style>