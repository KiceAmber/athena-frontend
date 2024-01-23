<script setup lang="ts">
import { Files, CollectionTag } from "@element-plus/icons-vue"
</script>

<template>
    <el-menu class="el-menu-vertical-demo" text-color="#fff" background-color="#191A23" active-text-color="#ffd04b" router>
        <el-menu-item index="/article/list">
            <el-icon>
                <Files />
            </el-icon>
            <template #title>文章管理</template>
        </el-menu-item>
        <el-menu-item index="/tag/list">
            <el-icon>
                <CollectionTag />
            </el-icon>
            <template #title>标签管理</template>
        </el-menu-item>
    </el-menu>
</template>

<style lang="scss" scoped>
.el-menu-vertical-demo {
    color: white;
    height: 100vh;
}
</style>
