import request from "@/tools/request.ts";
import {AddArticleReq} from "@/api/article/type.ts";

enum API {
    POST_ARTICLE = "/article/addArticle"
}

export const reqAddArticle = (article: AddArticleReq) => {
    return request.post(API.POST_ARTICLE, JSON.stringify({
        title: article.title,
        content: article.content,
        authorId: article.authorId,
        tagList: article.tagList,
    }))
}