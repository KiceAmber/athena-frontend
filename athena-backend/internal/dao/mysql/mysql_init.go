package mysql

import (
	"athena/manifest/config"
	"fmt"
	"sync"

	_ "github.com/go-sql-driver/mysql"
	"go.uber.org/zap"
	"xorm.io/xorm"
)

var (
	engine *xorm.Engine
	once   = sync.Once{}
)

func Init(cfg *config.MysqlConfig) (err error) {
	engine, err = xorm.NewEngine(
		"mysql",
		fmt.Sprintf("%s:%s@tcp(%s:%d)/%s?charset=utf8mb4&parseTime=True&loc=Local",
			cfg.User,
			cfg.Password,
			cfg.Host,
			cfg.Port,
			cfg.DbName),
	)
	if err != nil {
		zap.L().Error("xorm new engine failed, Error:", zap.Error(err))
		return
	}
	engine.SetMaxOpenConns(cfg.MaxOpenConns)
	engine.SetMaxIdleConns(cfg.MaxIdleConns)
	return
}
