package router

import (
	"athena/internal/controller"
	"athena/internal/middleware"
	"athena/logs"
	"athena/manifest/config"
	"context"
	"fmt"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
)

func Init() *gin.Engine {
	r := gin.New()
	r.Use(logs.GinLogger(), logs.GinRecovery(true), middleware.CORSMiddleware())

	// 测试路由
	r.GET("/index", func(c *gin.Context) {
		c.String(http.StatusOK, config.Conf.Version)
	})

	r.Use(middleware.JWTAuthMiddleware())
	{
		// 标签操作
		r.POST("/backend/tag/add", controller.AddTag)
		r.DELETE("/backend/tag/delete", controller.DeleteTag)
		r.PUT("/backend/tag/update", controller.UpdateTag)
		r.GET("/backend/tag/list", controller.GetTagList)
	}

	// 错误路由
	r.NoRoute(func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"msg": "404",
		})
	})

	return r
}

func Setup(r *gin.Engine) {
	// 启动服务(优雅关机)
	srv := &http.Server{
		Addr:    fmt.Sprintf(":%d", config.Conf.Port),
		Handler: r,
	}

	go func() {
		// 开启一个goroutine启动服务
		if err := srv.ListenAndServe(); err != nil && err != http.ErrServerClosed {
			zap.L().Fatal("listen: ", zap.Error(err))
		}
	}()

	// 等待中断信号来优雅地关闭服务器，为关闭服务器操作设置一个5秒的超时
	quit := make(chan os.Signal, 1) // 创建一个接收信号的通道
	// kill 默认会发送 syscall.SIGTERM 信号
	// kill -2 发送 syscall.SIGINT 信号，我们常用的Ctrl+C就是触发系统SIGINT信号
	// kill -9 发送 syscall.SIGKILL 信号，但是不能被捕获，所以不需要添加它
	// signal.Notify把收到的 syscall.SIGINT或syscall.SIGTERM 信号转发给quit
	signal.Notify(quit, syscall.SIGINT, syscall.SIGTERM) // 此处不会阻塞
	<-quit                                               // 阻塞在此，当接收到上述两种信号时才会往下执行
	zap.L().Info("Shutdown Server ...")
	// 创建一个5秒超时的context
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	// 5秒内优雅关闭服务（将未处理完的请求处理完再关闭服务），超过5秒就超时退出
	if err := srv.Shutdown(ctx); err != nil {
		zap.L().Fatal("Server Shutdown:", zap.Error(err))
	}

	zap.L().Info("Server exiting")
}