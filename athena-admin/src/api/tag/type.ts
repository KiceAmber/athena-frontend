// 响应的基础类型
export interface ResponseData {
    code: number,
    message: string,
}

// tag 的 ts 数据
export interface Tag {
    id: number,
    name: string,
    isVisible: number,
    createdAt: string,
}

// getTagList Request
// TODO: 这里是即将要做的分页功能
export interface GetTagListReq {
    page: number,
    size: number,
}

// getTagList Response
export interface GetTagListRes extends ResponseData {
    data: {
        tagList: Tag[],
    }
}

// AddTag Request
export interface AddTagReq {
    name: string,
    isVisible: number,
}

// AddTag Response
export interface AddTagRes extends ResponseData {
    data: {},
}

// DeleteTag Request
export interface DeleteTagReq {
    id: number,
}

// DeleteTag Response
export interface DeleteTagRes extends ResponseData {
    data: {},
}

// UpdateTag Request
export interface UpdateTagReq {
    id: number,
    name: string,
    isVisible: number,
}

// UpdateTag Response
export interface UpdateTagRes extends ResponseData {
    data: {},
}