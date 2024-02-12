<script setup lang="ts">
const tableData = [
    {
        title: "博弈论",
        articleTag: ["杂谈", "其他"],
        articleCategory: "杂谈",
    },
]
</script>

<template>
    <div class="article-list-box">
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="title" label="文章标题" width="auto"/>
            <el-table-column prop="articleTag" label="文章标签" width="auto"/>
            <el-table-column prop="articleCategory" label="文章分类" width="auto"/>
        </el-table>
    </div>
</template>

<style lang="scss" scoped>
.article-list-box {
    width: 100%;
    height: auto;
    border-radius: 4px;
    border: rgba(28, 26, 26, 0.1) solid 1px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
}
</style>
