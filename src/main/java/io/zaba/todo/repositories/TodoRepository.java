package io.zaba.todo.repositories;

import io.zaba.todo.models.Todo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface TodoRepository extends CrudRepository<Todo, Integer> {
    public List<Todo> findByUserId(Integer userId);
}
