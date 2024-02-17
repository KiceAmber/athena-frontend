import request from "@/tools/request.ts";
import { getArticleListRes } from "./type";

enum API {
	GET_ARTICLE_LIST = "/article/getArticleList",
}

export const reqGetArticleList = () => {
    return request.get<any,getArticleListRes>(API.GET_ARTICLE_LIST);
}
