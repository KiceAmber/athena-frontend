<script setup lang="ts">
import Topbar from './components/Topbar.vue'
import Sidebar from "@/components/Sidebar.vue";
</script>

<template>
    <el-container>
        <el-aside width="200px">
            <Sidebar />
        </el-aside>
        <el-container>
            <el-header>
                <Topbar />
            </el-header>
            <el-main>
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</template>

<style lang="scss"></style>
