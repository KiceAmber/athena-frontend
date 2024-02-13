// 声明标签的类型
export interface ResponseData {
    code: number,
    message: string,
}

// tag 的 ts 数据
export interface TagItem {
    id: number,
    name: string,
    createdAt: string,
}

// tag 表格的返回数据
export interface TagListResponseData extends ResponseData {
    data: {
        tagList: TagItem[],
    }
}

// 创建新标签的请求 ts 数据
export interface AddTagData {
    name: string,
}

// 创建新标签的返回数据
export interface AddTagResponseData extends ResponseData {
}

// 删除标签返回的数据
export interface DeleteTagResponseData extends ResponseData {
}

// 更新标签需要的请求 ts 数据
export interface UpdateTagData {
    id: number,
    name: string,
    createdAt: string,
}

// 更新标签的返回数据
export interface UpdateTagResponseData extends ResponseData {
}
