import request from "@/tools/request.ts";

import {AdminLoginReq, AdminLoginRes} from "@/api/login/type.ts";

enum API {
    ADMIN_LOGIN = "/login",
}

export const reqAdminLogin = (adminLoginReq: AdminLoginReq) => {
    return request.post<any, AdminLoginRes>(API.ADMIN_LOGIN, JSON.stringify(adminLoginReq));
}
