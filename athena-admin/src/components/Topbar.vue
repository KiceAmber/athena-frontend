<script setup lang="ts">

</script>

<template>
	<div class="topbar">
		<el-page-header @back="goBack">
			<template #content>
				<span class="text-large font-600 mr-3"> Header Bar </span>
			</template>
		</el-page-header>
	</div>
</template>

<style lang="scss" scoped>
.topbar {
	background-color: aquamarine;
}
</style>
