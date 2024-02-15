import request from "@/tools/request.ts";
import {AddArticleReq, AddArticleRes, GetArticleListRes} from "@/api/article/type.ts";

enum API {
    GET_ARTICLE_LIST = "/article/getArticleList",
    ADD_ARTICLE = "/article/addArticle",
}

// 获取文章列表
export const reqGetArticleList = () => {
    return request.get<any, GetArticleListRes>(API.GET_ARTICLE_LIST);
}

// 添加文章请求
export const reqAddArticle = (addArticleReq: AddArticleReq) => {
    return request.post<any, AddArticleRes>(API.ADD_ARTICLE, JSON.stringify(addArticleReq));
}

