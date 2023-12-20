package com.athena.utils;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import java.nio.charset.StandardCharsets;
import java.util.Date;
import java.util.Map;

public class JwtUtils {
    /**
     * 生成 jwt 方法
     * @param secretKey jwt 密钥
     * @param ttlMillis jwt 过期时间
     * @param claims 自定义信息
     * @return Json Web Token
     */
    public static String createJWT(String secretKey, long ttlMillis, Map<String, Object> claims) {
        // 指定签名使用的算法，也就是 header 部分
        SignatureAlgorithm signatureAlgorithm = SignatureAlgorithm.HS256;

        // 生成 JWT 的时间
        long exMillis = System.currentTimeMillis() + ttlMillis;
        Date exp = new Date(exMillis);

        // 设置 JWT 的 body
        JwtBuilder builder = Jwts.builder()
                .setClaims(claims)
                .signWith(signatureAlgorithm, secretKey.getBytes(StandardCharsets.UTF_8))
                .setExpiration(exp);

        return builder.compact();
    }

    /**
     * 解析 JWT
     * @param secretKey 密钥
     * @param token 传递过来的 token
     * @return 解析得到的载荷部分
     */
    public static Claims parseJWT(String secretKey, String token) {

        return Jwts.parser()
                .setSigningKey(secretKey.getBytes(StandardCharsets.UTF_8))
                .parseClaimsJwt(token).getBody();
    }
}
