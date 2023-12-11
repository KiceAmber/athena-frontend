<script setup lang="ts">
import { useSidebarStore } from '@/store/sidebar';
// collapse 状态由 pinia 来管理
const sidebar = useSidebarStore();
const collapseChange = () => {
    sidebar.handleCollapse(); 
} 

// 用户名获取
// const username: string | null = localStorage.getItem("username");

// 消息数量
// const mesage: number = 3;

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
                <!-- 用户信息 -->
                <div class="btn-bell">
                    用户信息
                </div>
                <!-- 用户头像 -->
                <el-avatar class="user-avatar">
                    
                </el-avatar>
                <!-- 用户下拉菜单 -->
                <el-dropdown>

                </el-dropdown>
            </div>
        </div>
    </div>
</template>

<style scoped>
.header {
	position: relative;
	box-sizing: border-box;
	width: 100%;
	height: 70px;
	font-size: 22px;
	color: #ad5c5c;
}
.collapse-btn {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	float: left;
	padding: 0 21px;
	cursor: pointer;
}
</style>