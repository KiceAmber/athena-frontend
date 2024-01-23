<script setup lang="ts">
const tagListData = [
    {
        tag_id: "1",
        tag_name: "Golang",
        is_alive: "启用"
    },
    {
        tag_id: "2",
        tag_name: "Rust",
        is_alive: "启用"
    },
    {
        tag_id: "3",
        tag_name: "Java",
        is_alive: "未启用"
    }
]
</script>

<template>
    <div class="tag-list-box">
        <el-table :data="tagListData" style="width: 100%">
            <el-table-column prop="tag_id" label="标签ID" width="auto" />
            <el-table-column prop="tag_name" label="标签名称" width="auto" />
            <el-table-column prop="is_alive" label="是否启用" width="auto" />
        </el-table>

    </div>
</template>

<style lang="scss" scoped>
.tag-list-box {
    width: 100%;
    height: auto;
    border-radius: 4px;
    border: rgba(28, 26, 26, 0.1) solid 1px;
}
</style>
