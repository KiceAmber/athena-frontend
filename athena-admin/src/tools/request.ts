import axios, {AxiosInstance} from "axios";
import {ElMessage} from "element-plus";

const request: AxiosInstance = axios.create({
    baseURL: "http://localhost:3939/api/admin", // 请求基础 url 地址
    timeout: 5000, // 请求超时时间
    headers: {
        "Content-Type": "application/json",
        // "Authorization": "Bearer "
    }
});

// 添加请求拦截器
request.interceptors.request.use((config) => {
    const token = localStorage.getItem("gtoken");
    token ? config.headers.Authorization = `Bearer ${token}` : null; // 拦截器中添加 token 的有无

    return config; // config 是请求拦截器回调注入的对象
});

// 添加响应拦截器
request.interceptors.response.use(
    (resp) => {
        // 成功响应，一般会进行简化数据操作
        return resp.data;
    },
    (err) => {
        // 错误响应，处理 http 请求错误
        console.log(err);
        let status = err.response.status;
        switch (status) {
            case 403:
                ElMessage({
                    type: "error",
                    message: "用户身份未认证"
                })
                break;
            case 404:
                ElMessage({
                    type: "error",
                    message: err.message,
                });
                break;
            case 500 | 501 | 502 | 503 | 504 :
                ElMessage({
                    type: "error",
                    message: "服务器挂了",
                });
                break;
        }
        return Promise.reject(new Error(err.message));
    }
);

export default request;