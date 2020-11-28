var todoLib;todoLib=(()=>{"use strict";var e={760:(e,t,o)=>{o.r(t),o.d(t,{todos:()=>s,Todo:()=>n,todoClick:()=>d,deleteTodo:()=>i,createTodos:()=>l,addTodo:()=>a,newTodo:()=>r,readAllTodos:()=>c});let s=[];class n{constructor(e,t){this.id=null,this.index=t,this.element=e,this.isComplete=!1,"complete"==this.element.dataset.status&&(this.isComplete=!0),this.text=this.element.dataset.text,this.addClasses(),this.addHTML()}addClasses(){this.element.classList.add("list-group-item"),this.element.classList.add("d-flex"),this.element.classList.add("justify-content-between"),this.element.classList.add("align-items-center")}addHTML(){let e=`\n        <span style="cursor: pointer;" onClick="todoLib.todoClick(${this.index});">\n                            \n            <svg ${this.isComplete?"hidden":""} width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-circle mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>\n            </svg>\n\n            <svg ${this.isComplete?"":"hidden"} width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-check-circle mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>\n                <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>\n            </svg>\n            \n            <span ${this.isComplete?"style='text-decoration: line-through;'":""} >${this.text}</span>\n        </span>\n        <span style="cursor: pointer;" onClick="todoLib.deleteTodo(${this.index});">\n            <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>\n            </svg>\n        </span>\n        `;this.element.innerHTML=e}}function d(e){let t=document.getElementsByClassName("todo")[e],o=t.dataset.id,s=t.dataset.text,n=t.dataset.status;n="complete"!=n,fetch("/api/todos/"+o,{method:"PUT",body:JSON.stringify({task:s,completed:n}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((e=>e.json())).then((e=>{c()}))}function i(e){let t=document.getElementsByClassName("todo")[e].dataset.id;fetch("/api/todos/"+t,{method:"DELETE"}).then((e=>e.json())).then((e=>{c()}))}function l(){let e=document.getElementsByClassName("todo");s=[];for(let t=0;t<e.length;t++)s.push(new n(e[t],t))}function a(e,t,o){let s=document.createElement("li");s.classList.add("todo"),s.dataset.id=t,s.dataset.status=o?"complete":"incomplete",s.dataset.text=e,document.getElementById("todos").appendChild(s),l()}function r(){let e=document.getElementById("todoInput"),t=e.value;e.value="",fetch("/api/todos/add",{method:"POST",body:JSON.stringify({task:t,completed:!1}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((e=>e.json())).then((e=>{c()}))}function c(){document.getElementById("todos").innerHTML="",s=[],fetch("/api/todos").then((e=>e.json())).then((e=>{e.forEach((e=>{a(e.task,e.id,e.completed)}))}))}l(),c()}},t={};function o(s){if(t[s])return t[s].exports;var n=t[s]={exports:{}};return e[s](n,n.exports,o),n.exports}return o.d=(e,t)=>{for(var s in t)o.o(t,s)&&!o.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o(760)})();