// 响应的基础类型
export interface ResponseData {
    code: number,
    message: string,
}

// category 的 ts 数据
export interface Category {
    id: number,
    name: string,
    isVisible: number,
    createdAt: string,
    updatedAt: string,
}

// getCategoryList Request
export interface GetCategoryListReq {
}

// getCategoryList Response
export interface GetCategoryListRes extends ResponseData {
    data: {
        categoryList: Category[],
    }
}

// AddCategory Request
export interface AddCategoryReq {
    name: string,
    isVisible: number,
}

// AddCategory Response
export interface AddCategoryRes extends ResponseData {
    data: {},
}

// DeleteCategory Request
export interface DeleteCategoryReq {
    id: number,
}

// DeleteCategory Response
export interface DeleteCategoryRes extends ResponseData {
    data: {},
}

// UpdateCategory Request
export interface UpdateCategoryReq {
    id: number,
    name: string,
    isVisible: number,
}

// UpdateCategory Response
export interface UpdateCategoryRes extends ResponseData {
    data: {},
}