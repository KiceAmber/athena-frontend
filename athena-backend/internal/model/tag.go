package model

// 添加标签
type AddTagInput struct {
	TagId   int64
	TagName string
}

type AddTagOutput struct {
	TagId int64
}

// 删除标签
type DeleteTagInput struct {
	TagId int64
}

type DeleteTagOutput struct {
}

// 修改标签
type UpdateTagInput struct {
	TagId   int64
	TagName string
}

type UpdateTagOutput struct {
}

// 获取标签列表
type GetTagListInput struct {
	Page int
	Size int
}

type GetTagListOutput struct {
	TagList []TagItem
	Page    int
	Size    int
	Total   int
}

type TagItem struct {
	TagId   int64  `json:"tag_id"`
	TagName string `json:"tag_name"`
}
