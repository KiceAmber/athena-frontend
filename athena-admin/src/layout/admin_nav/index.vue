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
		<div class="line">
			<div class="tip">
				<svg
					t="1707659605615"
					class="icon"
					viewBox="0 0 1024 1024"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					p-id="51073"
					width="16"
					height="16"
				>
					<path
						d="M382.2 165.7H217.4c-47.5 0-86.2 38.7-86.2 86.2v164.8c0 47.5 38.7 86.2 86.2 86.2h164.8c47.5 0 86.2-38.7 86.2-86.2V251.9c0.1-47.6-38.6-86.2-86.2-86.2z m-9.9 241.1h-145v-145h145v145zM382.2 557.6H217.4c-47.5 0-86.2 38.7-86.2 86.2v164.8c0 47.5 38.7 86.2 86.2 86.2h164.8c47.5 0 86.2-38.7 86.2-86.2V643.8c0.1-47.5-38.6-86.2-86.2-86.2z m-9.9 241.1h-145v-145h145v145zM871.6 273.3L755.1 156.8c-16.3-16.3-37.9-25.3-61-25.3-23 0-44.7 9-61 25.3L516.6 273.3c-33.6 33.6-33.6 88.3 0 121.9l116.6 116.5c16.3 16.3 37.9 25.3 61 25.3 23 0 44.7-9 61-25.3l116.6-116.6c33.4-33.4 33.4-88.1-0.2-121.8zM694.1 436.8L591.6 334.3l102.5-102.5 102.5 102.5-102.5 102.5zM776.5 557.6H611.7c-47.5 0-86.2 38.7-86.2 86.2v164.8c0 47.5 38.7 86.2 86.2 86.2h164.8c47.5 0 86.2-38.7 86.2-86.2V643.8c0-47.5-38.7-86.2-86.2-86.2z m-9.9 241.1h-145v-145h145v145z"
						fill="#2c2c2c"
						p-id="51074"
					></path>
				</svg>
				<span>导航</span>
				<!-- <svg
					t="1707658778639"
					class="icon"
					viewBox="0 0 1024 1024"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					p-id="47959"
					width="16"
					height="16"
				>
					<path
						d="M320 0 192 128l384 384-384 384 128 128 512-512L320 0z"
						p-id="47960"
						fill="#2c2c2c"
					></path>
				</svg> -->
			</div>
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
	</div>
</template>

<style lang="scss" scoped>
.admin-nav {
	padding: 20px 20px;
	.line {
		display: flex;
		padding: 0 10px 5px;
		border-bottom: 3px solid black;
		.tip {
			svg {
				vertical-align: middle;
			}
			span {
				margin: 0 12px;
			}
		}

		.breadcrumb {
			color: rgb(0, 0, 0);
			margin-left: 10px;

			:deep(.el-breadcrumb__inner) {
				color: rgb(96, 96, 96);
				font-size: 15px;
			}
		}
	}
}
</style>