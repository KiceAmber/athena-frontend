package com.athena.controller.admin;

import com.athena.dto.OwnerLoginDTO;
import com.athena.result.Result;
import com.athena.service.OwnerService;
import com.athena.vo.OwnerLoginVO;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin")
@Api(tags = "博客管理员模块")
@Slf4j
public class OwnerController {

    @Autowired
    private OwnerService ownerService;

    @PostMapping("/login")
    @ApiOperation("博客管理员登录")
    public Result<OwnerLoginVO> OwnerLogin(@RequestBody OwnerLoginDTO ownerLoginDTO) {
        log.info("username: {}, password: {}", ownerLoginDTO.getUsername(), ownerLoginDTO.getPassword());
        ownerService.login(ownerLoginDTO);
        return Result.success();
    }
}
