package com.athena.service.impl;

import com.athena.constant.MessageConstant;
import com.athena.dto.OwnerLoginDTO;
import com.athena.entity.Owner;
import com.athena.exception.LoginFailedException;
import com.athena.mapper.OwnerMapper;
import com.athena.service.OwnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.DigestUtils;

@Service
public class OwnerServiceImpl implements OwnerService {

    @Autowired
    private OwnerMapper ownerMapper;

    @Override
    public void login(OwnerLoginDTO ownerLoginDTO) {
        String username = ownerLoginDTO.getUsername();
        String password = ownerLoginDTO.getPassword();
        password = DigestUtils.md5DigestAsHex(password.getBytes());

        Owner user = ownerMapper.queryOwnerByUsername(username);

        if (user == null) {
            throw new LoginFailedException(MessageConstant.USER_NOT_FOUND);
        }

        if (!user.getPassword().equals(password)) {
            throw new LoginFailedException(MessageConstant.PASSWORD_NOT_MATCH);
        }
    }
}
