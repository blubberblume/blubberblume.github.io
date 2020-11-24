"use strict";

(function() {
  let todos = [];

  function loadTodos() {
    return new Promise((resolve, reject) => {
      resolve(todos);
    });
  }

  function addTodo(todo) {
    return new Promise((resolve, reject) => {
      const newTodo = {
        id: Math.floor(Math.random() * 9999),
        key: "todo",
        value: todo,
        isComplete: false
      };
      todos.push(newTodo);

      resolve(newTodo);
      console.log(todos);
    });
  }

  function removeTodo(id) {
    return new Promise((resolve, reject) => {
      const todoIndex = todos.findIndex(todo => todo.id === id);
      const todo = todos[todoIndex];

      const removedTodo = todos.splice(todoIndex, 1);
      if (!removedTodo || removedTodo.length === 0) {
        reject(new Error(`todo with id ${id} does not exist`));
      }
      resolve(removedTodo[0]);
    });
  }

  function updateTodo(todo) {
    return new Promise((resolve, reject) => {
      todos[todos.findIndex(tdo => tdo.id === todo.id)] = todo;
      resolve(todo);
    });
  }

  window.localTodoService = {
    loadTodos,
    addTodo,
    removeTodo,
    updateTodo
  };
})();
