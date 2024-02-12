<script lang="ts" setup>
import {ref} from "vue";

const articleCount = ref(10);
</script>

<template>
    <div class="archive-container">
        <div class="article-count"><span>总共 {{ articleCount }} 篇文章</span></div>
    </div>
</template>

<style lang="scss" scoped>
.archive-container {
    padding: 60px 150px 60px;

    .article-count {
        span {
            font-size: 23px;
            color: #dba92d;
            border-bottom: 3px solid #dba92d;
        }
    }
}
</style>