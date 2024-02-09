import request from "@/tools/request.ts";
import {TagItem, TagListResponseData} from "@/api/tag/type.ts";

enum API {
    TAG_LIST_URL = "/tag/getTagList",
    CREATE_TAG_URL = "/tag/createTag",
    DELETE_TAG_URL = "/tag/deleteTag",
    UPDATE_TAG_URL = "/tag/updateTag",
}

// 获取 tag 数据
export const reqGetTagList = () => {
    return request.get<any, TagListResponseData>(API.TAG_LIST_URL);
}

// 创建新的 tag 数据
export const reqCreateTag = (tagName: string) => {
    return request.post(API.CREATE_TAG_URL, JSON.stringify({name: tagName}))
}

// 删除 tag 标签
export const reqDeleteTag = (tagId: number) => {
    return request.delete(API.DELETE_TAG_URL, {data: {id: tagId}})
}

// 更新 tag 标签
export const reqUpdateTag = (tag: TagItem) => {
    return request.post(API.UPDATE_TAG_URL, JSON.stringify({
        id: tag.id,
        name: tag.name,
        createdAt: tag.createdAt,
    }))
}