<script setup lang="ts">
import {Files, CollectionTag} from "@element-plus/icons-vue"
</script>

<template>
    <div class="container">
        <el-menu
            class="el-menu-vertical-demo"
            text-color="#000"
            background-color="#fff"
            active-text-color="#ffd04b"
            router
        >
            <el-sub-menu>
                <template #title>
                    <el-icon>
                        <Files/>
                    </el-icon>
                    <span>内容管理</span>
                </template>
                <el-menu-item index="/article/list">
                    文章列表
                </el-menu-item>
                <el-menu-item index="/article/add">
                    创作文章
                </el-menu-item>
            </el-sub-menu>
            <el-menu-item index="/tag/list">
                <el-icon>
                    <CollectionTag/>
                </el-icon>
                <template #title>标签管理</template>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<style lang="scss" scoped>
.container {
    position: fixed;
    padding: 20px 20px;


    .el-menu-vertical-demo {
        border-radius: 6px;
        height: 100%;
    }
}
</style>
