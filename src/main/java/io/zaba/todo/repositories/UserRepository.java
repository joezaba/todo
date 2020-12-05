package io.zaba.todo.repositories;

import io.zaba.todo.models.User;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> 
{


    public User findByUsername(String username);
}
