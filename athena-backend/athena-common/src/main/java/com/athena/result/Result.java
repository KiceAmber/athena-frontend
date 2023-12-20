package com.athena.result;

import lombok.Data;

import java.io.Serializable;

@Data
public class Result<T> implements Serializable {

    private Integer statusCode; // 编码：0-成功，其它数字为失败
    private String statusMsg; // 错误信息
    private T data; // 数据

    public static <T> Result<T> success() {
        Result<T> result = new Result<T>();
        result.statusCode = 0;
        return result;
    }

    public static <T> Result<T> success(T object) {
        Result<T> result = new Result<T>();
        result.data = object;
        result.statusCode = 0;
        return result;
    }

    public static <T> Result<T> error(String msg) {
        Result result = new Result();
        result.statusMsg = msg;
        result.statusCode = -1;
        result.data = null;
        return result;
    }
}
