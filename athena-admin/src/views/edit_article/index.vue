<script lang="ts" setup>
import { reqAddArticle } from "@/api/article";
import { AddArticleRes } from "@/api/article/type";
import { reqGetTagList } from "@/api/tag";
import { TagItem, TagListResponseData } from "@/api/tag/type";
import { ElMessage } from "element-plus";
import { MdEditor } from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import { ref } from "vue";

const editor = ref("Hello, Editor.");
const title = ref("");
const authorId = ref(1);

// 文章选项对话框
const dialogVisible = ref(false);

// 获取标签的请求
const selectedTagList = ref<number[]>(); // 已选中的标签数组，这里使用 number[]，因为后台需要的是 id
const fetchTagList = ref<TagItem[]>(); // 从后台请求得到的标签数组

const getTagListData = async () => {
	let res: TagListResponseData = await reqGetTagList();
	if (res.code == 0) {
		fetchTagList.value = res.data.tagList;
	}
};

// 发布文章请求
const postArticle = async () => {
	let res: AddArticleRes = await reqAddArticle({
		title: title.value,
		content: editor.value,
		authorId: authorId.value,
		tagList: selectedTagList.value as number[],
	});

	if (res.code == 0) {
		console.log(`output-res`, res);
		dialogVisible.value = false;
		ElMessage({
			message: "发布文章成功",
			type: "success",
		});
	} else {
		ElMessage({
			message: "发布文章失败",
			type: "error",
		});
	}
};

// 重置内容
const clearContent = () => {
	editor.value = "";
}
</script>

<template>
	<div class="editor-container">
		<div class="title-input">
			<span> 文章标题 </span>
			<input type="text" v-model="title" />
		</div>

		<MdEditor v-model="editor"></MdEditor>
		<div class="submit-btn">
			<el-button
				type="primary"
				size="large"
				@click="dialogVisible = true"
			>
				发布
			</el-button>
			<el-button type="danger" size="large" @click="clearContent"> 重置内容 </el-button>
		</div>

		<el-dialog v-model="dialogVisible" title="发布文章">
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
					<el-select
						@focus="getTagListData"
						v-model="selectedTagList"
						multiple
						style="width: 50%"
					>
						<el-option
							v-for="item in fetchTagList"
							:key="item.id"
							:label="item.name"
							:value="item.id"
						/>
					</el-select>
				</div>
			</div>
			<template #footer>
				<div class="dialog-footer">
					<el-button @click="dialogVisible = false">取消</el-button>
					<el-button type="primary" @click="postArticle">
						确认发布
					</el-button>
				</div>
			</template>
		</el-dialog>
	</div>
</template>

<style lang="scss" scoped>
.editor-container {
	.title-input {
		width: 100%;
		display: flex;
		align-items: center;
		font-size: 18px;
		margin: 20px 0;

		span {
			margin: 0 10px;
		}

		input {
			width: 100vh;
			background-color: transparent;
			border: 2px solid #837a7a5a;
			outline: none;
			transition: border 0.3s linear 0s;

			&:focus {
				border: 2px solid rgb(182, 182, 255);
			}
		}
	}

	.submit-btn {
		margin-top: 20px;
	}
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
	}
}
</style>