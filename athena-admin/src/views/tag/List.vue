<script setup lang="ts">
import {
    AddTagData,
    AddTagResponseData,
    DeleteTagResponseData,
    TagItem,
    TagListResponseData, UpdateTagData,
    UpdateTagResponseData,
} from "@/api/tag/type.ts";
import {onMounted, reactive, ref} from "vue";
import {reqCreateTag, reqDeleteTag, reqGetTagList, reqUpdateTag} from "@/api/tag";
import {ElMessage, ElMessageBox} from "element-plus";

const tagListData = ref<TagItem[]>([]);

// 刷新表格数据
const flushTable = () => {
    location.reload();
}

onMounted(() => {
    // 发送请求获取 TagList 数据
    getTagListData();
})

// 获取 TagList 数据
const getTagListData = async () => {
    let res: TagListResponseData = await reqGetTagList();
    if (res.code == 0) {
        ElMessage({
            message: "获取标签数据成功",
            type: "success",
        })
        tagListData.value = res.data.tagList;
    }
}

// 添加标签
const addTagDialogFormVisible = ref<boolean>(false); // 弹出对话框是否可见
const addTagForm = reactive<AddTagData>({}); // 对话框中的表单
const submitAddTagForm = async (tagName: string) => { // 提交添加标签的表单数据
    // 对 tagName 字符串检查，是否存在特殊字符，比如 + / % 等等字符
    tagName = encodeURIComponent(tagName)
    let res: AddTagResponseData = await reqCreateTag(tagName);
    if (res.code == 0) {
        ElMessage({
            message: "添加新标签成功",
            type: "success",
        })
        addTagDialogFormVisible.value = false;
        flushTable();
    } else if (res.code == 50) {
        ElMessage({
            message: "该标签已存在",
            type: "error",
        })
    }
}

// 删除标签
const deleteTag = (id: number) => {
    ElMessageBox.confirm(
        "确定要删除该标签吗？",
        "提示",
        {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
        }
    )
        .then(async () => {
            // 发送删除请求
            let res: DeleteTagResponseData = await reqDeleteTag(id);
            if (res.code == 0) {
                ElMessage({
                    type: 'success',
                    message: "删除成功",
                })
                flushTable();
            } else {
                ElMessage({
                    type: 'error',
                    message: "删除失败",
                })
            }
        });
}

// 更新标签
const updateTagDialogFormVisible = ref<boolean>(false);
const updateTagForm = reactive<UpdateTagData>({}); // 对话框中的表单
const editTag = (row: any) => {
    updateTagDialogFormVisible.value = true;
    updateTagForm.id = row.id;
    updateTagForm.name = row.name;
    updateTagForm.createdAt = row.createdAt;
}
const submitUpdateTagForm = async (tag: TagItem) => { // 提交添加标签的表单数据
    // 对 tagName 字符串检查，是否存在特殊字符，比如 + / % 等等字符
    tag.name = encodeURIComponent(tag.name)
    let res: UpdateTagResponseData = await reqUpdateTag(tag);
    if (res.code == 0) {
        ElMessage({
            message: "修改标签成功",
            type: "success",
        })
        updateTagDialogFormVisible.value = false;
        flushTable();
    } else if (res.code == 50) {
        ElMessage({
            message: "该标签已存在",
            type: "error",
        })
    }
}
</script>

<template>
    <div class="tag-list">
        <div class="btn-create-tag">
            <el-button type="primary" @click="addTagDialogFormVisible = true">添加标签</el-button>
            <el-dialog v-model="addTagDialogFormVisible" title="添加新标签">
                <el-form :model="addTagForm">
                    <el-form-item label="标签名称">
                        <el-input v-model="addTagForm.name" placeholder="请输入要添加的标签" autocomplete="off"/>
                    </el-form-item>
                </el-form>
                <template #footer>
                  <span class="dialog-footer">
                    <el-button @click="addTagDialogFormVisible = false">取消</el-button>
                    <el-button type="primary" @click="submitAddTagForm(addTagForm.name)">
                      确认
                    </el-button>
                  </span>
                </template>
            </el-dialog>
        </div>
        <div class="tag-list-table">
            <el-table :data="tagListData" style="width: 100%">
                <el-table-column prop="name" label="标签名称" width="auto"/>
                <el-table-column prop="createdAt" label="创建时间" width="auto"/>
                <el-table-column fixed="right" label="操作" width="auto">
                    <template #default="scope">
                        <el-button type="danger" size="small" plain @click="deleteTag(scope.row.id)">删除</el-button>
                        <el-button type="primary" size="small" plain @click="editTag(scope.row)">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <el-dialog v-model="updateTagDialogFormVisible" title="编辑标签">
            <el-form :model="updateTagForm">
                <el-form-item label="标签名称">
                    <el-input v-model="updateTagForm.name" placeholder="请输入修改后的标签名称"
                              autocomplete="off"/>
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="updateTagDialogFormVisible = false">取消</el-button>
                    <el-button type="success" @click="submitUpdateTagForm(updateTagForm)">
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
