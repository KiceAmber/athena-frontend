drop database if exists `athena`;
create database `athena`;

use `athena`;

-- 博客管理员
drop table if exists admin ;
create table `admin` (
    `nickname` varchar(128) not null default '' comment '博客拥有者',
    `password` varchar(64) not null default '' comment '后台登录密码'
);

-- 文章表
# drop table if exists `article` ;
# create table `article` (
#     `id`
# );

