<script setup lang="ts">
import AdminMenu from "@/layout/admin_menu/index.vue";
import AdminTop from "@/layout/admin_nav/index.vue";
import AdminContent from "@/layout/admin_content/index.vue";
</script>

<template>
	<div class="container">
		<div class="left">
			<AdminMenu />
		</div>
		<div class="right">
			<AdminTop />
			<AdminContent />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.container {
	display: flex;
	.right {
		width: 100%;
		margin: 50px 60px;
		border: 1px solid transparent;
		background-color: rgba(255, 255, 255, 0.847);
		border-radius: 5px;
		box-shadow: 0px 2px 10px rgb(75, 106, 70);
	}

	&::before {
		position: absolute;
		top: 0;
		left: 0;
		z-index: -999;
		content: "";
		width: 100%;
		height: 100%;
		background: url("https://s11.ax1x.com/2024/02/11/pF3zg2j.jpg") center
			no-repeat;
		filter: blur(5px);
	}
}
</style>