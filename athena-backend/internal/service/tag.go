package service

import (
	"athena/internal/model"
)

type ITag interface {
	AddTag(in *model.AddTagInput) (out *model.AddTagOutput, err error)
	DeleteTag(in *model.DeleteTagInput) (err error)
	UpdateTag(in *model.UpdateTagInput) (err error)
	GetTagList(in *model.GetTagListInput) (out *model.GetTagListOutput, err error)
}

var (
	localTag ITag
)

func Tag() ITag {
	if localTag == nil {
		panic("implement not found for interface ITag, forgot register?")
	}
	return localTag
}

func RegisterTag(i ITag) {
	localTag = i
}
