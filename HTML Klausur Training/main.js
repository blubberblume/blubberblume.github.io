"use strict";

timeModule.startUpdatingTimeIn(".current-time");

const list = document.querySelector(".todos");
const todoForm = document.querySelector(".create-todo-form");
const todoInput = todoForm.querySelector("input");
const serviceSwitch = document.querySelector("#service-switch");

window.todoService = window.remoteTodoService; // default

todoService.loadTodos().then(todos => {
  for (const todo of todos) {
    list.appendChild(todoView.createTodoNode(todo));
  }
});

todoForm.addEventListener("submit", e => {
  e.preventDefault();

  todoService.addTodo(todoInput.value).then(newTodo => {
    todoInput.value = "";
    list.appendChild(todoView.createTodoNode(newTodo));
  });
});

serviceSwitch.addEventListener("click", event => {
  if (event.target.checked) {
    window.todoService = window.remoteTodoService;
  } else {
    window.todoService = window.localTodoService;
  }

  window.todoService.loadTodos().then(todos => {
    list.innerHTML = "";

    for (const todo of todos) {
      // add entries from new source
      list.appendChild(todoView.createTodoNode(todo));
    }
  });
});
