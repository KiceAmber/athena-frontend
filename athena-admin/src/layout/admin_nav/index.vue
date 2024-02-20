<script setup lang="ts">
// import { useRouter } from "vue-router";
import useTabsStore from "@/store/modules/tabs.ts";

// 已经打开的标签页列表
let tabsStore = useTabsStore();

</script>

<template>
	<div class="admin-nav">
		<div class="nav-tag">
			<el-tag
				v-for="item in tabsStore.openedTabs"
				:key="item"
				size="large"
				effect="light"
				closable
			>
				标签
			</el-tag>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.admin-nav {
	padding: 20px 20px;
	.nav-tag {
		.el-tag {
			color: rgb(0, 0, 0);
			margin-right: 10px;
			&:hover {
				cursor: pointer;
			}
		}
	}
}
</style>