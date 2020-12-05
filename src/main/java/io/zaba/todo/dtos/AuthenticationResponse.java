package io.zaba.todo.dtos;

import java.io.Serializable;

import org.springframework.security.core.SpringSecurityCoreVersion;

import io.zaba.todo.models.User;


public class AuthenticationResponse implements Serializable {


    private static final long serialVersionUID = SpringSecurityCoreVersion.SERIAL_VERSION_UID;
    
    private final String jwt;

    private final UserResponse user;

    public AuthenticationResponse(String jwt, User user) {
        this.jwt = jwt;
        this.user = new UserResponse(user);
    }

    public String getJwt() {
        return jwt;
    }

    public UserResponse getUser(){
        return this.user;
    }
}