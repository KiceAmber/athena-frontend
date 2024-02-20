<script setup lang="ts">
import InfoCard from "@/views/dashboard/info_card/index.vue";
import HeatTable from "@/views/dashboard/heat_table/index.vue";
</script>

<template>
	<div class="dashboard-container">
		<el-row>
			<el-col :span="16">
				<InfoCard />
				<HeatTable/>	
			</el-col>
			<el-col :span="8"> <el-card> 更新日志 </el-card></el-col>
		</el-row>
	</div>
</template>

<style lang="scss" scoped>
.dashboard-container {
}
</style>