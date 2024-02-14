<script setup lang="ts">
import { Ref, onMounted, reactive, ref } from "vue";
import {
	reqAddTag,
	reqDeleteTag,
	reqGetTagList,
	reqUpdateTag,
} from "@/api/tag";
import { ElMessage, ElMessageBox } from "element-plus";
import {
	AddTagReq,
	AddTagRes,
	DeleteTagReq,
	DeleteTagRes,
	GetTagListRes,
	Tag,
	UpdateTagReq,
	UpdateTagRes,
} from "@/api/tag/type";

onMounted(() => {
	getTagListData();
});

// 获取标签数据
const tagList: Ref<Tag[]> = ref([]);
const formatter = (row: Tag) => {
	// 处理获取到的数据，比如 1 转化称 true
	return row.isVisible == 1 ? "是" : "否";
};
const getTagListData = async () => {
	let res: GetTagListRes = await reqGetTagList();
	if (res.code == 0) {
		tagList.value = res.data.tagList;
	} else {
		ElMessage({
			message: "获取标签失败",
			type: "error",
		});
	}
};

// 添加标签
const addTagDialogFormVisible: Ref<boolean> = ref(false); // 弹出对话框是否可见
const tagVisibleOptions = [
	{
		value: 0,
		label: "不可见",
	},
	{
		value: 1,
		label: "可见",
	},
];
const addTagForm: AddTagReq = reactive({
	// 对话框中的表单，用于添加标签
	id: 0,
	name: "",
	isVisible: 1,
});
const submitAddTagForm = async (addTagReq: AddTagReq) => {
	// 提交表单数据
	const reqName = addTagReq.name;
	// 对 tagName 字符串检查，是否存在特殊字符，比如 + / % 等等字符
	addTagReq.name = encodeURIComponent(addTagReq.name);

	let res: AddTagRes = await reqAddTag(addTagReq);
	if (res.code == 0) {
		ElMessage({
			message: "添加新标签成功",
			type: "success",
		});
		getTagListData(); // 重新获取一次数据
		addTagDialogFormVisible.value = false;
		addTagForm.name = "";
	} else if (res.code == 50) {
		ElMessage({
			message: "该标签已存在",
			type: "error",
		});
		addTagReq.name = reqName;
	}
};

// 删除标签
const deleteTag = (deleteTagReq: DeleteTagReq) => {
	ElMessageBox.confirm("确定要删除该标签吗？", "提示", {
		confirmButtonText: "确定",
		cancelButtonText: "取消",
		type: "warning",
	}).then(async () => {
		// 发送删除请求
		let res: DeleteTagRes = await reqDeleteTag(deleteTagReq);
		if (res.code == 0) {
			ElMessage({
				type: "success",
				message: "删除成功",
			});
			getTagListData();
		} else {
			ElMessage({
				type: "error",
				message: "删除失败",
			});
		}
	});
};

// 更新标签
const updateTagDialogFormVisible: Ref<boolean> = ref(false);
const updateTagForm: UpdateTagReq = reactive({
	id: 0,
	name: "",
	isVisible: 1,
}); // 修改标签的对话框表单
const editTag = (row: UpdateTagReq) => {
	updateTagDialogFormVisible.value = true;
	updateTagForm.id = row.id;
	updateTagForm.name = row.name;
	updateTagForm.isVisible = row.isVisible;
};
const submitUpdateTagForm = async (updateTagReq: UpdateTagReq) => {
	const reqName = updateTagReq.name;
	// 对 tagName 字符串检查，是否存在特殊字符，比如 + / % 等等字符
	updateTagReq.name = encodeURIComponent(updateTagReq.name);
	let res: UpdateTagRes = await reqUpdateTag(updateTagReq);
	if (res.code == 0) {
		ElMessage({
			message: "修改标签成功",
			type: "success",
		});
		getTagListData();
		updateTagDialogFormVisible.value = false;
	} else if (res.code == 50) {
		ElMessage({
			message: "该标签已存在",
			type: "error",
		});
		updateTagReq.name = reqName;
	}
};
</script>

<template>
	<div class="tag-list">
		<div class="btn-create-tag">
			<el-button type="primary" @click="addTagDialogFormVisible = true"
				>添加标签</el-button
			>
			<el-dialog v-model="addTagDialogFormVisible" title="添加新标签">
				<el-form :model="addTagForm">
					<el-form-item label="标签名称">
						<el-input
							v-model="addTagForm.name"
							placeholder="请输入要添加的标签"
							autocomplete="off"
						/>
					</el-form-item>
					<el-form-item label="是否可见">
						<el-select v-model="addTagForm.isVisible">
							<el-option
								v-for="item in tagVisibleOptions"
								:key="item.value"
								:value="item.value"
								:label="item.label"
							>
							</el-option>
						</el-select>
					</el-form-item>
				</el-form>
				<template #footer>
					<span class="dialog-footer">
						<el-button @click="addTagDialogFormVisible = false"
							>取消</el-button
						>
						<el-button
							type="primary"
							@click="submitAddTagForm(addTagForm)"
						>
							确认
						</el-button>
					</span>
				</template>
			</el-dialog>
		</div>
		<div class="tag-list-table">
			<el-table :data="tagList" style="width: 100%">
				<el-table-column prop="name" label="标签名称" width="auto" />
				<el-table-column
					prop="isVisible"
					label="是否可见"
					width="auto"
					:formatter="formatter"
				/>
				<el-table-column
					prop="createdAt"
					label="创建时间"
					width="auto"
				/>
				<el-table-column fixed="right" label="操作" width="auto">
					<template #default="scope">
						<el-button
							type="danger"
							size="small"
							plain
							@click="deleteTag({ id: scope.row.id })"
							>删除</el-button
						>
						<el-button
							type="primary"
							size="small"
							plain
							@click="editTag(scope.row)"
							>编辑</el-button
						>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<el-dialog v-model="updateTagDialogFormVisible" title="编辑标签">
			<el-form :model="updateTagForm">
				<el-form-item label="标签名称">
					<el-input
						v-model="updateTagForm.name"
						placeholder="请输入修改后的标签名称"
						autocomplete="off"
					/>
				</el-form-item>
				<el-form-item label="是否可见">
					<el-select v-model="updateTagForm.isVisible">
						<el-option
							v-for="item in tagVisibleOptions"
							:key="item.value"
							:value="item.value"
							:label="item.label"
						>
						</el-option>
					</el-select>
				</el-form-item>
			</el-form>
			<template #footer>
				<span class="dialog-footer">
					<el-button @click="updateTagDialogFormVisible = false"
						>取消</el-button
					>
					<el-button
						type="success"
						@click="submitUpdateTagForm(updateTagForm)"
					>
						确认
					</el-button>
				</span>
			</template>
		</el-dialog>
	</div>
</template>

<style lang="scss" scoped>
.btn-create-tag {
	margin-bottom: 10px;
}

.tag-list-table {
	width: 100%;
	height: auto;
	border-radius: 4px;
	border: rgba(28, 26, 26, 0.1) solid 2px;
}
</style>