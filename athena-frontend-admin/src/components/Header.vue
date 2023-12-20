<script setup lang="ts">
import { useSidebarStore } from '@/store/sidebar';

import imgurl from "@/assets/img/avatar.jpg";
// collapse 状态由 pinia 来管理
const sidebar = useSidebarStore();
const collapseChange = () => {
    sidebar.handleCollapse(); 
} 

// 用户名获取
// const username: string | null = localStorage.getItem("username");
const username: string = "tom";

// 消息数量
const messageCount: number = 3;

</script>

<template>
    <div class="header">
        <div class="collapse-btn" @click="collapseChange">
            <el-icon v-if="sidebar.collapse"><Expand /></el-icon>
            <el-icon v-else><Fold /></el-icon>
        </div>
        <div class="logo">后台管理系统</div>
        <div class="header-right">
            <div class="header-user">
                <!-- 用户消息中心 -->
                <div class="btn-bell">
                    <el-tooltip 
                        effect="dark" 
                        placement="bottom" 
                        :content="messageCount ? `有${messageCount}条未读消息` : `消息中心`"
                    >
                        <el-icon :size="21"><Bell/></el-icon> 
                    </el-tooltip>
                </div>
                <!-- 用户头像 -->
                <el-avatar class="user-avatar" :size="40" :src="imgurl"/>
                                        
                <!-- 用户下拉菜单 -->
                <el-dropdown class="user-name" trigger="click">
                    <span class="el-dropdown-link">
                        {{ username }}
                        <el-icon class="el-icon--right">
                            <arrow-down />
                        </el-icon>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>个人中心</el-dropdown-item>
                            <el-dropdown-item divided>退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.header {
    display: relative;
    box-sizing: border-box;
    width: 100%;
    height: 60px;
    font-size: 18px;
    color: rgb(255, 255, 255);

    .logo {
        float: left;
        width: 250px;
        line-height: 60px;
    }
    .collapse-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        float: left;
        padding: 0 20px;
        cursor: pointer;
    }

    .header-right {
        float: right;    
        padding-left: 50px;
        .header-user {
            display: flex;
            height: 60px;
            align-items: center;
            margin-right: 30px;

            .btn-bell {
                display: flex;
                margin-right: 20px;
            }

            .user-name {
                margin-left: 10px;

                .el-dropdown-link {
                    display: flex;
                    align-items: center;
                    color: #fff;
                    font-size: 16px;
                    cursor: pointer;
                }
            }
        }
    }
}
</style>