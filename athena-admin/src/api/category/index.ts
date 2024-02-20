import request from "@/tools/request.ts";
import {
	GetCategoryListRes,
	AddCategoryRes,
	AddCategoryReq,
	DeleteCategoryReq,
	UpdateCategoryReq,
    DeleteCategoryRes,
    UpdateCategoryRes,
} from "@/api/category/type.ts";

enum API {
    GET_CATEGORY_LIST_URL = "/category/getCategoryList",
    ADD_CATEGORY_URL = "/category/addCategory",
    DELETE_CATEGORY_URL = "/category/deleteCategory",
    UPDATE_CATEGORY_URL = "/category/updateCategory",
}

// 获取 category 数据
export const reqGetCategoryList = () => {
    return request.get<any, GetCategoryListRes>(API.GET_CATEGORY_LIST_URL);
}

// 添加新的 category 数据
export const reqAddCategory = (addCategoryReq: AddCategoryReq) => {
    return request.post<any, AddCategoryRes>(API.ADD_CATEGORY_URL, JSON.stringify(addCategoryReq))
}

// 删除 category 标签
export const reqDeleteCategory = (deleteCategoryReq: DeleteCategoryReq) => {
    return request.delete<any, DeleteCategoryRes>(API.DELETE_CATEGORY_URL, {data: deleteCategoryReq})
}

// 更新 category 标签
export const reqUpdateCategory = (updateCategoryReq: UpdateCategoryReq) => {
    return request.post<any, UpdateCategoryRes>(API.UPDATE_CATEGORY_URL, JSON.stringify(updateCategoryReq))
}