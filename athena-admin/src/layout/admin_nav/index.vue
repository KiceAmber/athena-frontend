<script setup lang="ts">
import { ArrowRight } from "@element-plus/icons-vue";
import { computed } from "vue";
import { useRouter } from "vue-router";

// 过滤掉没有 meta 的路由
const router = useRouter();
const routers = computed(() => {
	return router.currentRoute.value.matched.filter(item => item.meta.title);
});
</script>
<template>
	<div class="admin-nav">
		<div class="breadcrumb">
			<el-breadcrumb :separator-icon="ArrowRight">
				<el-breadcrumb-item
					v-for="item in routers"
					:key="item.path"
					:to="{ path: item?.path }"
				>
					{{ item?.meta?.title }}
				</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.admin-nav {
	padding: 20px 20px;
	.breadcrumb {
		color: rgb(0, 0, 0);
		margin-left: 10px;

		:deep(.el-breadcrumb__inner) {
			color: rgb(67, 75, 68);
			font-size: 15px;
			font-weight: 900;
		}
	}
}
</style>