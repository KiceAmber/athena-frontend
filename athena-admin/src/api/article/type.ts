export interface ResponseData {
	code: number;
	message: string;
}

// article 的 ts 数据
export interface ArticleItem {
	id: number;
	title: string;
	content: string;
	image: string;
	authorId: number;
	description: string;
	isVisible: number;
	tagList: number[];
}

// GetArticleList Request
export interface GetArticleListReq {
}

// GetArticleList Response
export interface GetArticleListRes extends ResponseData {
    data: {
        articleList: ArticleItem[],
    }
}

// AddArticle Request
// TODO: 还需要完成文章封面、文章分类
export interface AddArticleReq {
    title: string,
    content: string,
    description: string,
    authorId: number,
    isVisible: number,
    tagList: number[],
}

// AddArticle Response
export interface AddArticleRes extends ResponseData {
    data: {}
}

