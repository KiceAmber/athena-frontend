<script lang="ts" setup>
import Vditor from 'vditor'
import 'vditor/dist/index.css';
import {ref, onMounted} from 'vue';
import {reqAddArticle} from "@/api/article";

const vditor = ref();
onMounted(() => {
    vditor.value = new Vditor('vditor', {
        height: '100%',
        width: '85vw',
        placeholder: "尽情释放你的创意！",
    })
})

// 发布文章
const postArticle = async () => {
    // 初始化要发送的 json 数据对象
    // let res = await reqAddArticle({
    //     title:
    // })
}

</script>

<template>
    <div id="vditor"></div>
    <div class="bottom">
        <el-button class="btn-add-article" type="success" @click="postArticle">发布文章</el-button>
    </div>
</template>

<style lang="scss" scoped>
.bottom {
    display: flex;
    justify-content: flex-end;
}

.btn-add-article {
    margin-top: 20px;
}
</style>