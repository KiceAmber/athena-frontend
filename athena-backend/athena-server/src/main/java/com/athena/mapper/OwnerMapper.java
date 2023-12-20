package com.athena.mapper;

import com.athena.entity.Owner;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface OwnerMapper {


    public Owner queryOwnerByUsername(String username);
}
