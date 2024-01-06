package backend

// AddTagReq 添加标签
type AddTagReq struct {
	TagName string `json:"tag_name"`
}

type AddTagResp struct {
	TagId int64 `json:"tag_id"`
}

// DeleteTagReq 删除标签
type DeleteTagReq struct {
	TagId int64 `json:"tag_id"`
}

type DeleteTagResp struct {
}

// UpdateTagReq 修改标签
type UpdateTagReq struct {
	TagId   int64  `json:"tag_id"`
	TagName string `json:"tag_name"`
}

type UpdateTagResp struct {
}

// GetTagListReq 获取标签列表
type GetTagListReq struct {
	Page int `json:"page"`
	Size int `json:"size"`
}

type GetTagListResp struct {
	TagList []TagItem `json:"tag_list"`
	Page    int       `json:"page"`
	Size    int       `json:"size"`
	Total   int       `json:"total"`
}

type TagItem struct {
	TagId   int64  `json:"tag_id"`
	TagName string `json:"tag_name"`
}
