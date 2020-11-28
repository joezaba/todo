
export let todos = [];

export class Todo{
    constructor(element, index){
        this.id = null;
        this.index = index;
        this.element = element;
        this.isComplete = false;
        if(this.element.dataset.status == "complete"){
            this.isComplete = true;
        }
        this.text = this.element.dataset.text;



        this.addClasses();
        this.addHTML();
    }

    addClasses(){
        this.element.classList.add("list-group-item");
        this.element.classList.add("d-flex");
        this.element.classList.add("justify-content-between");
        this.element.classList.add("align-items-center");
    }

    addHTML(){
        // HTML Template
        let html = `
        <span style="cursor: pointer;" onClick="todoLib.todoClick(${this.index});">
                            
            <svg ${this.isComplete ? "hidden" : ""} width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-circle mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            </svg>

            <svg ${this.isComplete ? "" : "hidden"} width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-check-circle mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
            </svg>
            
            <span ${this.isComplete ? "style='text-decoration: line-through;'" : ''} >${this.text}</span>
        </span>
        <span style="cursor: pointer;" onClick="todoLib.deleteTodo(${this.index});">
            <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
        </span>
        `;
        this.element.innerHTML = html;
    }




}

//let todo = new Todo(todos[0],0);

export function todoClick(index){
    let todo = document.getElementsByClassName('todo')[index];
    let id = todo.dataset.id;
    let taskName = todo.dataset.text;
    let isComplete = todo.dataset.status;
    if(isComplete == "complete"){
        isComplete = false;
    } else {
        isComplete = true;
    }

    fetch('/api/todos/' + id, {
        method: 'PUT',
        body: JSON.stringify({
            task: taskName,
            completed:isComplete
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => {
            readAllTodos();
        })

}

export function deleteTodo(index){

    let td = document.getElementsByClassName('todo')[index];
    // todo.element.remove();
    let id = td.dataset.id;

    fetch('/api/todos/' + id, {
        method: 'DELETE',
    })
    .then((response) => response.json())
    .then((json) => {
        readAllTodos();
    })
}

export function createTodos(){
    let todosElements = document.getElementsByClassName('todo');
    todos = [];
    for(let i = 0; i < todosElements.length; i++){
        todos.push(new Todo(todosElements[i], i));
    }
}

export function addTodo(text, id, completed){
    let newTodo = document.createElement("li");
    newTodo.classList.add("todo");
    newTodo.dataset.id = id;
    newTodo.dataset.status = (completed) ? "complete" : "incomplete";
    newTodo.dataset.text = text;
    document.getElementById('todos').appendChild(newTodo);
    createTodos()
}

export function newTodo(){
    let todoForm =document.getElementById('todoInput');
    let taskName = todoForm.value;
    todoForm.value = "";

    fetch('/api/todos/add', {
        method: 'POST',
        body: JSON.stringify({
            task: taskName,
            completed:false
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => {
            readAllTodos();
        })
}

export function readAllTodos(){
    // Clear all todos
    document.getElementById('todos').innerHTML = "";
    todos = [];

    fetch('/api/todos')
        .then(response => response.json())
        .then(json => {
            
            json.forEach((td) => {
                addTodo(td.task,td.id,td.completed);
            })
        
        })

}

createTodos();
readAllTodos()
