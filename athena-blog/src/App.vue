<script setup lang="ts">
import BlogTop from "@/components/blog_top/index.vue";
import BlogBanner from "@/components/blog_banner/index.vue";
import BlogBlank from "@/components/blog_blank/index.vue";
import BlogBottom from "@/components/blog_bottom/index.vue";
import BlogOperationMenu from "@/components/blog_operation_menu/index.vue";
</script>

<template>
    <div class="container">
        <BlogTop/>
        <BlogBanner/>
        <BlogBlank/>
        <BlogBottom/>
        <BlogOperationMenu/>
    </div>
</template>

<style lang="scss" scoped>
.container {
    background-color: #d5d5d5;
}
</style>
