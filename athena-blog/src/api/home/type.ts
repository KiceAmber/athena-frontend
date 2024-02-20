export interface ResponseData {
	code: number;
	message: string;
}

// 单个文章数据
export interface ArticleItem {
	id: number;
	title: string;
	content: string;
	image: string;
	authorId: number;
	description: string;
	isVisible: number;
	tagList: TagItem[];
	createdAt: string;
}

// 单个标签数据
export interface TagItem {
	id: number;
	name: number;
	createdAt: string;
}

// GetArticle Request
export interface getArticleListReq {}

// GetArticle Res
export interface getArticleListRes extends ResponseData{
	data: {
    	articleList:  ArticleItem[],
	}
}

