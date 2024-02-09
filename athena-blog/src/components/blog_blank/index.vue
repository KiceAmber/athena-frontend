<script lang="ts" setup>
import {ref, onMounted, onBeforeUnmount} from 'vue';

const maxScrollDistance = 100; // 滚动条滚动超过该范围，div 元素就不会移动
const scrollDiv = ref<HTMLDivElement | null>(null);
let marginTop = ref(100);

// 滚动条移动时，`blog-blank` 元素随之滚动
// 这里的思路是：div 滚动的距离最大为 100
// 当滚动条的 scrollY 位置处于 0～100 之间时，就取反，因为 div 元素要向上动
// 而且这里因为设置了阴影，最后 window.scrollY == 0 时，为了防止阴影的效果，直接将 marginTop.value 的值设置为 20
// 这样就不会当滚动到最顶端时，banner 的下部分出现阴影
const handleScroll = () => {
    if (window.scrollY > 0 && window.scrollY <= maxScrollDistance) {
        marginTop.value = -window.scrollY;
    }
    if (window.scrollY == 0) {
        marginTop.value = 20;
    }
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});

</script>

<template>
    <div class="blog-blank" ref="scrollDiv" :style="{marginTop: `${marginTop}px`}">
        <!--    <div class="blog-blank" ref="scrollDiv">-->
        <div class="content">
            <center><h1>这是文章列表</h1></center>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.blog-blank {
    display: flex;
    justify-content: center;

    .content {
        width: 1300px;
        min-height: 300px;
        border-radius: 6px;
        background-color: white;
        box-shadow: 0 4px 18px #6a6767;
    }
}
</style>