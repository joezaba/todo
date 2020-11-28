
export let todos = [];

export class Todo{
    constructor(element, index){
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
    let todo = todos[index];
    if(todo.isComplete == true){
        todo.isComplete = false;
    } else {
        todo.isComplete = true;
    }

    todo.addHTML();
}

export function deleteTodo(index){
    let todo = todos[index];
    todo.element.remove();
}

export function createTodos(){
    let todosElements = document.getElementsByClassName('todo');
    todos = [];
    for(let i = 0; i < todosElements.length; i++){
        todos.push(new Todo(todosElements[i], i));
    }
}

export function addTodo(text){
    let newTodo = document.createElement("li");
    newTodo.classList.add("todo");
    newTodo.dataset.status = "incomplete";
    newTodo.dataset.text = text;
    document.getElementById('todos').appendChild(newTodo);
    createTodos()
}

export function newTodo(){
    let todoForm =document.getElementById('todoInput');
    addTodo(todoForm.value);
    todoForm.value = "";
}

createTodos();
