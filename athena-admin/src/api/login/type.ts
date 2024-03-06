export interface ResponseData {
    code: number,
    message: string,
}

// Admin Login Req
export interface AdminLoginReq {
    passport: string;
    password: string;
}

export interface AdminLoginRes extends ResponseData {
    data: {
        token: string;
    }
}
