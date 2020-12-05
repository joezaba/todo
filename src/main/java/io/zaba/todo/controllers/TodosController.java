package io.zaba.todo.controllers;

import io.zaba.todo.models.Todo;
import io.zaba.todo.repositories.TodoRepository;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path="api/todos") // This means URL's start with /demo (after Application path)
public class TodosController {

    @Autowired 
    private TodoRepository todoRepository;

    @GetMapping("")
    public @ResponseBody Iterable<Todo> index() {
        return todoRepository.findAll();
    }

    @GetMapping("/{id}")
    public @ResponseBody Optional<Todo> getContact(@PathVariable("id") Integer id)
    {
      Optional<Todo> todo = todoRepository.findById(id);
      if(todo.isPresent())
        return todo;
      return Optional.empty();
  
    }
    
    @PostMapping(path="/add") // Map ONLY POST Requests
    public @ResponseBody Todo addNewTodo (@RequestBody Todo todoIn) {
    // @ResponseBody means the returned String is the response, not a view name
    // @RequestParam means it is a parameter from the GET or POST request
    // Todo todo = new Todo();
    // todo.setTask(todoIn.getTask());
    todoRepository.save(todoIn);

    return todoIn;
    }

    @PutMapping(path="/{id}") // Map ONLY POST Requests
    public @ResponseBody Optional<Todo> editTodo (@PathVariable("id") Integer id, @RequestBody Todo todoIn) {
      Optional<Todo> todo = todoRepository.findById(id);
      if(todo.isPresent()){
        todo.get().setTask(todoIn.getTask());
        todo.get().setCompleted(todoIn.getCompleted());
        todoRepository.save(todo.get());
        return todo;
      }
      return Optional.empty();
    
    }

    @DeleteMapping(path="/{id}")
    public String deleteById(@PathVariable("id") Integer id)
    {
      todoRepository.deleteById(id);
      return "{}";
    }
}
