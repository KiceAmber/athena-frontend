package com.athena.interceptor;

import com.athena.properties.JwtProperties;
import com.athena.constant.JwtClaimsConstant;
import com.athena.context.BaseContext;
import com.athena.utils.JwtUtils;
import io.jsonwebtoken.Claims;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component
@Slf4j
public class JwtTokenInterceptor implements HandlerInterceptor {

    @Autowired
    private JwtProperties jwtProperties;

    /**
     * jwt 校验拦截器
     * @param request
     * @param response
     * @param handler
     * @return
     * @throws Exception
     */
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

        // 如果拦截到的不是动态方法（即不是 controller 中定义的方法），就直接放行
        if (!(handler instanceof HandlerMethod)) {
            return true;
        }

        // 从请求头中获取令牌
        String token = request.getHeader(jwtProperties.getTokenName());

        try {
            log.info("jwt 校验: {}", token);
            Claims claims = JwtUtils.parseJWT(jwtProperties.getSecretKey(), token);
            Long userId = Long.valueOf(claims.get(JwtClaimsConstant.USER_ID).toString());
            log.info("当前员工的 id：{}", userId);
            BaseContext.setCurrentId(userId);
            return true;
        } catch (Exception exception) {
            // 401 表示验证失败
            response.setStatus(401);
            return false;
        }
    }
}
