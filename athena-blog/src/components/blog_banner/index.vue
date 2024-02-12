<script lang="ts" setup>

</script>

<template>
    <div class="blog-banner">
        <div class="pic">
            <div class="page-title">
                <span>This is page title</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.blog-banner {
    .pic {
        width: 100%;
        height: 100vh;
        z-index: -999;
        background-image: url("http://kiceamber.top/img/default.png");
        background-size: cover;
        background-repeat: repeat-y;
        background-position: center;
        background-attachment: fixed;

        .page-title {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 36px;
            color: white
        }
    }

}
</style>
