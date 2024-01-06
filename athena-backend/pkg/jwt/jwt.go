package jwt

import (
	"athena/internal/consts"
	"errors"
	"time"

	"github.com/dgrijalva/jwt-go"
)

var mySecret = []byte("rime_golang")

type MyClaims struct {
	AdminId   int64  `json:"admin_id"`
	AdminName string `json:"admin_name"`
	jwt.StandardClaims
}

// GenToken 生成Token
func GenToken(adminId int64, adminName string) (string, error) {
	// 首先创建一个自己声明的 claims 对象
	claims := MyClaims{
		adminId,
		adminName,
		jwt.StandardClaims{
			ExpiresAt: time.Now().Add(consts.TokenExpireDuration).Unix(),
			Issuer:    "rime-blog",
		},
	}

	// 指定签名方法来创建签名对象
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	// 使用指定的secret签名，并获得完整的编码后的字符串token
	return token.SignedString(mySecret)
}

// ParseToken 解析 token
func ParseToken(tokenString string) (*MyClaims, error) {
	var myClaims = new(MyClaims)

	token, err := jwt.ParseWithClaims(tokenString, myClaims, func(token *jwt.Token) (interface{}, error) {
		return mySecret, nil
	})

	if err != nil {
		return nil, err
	}

	if token.Valid {
		return myClaims, nil
	}
	return nil, errors.New("invalid token")
}
