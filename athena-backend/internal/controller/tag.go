package controller

import (
	"athena/api/backend"
	"athena/internal/consts"
	"athena/internal/model"
	"athena/internal/service"
	"strconv"

	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
)

func AddTag(ctx *gin.Context) {
	var req = new(backend.AddTagReq)

	// 绑定参数
	if err := ctx.ShouldBindJSON(req); err != nil {
		zap.L().Error("AddTag ctx.ShouldBindJSON Failed", zap.Error(err))
		consts.ResponseError(ctx, consts.CodeServerBusy)
		return
	}

	// 业务处理
	out, err := service.Tag().AddTag(&model.AddTagInput{
		TagName: req.TagName,
	})
	if err != nil {
		zap.L().Error("Tag().AddTag service Failed", zap.Error(err))
		consts.ResponseError(ctx, consts.CodeServerBusy)
		return
	}

	// 响应结果
	consts.ResponseSuccess(ctx, "添加标签数据成功", &backend.AddTagResp{
		TagId: out.TagId,
	})
}

func DeleteTag(ctx *gin.Context) {
	var req = new(backend.DeleteTagReq)

	// 绑定参数
	if err := ctx.ShouldBindJSON(req); err != nil {
		zap.L().Error("DeleteTag ctx.ShouldBindJSON Failed", zap.Error(err))
		consts.ResponseError(ctx, consts.CodeServerBusy)
		return
	}

	// 业务处理
	if err := service.Tag().DeleteTag(&model.DeleteTagInput{TagId: req.TagId}); err != nil {
		zap.L().Error("Tag().DeleteTag service Failed", zap.Error(err))
		consts.ResponseError(ctx, consts.CodeServerBusy)
		return
	}

	// 响应结果
	consts.ResponseSuccess(ctx, "删除标签信息成功", nil)
}

func UpdateTag(ctx *gin.Context) {
	var req = new(backend.UpdateTagReq)

	// 绑定参数
	if err := ctx.ShouldBindJSON(req); err != nil {
		zap.L().Error("UpdateTag ctx.ShouldBindJSON Failed", zap.Error(err))
		consts.ResponseError(ctx, consts.CodeServerBusy)
		return
	}

	// 业务处理
	if err := service.Tag().UpdateTag(&model.UpdateTagInput{
		TagId:   req.TagId,
		TagName: req.TagName,
	}); err != nil {
		zap.L().Error("Tag().UpdateTag service Failed", zap.Error(err))
		consts.ResponseError(ctx, consts.CodeServerBusy)
		return
	}

	// 响应结果
	consts.ResponseSuccess(ctx, "修改标签信息成功", nil)
}

func GetTagList(ctx *gin.Context) {
	var req = new(backend.GetTagListReq)

	// 绑定参数
	page, err := strconv.Atoi(ctx.DefaultQuery("page", "1"))
	if err != nil || page <= 0 {
		page = 1 // 设置默认值为 1
	}

	size, err := strconv.Atoi(ctx.DefaultQuery("size", "10"))
	if err != nil || size <= 0 {
		size = 10 // 设置默认值为 10
	}
	req.Page = page
	req.Size = size

	// 业务处理
	out, err := service.Tag().GetTagList(&model.GetTagListInput{
		Page: req.Page,
		Size: req.Size,
	})
	if err != nil {
		zap.L().Error("Tag().GetTagList service Failed", zap.Error(err))
		consts.ResponseError(ctx, consts.CodeServerBusy)
		return
	}

	// 响应结果
	consts.ResponseSuccess(ctx, "查询标签列表成功", out)
}
