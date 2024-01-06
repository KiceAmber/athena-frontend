package entity

import "time"

type Tag struct {
	TagId     int64
	TagName   string
	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt time.Time
}

func (a *Tag) TableName() string {
	return "tag"
}
