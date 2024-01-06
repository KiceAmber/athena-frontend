package tag

import (
	"athena/internal/dao/mysql"
	"athena/internal/model"
	"athena/internal/service"
	"athena/pkg/snowflake"
)

type sTag struct{}

func init() {
	service.RegisterTag(New())
}

func New() *sTag {
	return &sTag{}
}

func (*sTag) AddTag(in *model.AddTagInput) (out *model.AddTagOutput, err error) {
	// 雪花算法生成唯一ID
	in.TagId = snowflake.GenID()
	// 数据库操作
	err = mysql.Tag().InsertTagInfo(in)
	if err != nil {
		return nil, err
	}

	out = new(model.AddTagOutput)
	out.TagId = in.TagId
	return
}

func (*sTag) DeleteTag(in *model.DeleteTagInput) (err error) {
	err = mysql.Tag().DeleteTagInfo(in)
	return
}

func (*sTag) UpdateTag(in *model.UpdateTagInput) (err error) {
	err = mysql.Tag().UpdateTagInfo(in)
	return
}

func (*sTag) GetTagList(in *model.GetTagListInput) (out *model.GetTagListOutput, err error) {
	out, err = mysql.Tag().GetTagInfoList(in)
	out.Size = in.Size
	out.Page = in.Page
	return
}
