package internal

import (
	"athena/internal/dao/mysql"
	"athena/internal/dao/redis"
	"athena/internal/router"
	"athena/logs"
	"athena/manifest/config"
	"athena/pkg/snowflake"
	"fmt"

	"go.uber.org/zap"
)

const ConfigFilePath = "manifest/config/config.yaml"

func Launch() {
	if err := config.Init(ConfigFilePath); err != nil {
		fmt.Printf("init config failed, Error:%v\n", err)
		return
	}

	if err := logs.Init(config.Conf.LogConfig); err != nil {
		fmt.Printf("init log failed, Error:%v\n", err)
		return
	}
	defer zap.L().Sync()
	zap.L().Debug("log init success.")

	if err := mysql.Init(config.Conf.MysqlConfig); err != nil {
		fmt.Printf("init mysql failed, Error:%v\n", err)
		return
	}

	if err := redis.Init(config.Conf.RedisConfig); err != nil {
		fmt.Printf("init redis failed, Error:%v\n", err)
		return
	}
	defer redis.Close()

	// 加载雪花算法配置
	if err := snowflake.Init(config.Conf.StartTime, config.Conf.MachineID); err != nil {
		fmt.Printf("init snowflake failed, Error:%v\n", err)
		return
	}

	router.Setup(router.Init())
}
