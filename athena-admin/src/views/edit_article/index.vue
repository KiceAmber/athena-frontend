<script lang="ts" setup>
import DialogContent from "@/views/edit_article/dialog_content/index.vue";
import { MdEditor } from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import { ref } from "vue";

const editor = ref("Hello, Editor.");
const title = ref("");

// 文章选项对话框
const dialogVisible = ref(false);
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
			<el-button type="danger" size="large"> 重置内容 </el-button>
		</div>

		<el-dialog v-model="dialogVisible" title="发布文章">
            <DialogContent/>
			<template #footer>
				<div class="dialog-footer">
					<el-button @click="dialogVisible = false">取消</el-button>
					<el-button type="primary" @click="dialogVisible = false">
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
}
</style>