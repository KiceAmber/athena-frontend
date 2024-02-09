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

