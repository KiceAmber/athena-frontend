<script setup lang="ts">
import { ref } from 'vue';
// 分类数据集

// 标签数据集
const tag = ref("");

const tagList = [
	{
		value: "Option1",
		label: "Option1",
	},
	{
		value: "Option2",
		label: "Option2",
	},
	{
		value: "Option3",
		label: "Option3",
	},
	{
		value: "Option4",
		label: "Option4",
	},
	{
		value: "Option5",
		label: "Option5",
	},
];
</script>

<template>
	<div class="dialog-content">
		<div class="category-option">
			选择分类：
			<ul>
				<li>后端</li>
				<li>后端</li>
				<li>后端</li>
				<li>前端</li>
				<li>后端</li>
				<li>前端</li>
			</ul>
		</div>
		<div class="tag-option">
			添加标签：
			<el-select v-model="tag" multiple style="width: 800px">
				<el-option
					v-for="item in tagList"
					:key="item.value"
					:label="item.label"
                    :value="item.value"
				/>
			</el-select>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.dialog-content {
	display: flex;
	flex-direction: column;
	flex: 1;
	font-size: 18px;

	.category-option {
		display: flex;
		align-items: center;
		margin: 30px 0;
		ul {
			display: flex;

			li {
				background-color: #f1c7c791;
				margin: 5px 5px;
				padding: 3px 18px;
				border-radius: 3px;

				&:hover {
					cursor: pointer;
					background: rgb(192, 221, 197);
				}
			}
		}
	}

	.tag-option {
	}

	.article-picture {
	}
}
</style>