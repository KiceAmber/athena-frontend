package com.athena.properties;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix = "athena.jwt")
@Data
public class JwtProperties {

    private String secretKey;
    private long ttl;
    private String tokenName;
}
