import request from "@/tools/request.ts";
import {AddArticleReq} from "@/api/article/type.ts";

enum API {
    GET_ARTICLE_LIST = "/article/getArticleList",
    POST_ARTICLE = "/article/addArticle",
}

// 获取文章列表
export const reqGetArticleList = () => {
    return request.get(API.GET_ARTICLE_LIST);
}

// 添加文章请求
export const reqAddArticle = (article: AddArticleReq) => {
    return request.post(API.POST_ARTICLE, JSON.stringify({
        title: article.title,
        content: article.content,
        authorId: article.authorId,
        tagList: article.tagList,
    }));
}

