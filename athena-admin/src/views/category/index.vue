<script setup lang="ts">
import { Ref, onMounted, reactive, ref } from "vue";
import {
	reqAddCategory,
	reqDeleteCategory,
	reqGetCategoryList,
	reqUpdateCategory,
} from "@/api/category";
import { ElMessage, ElMessageBox } from "element-plus";
import {
	AddCategoryReq,
	AddCategoryRes,
	DeleteCategoryReq,
	DeleteCategoryRes,
	GetCategoryListRes,
	Category,
	UpdateCategoryReq,
	UpdateCategoryRes,
} from "@/api/category/type";

onMounted(() => {
	getCategoryListData();
});

// 获取分类数据
const categoryList: Ref<Category[]> = ref([]);
const formatter = (row: Category) => {
	// 处理获取到的数据，比如 1 转化称 true
	return row.isVisible == 1 ? "是" : "否";
};
const getCategoryListData = async () => {
	let res: GetCategoryListRes = await reqGetCategoryList();
	if (res.code == 0) {
		categoryList.value = res.data.categoryList;
	} else {
		ElMessage({
			message: "获取分类失败",
			type: "error",
		});
	}
};

// 添加分类
const addCategoryDialogFormVisible: Ref<boolean> = ref(false); // 弹出对话框是否可见
const categoryVisibleOptions = [
	{
		value: 0,
		label: "不可见",
	},
	{
		value: 1,
		label: "可见",
	},
];
const addCategoryForm: AddCategoryReq = reactive({
	// 对话框中的表单，用于添加分类
	id: 0,
	name: "",
	isVisible: 1,
});
const submitAddCategoryForm = async (addCategoryReq: AddCategoryReq) => {
	// 提交表单数据
	const reqName = addCategoryReq.name;
	// 对 categoryName 字符串检查，是否存在特殊字符，比如 + / % 等等字符
	addCategoryReq.name = encodeURIComponent(addCategoryReq.name);

	let res: AddCategoryRes = await reqAddCategory(addCategoryReq);
	if (res.code == 0) {
		ElMessage({
			message: "添加新分类成功",
			type: "success",
		});
		getCategoryListData(); // 重新获取一次数据
		addCategoryDialogFormVisible.value = false;
		addCategoryForm.name = "";
	} else if (res.code == 50) {
		ElMessage({
			message: "该分类已存在",
			type: "error",
		});
		addCategoryReq.name = reqName;
	}
};

// 删除分类
const deleteCategory = (deleteCategoryReq: DeleteCategoryReq) => {
	ElMessageBox.confirm("确定要删除该分类吗？", "提示", {
		confirmButtonText: "确定",
		cancelButtonText: "取消",
		type: "warning",
	}).then(async () => {
		// 发送删除请求
		let res: DeleteCategoryRes = await reqDeleteCategory(deleteCategoryReq);
		if (res.code == 0) {
			ElMessage({
				type: "success",
				message: "删除成功",
			});
			getCategoryListData();
		} else {
			ElMessage({
				type: "error",
				message: "删除失败",
			});
		}
	});
};

// 更新分类
const updateCategoryDialogFormVisible: Ref<boolean> = ref(false);
const updateCategoryForm: UpdateCategoryReq = reactive({
	id: 0,
	name: "",
	isVisible: 1,
}); // 修改分类的对话框表单
const editCategory = (row: UpdateCategoryReq) => {
	updateCategoryDialogFormVisible.value = true;
	updateCategoryForm.id = row.id;
	updateCategoryForm.name = row.name;
	updateCategoryForm.isVisible = row.isVisible;
};
const submitUpdateCategoryForm = async (updateCategoryReq: UpdateCategoryReq) => {
	const reqName = updateCategoryReq.name;
	// 对 categoryName 字符串检查，是否存在特殊字符，比如 + / % 等等字符
	updateCategoryReq.name = encodeURIComponent(updateCategoryReq.name);
	let res: UpdateCategoryRes = await reqUpdateCategory(updateCategoryReq);
	if (res.code == 0) {
		ElMessage({
			message: "修改分类成功",
			type: "success",
		});
		getCategoryListData();
		updateCategoryDialogFormVisible.value = false;
	} else if (res.code == 50) {
		ElMessage({
			message: "该分类已存在",
			type: "error",
		});
		updateCategoryReq.name = reqName;
	}
};
</script>

<template>
	<div class="category-list">
		<div class="btn-create-category">
			<el-button type="primary" @click="addCategoryDialogFormVisible = true"
				>添加分类</el-button
			>
			<el-dialog v-model="addCategoryDialogFormVisible" title="添加新分类">
				<el-form :model="addCategoryForm">
					<el-form-item label="分类名称">
						<el-input
							v-model="addCategoryForm.name"
							placeholder="请输入要添加的分类"
							autocomplete="off"
						/>
					</el-form-item>
					<el-form-item label="是否可见">
						<el-select v-model="addCategoryForm.isVisible">
							<el-option
								v-for="item in categoryVisibleOptions"
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
						<el-button @click="addCategoryDialogFormVisible = false"
							>取消</el-button
						>
						<el-button
							type="primary"
							@click="submitAddCategoryForm(addCategoryForm)"
						>
							确认
						</el-button>
					</span>
				</template>
			</el-dialog>
		</div>
		<div class="category-list-table">
			<el-table :data="categoryList" style="width: 100%">
				<el-table-column prop="name" label="分类名称" width="auto" />
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
							@click="deleteCategory({ id: scope.row.id })"
							>删除</el-button
						>
						<el-button
							type="primary"
							size="small"
							plain
							@click="editCategory(scope.row)"
							>编辑</el-button
						>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<el-dialog v-model="updateCategoryDialogFormVisible" title="编辑分类">
			<el-form :model="updateCategoryForm">
				<el-form-item label="分类名称">
					<el-input
						v-model="updateCategoryForm.name"
						placeholder="请输入修改后的分类名称"
						autocomplete="off"
					/>
				</el-form-item>
				<el-form-item label="是否可见">
					<el-select v-model="updateCategoryForm.isVisible">
						<el-option
							v-for="item in categoryVisibleOptions"
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
					<el-button @click="updateCategoryDialogFormVisible = false"
						>取消</el-button
					>
					<el-button
						type="success"
						@click="submitUpdateCategoryForm(updateCategoryForm)"
					>
						确认
					</el-button>
				</span>
			</template>
		</el-dialog>
	</div>
</template>

<style lang="scss" scoped>
.btn-create-category {
	margin-bottom: 10px;
}

.category-list-table {
	width: 100%;
	height: auto;
	border-radius: 4px;
	border: rgba(28, 26, 26, 0.1) solid 2px;
}
</style>