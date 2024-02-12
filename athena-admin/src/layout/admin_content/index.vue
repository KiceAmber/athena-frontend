<script lang="ts" setup></script>
<template>
	<div class="admin-content">
		<div class="line">
			<router-view />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.admin-content {
	padding: 0 20px;

	.line {
		padding: 0 10px;
	}
}
</style>