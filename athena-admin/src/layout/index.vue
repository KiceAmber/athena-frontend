<script setup lang="ts">
import AdminMenu from "@/layout/admin_menu/index.vue";
import AdminTop from "@/layout/admin_nav/index.vue";
import AdminContent from "@/layout/admin_content/index.vue";
</script>

<template>
    <div class="container">
        <div class="left">
            <AdminMenu/>
        </div>
        <div class="right">
            <AdminTop/>
            <AdminContent/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    display: flex;

    .right {
        width: 100%;
        margin: 40px 60px;
        border: 1px solid transparent;
        background-color: rgba(238, 238, 238, 0.801);
        border-radius: 5px;
        box-shadow: 0px 2px 10px rgb(90, 90, 90);
        backdrop-filter: blur(20px);
    }

    &::before {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -999;
        content: "";
        width: 100%;
        height: 100%;
        // background: linear-gradient(60deg, rgb(252, 216, 255), rgb(255, 141, 160));
        background: url("https://s11.ax1x.com/2024/02/13/pF8tI0A.jpg") center no-repeat;
    }
}
</style>