export interface ResponseData {
    code: number,
    message: string,
}

// article 的 ts 数据
export interface ArticleItem {
    id: number,
    title: string,
    content: string,
    authorId: number,
    tagList: number[],
}

// 添加文章请求数据
export interface AddArticleReq {
    title: string,
    content: string,
    authorId: number,
    tagList: number[],
}

// 添加文章响应数据
export interface AddArticleRes extends ResponseData {
}
