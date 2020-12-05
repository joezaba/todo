package io.zaba.todo.dtos;

import java.io.Serializable;

import org.springframework.security.core.SpringSecurityCoreVersion;

public class UserRequest implements Serializable {

    private static final long serialVersionUID = SpringSecurityCoreVersion.SERIAL_VERSION_UID;
    
    private String username;
    private String password;

    public UserRequest() {
    }

    public UserRequest(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


}
