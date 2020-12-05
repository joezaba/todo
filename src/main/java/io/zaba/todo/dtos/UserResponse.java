package io.zaba.todo.dtos;

import java.io.Serializable;

import org.springframework.security.core.SpringSecurityCoreVersion;

import io.zaba.todo.models.User;

public class UserResponse implements Serializable {

    private static final long serialVersionUID = SpringSecurityCoreVersion.SERIAL_VERSION_UID;
    
    private Integer id;

    private String username;

    public UserResponse() {
    }

    public UserResponse(User user) {
        this(user.getId(), user.getUsername() );
    }

    public UserResponse(Integer id, String username) {
        this.id = id;
        this.username = username;
    }


    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }


    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }


}
