package com.athena.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

//@Configuration
//public class SecurityConfig{
//
//    @Bean
//    SecurityFilterChain filterChain(HttpSecurity httpSecurity) throws Exception {
//        // 设置登录选项
//        httpSecurity.formLogin()
//                .loginPage("/")
//                .loginProcessingUrl("/login")
//                .successForwardUrl("/success")
//                .failureForwardUrl("/fail");
//
//        // 设置需要授权才可以访问的路径或资源
//        httpSecurity.authorizeRequests()
//                .antMatchers("/").permitAll()
//                .anyRequest().authenticated();
//
//        // 禁用跨站请求保护
//        httpSecurity.csrf().disable();
//        return httpSecurity.build();
//    }
//}
