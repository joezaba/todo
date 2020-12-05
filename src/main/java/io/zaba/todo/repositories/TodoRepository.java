package io.zaba.todo.repositories;

import io.zaba.todo.models.Todo;

import org.springframework.data.repository.CrudRepository;

public interface TodoRepository extends CrudRepository<Todo, Integer> {
    
}
