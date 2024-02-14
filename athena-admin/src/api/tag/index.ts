import request from "@/tools/request.ts";
import {
	GetTagListRes,
	AddTagRes,
	AddTagReq,
	DeleteTagReq,
	UpdateTagReq,
    DeleteTagRes,
    UpdateTagRes,
} from "@/api/tag/type.ts";

enum API {
    GET_TAG_LIST_URL = "/tag/getTagList",
    ADD_TAG_URL = "/tag/addTag",
    DELETE_TAG_URL = "/tag/deleteTag",
    UPDATE_TAG_URL = "/tag/updateTag",
}

// 获取 tag 数据
export const reqGetTagList = () => {
    return request.get<any, GetTagListRes>(API.GET_TAG_LIST_URL);
}

// 添加新的 tag 数据
export const reqAddTag = (addTagReq: AddTagReq) => {
    return request.post<any, AddTagRes>(API.ADD_TAG_URL, JSON.stringify(addTagReq))
}

// 删除 tag 标签
export const reqDeleteTag = (deleteTagReq: DeleteTagReq) => {
    return request.delete<any, DeleteTagRes>(API.DELETE_TAG_URL, {data: deleteTagReq})
}

// 更新 tag 标签
export const reqUpdateTag = (updateTagReq: UpdateTagReq) => {
    return request.post<any, UpdateTagRes>(API.UPDATE_TAG_URL, JSON.stringify(updateTagReq))
}