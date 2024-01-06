package mysql

import (
	"athena/internal/model"
	"errors"
)

type dTag struct {
}

var (
	tag *dTag
)

func Tag() *dTag {
	if tag == nil {
		once.Do(func() {
			tag = &dTag{}
		})
	}
	return tag
}

func (*dTag) InsertTagInfo(in *model.AddTagInput) error {

	row, err := engine.Table("tag").Insert(in)
	if err != nil {
		return err
	}

	if row == 0 {
		return errors.New("no Data Inserted")
	}
	return nil
}

func (*dTag) DeleteTagInfo(in *model.DeleteTagInput) error {
	row, err := engine.Table("tag").Where("tag_id = ?", in.TagId).Delete()
	if err != nil {
		return err
	}

	if row == 0 {
		return errors.New("no Data Deleted")
	}
	return nil
}

func (*dTag) UpdateTagInfo(in *model.UpdateTagInput) error {
	row, err := engine.Table("tag").Where("tag_id = ?", in.TagId).Update(in)
	if err != nil {
		return err
	}

	if row == 0 {
		return errors.New("no Data Updated")
	}
	return nil
}

func (*dTag) GetTagInfoList(in *model.GetTagListInput) (*model.GetTagListOutput, error) {
	var out = new(model.GetTagListOutput)

	// 查询分页列表
	err := engine.Table("tag").Limit(in.Size, in.Page-1).Find(&out.TagList)
	if err != nil {
		return nil, err
	}

	// 查询列表总数
	count, err := engine.Table("tag").Count()
	if err != nil {
		return nil, err
	}
	out.Total = int(count)

	return out, nil
}
