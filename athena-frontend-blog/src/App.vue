<script setup lang="ts">
import { ElConfigProvider } from "element-plus";
import zhCN from "element-plus/es/locale/lang/zh-cn";
</script>

<template>
	<el-config-provider :locale="zhCN">
		<router-view />
	</el-config-provider>
</template>

<style>
@import "@/assets/css/common.css";
@import "@/assets/css/dark-theme.css";
</style>
