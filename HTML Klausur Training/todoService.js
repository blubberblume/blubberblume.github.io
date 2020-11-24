"use strict";

(function() {
  let appId = 2468;

  function loadTodos() {
    return fetch(
      "https://f73webapi.azurewebsites.net/api/items/App/" + appId
    ).then(response => {
      if (!response.ok) {
        throw new Error("Daten konnten nicht geladen werden.");
      }

      return response.json();
    });
  }

  // call using window.addTodo('...');
  function addTodo(todo) {
    return fetch("https://f73webapi.azurewebsites.net/api/items", {
      method: "POST",
      body: JSON.stringify({
        AppId: appId,
        Key: todo,
        Value: todo,
        isComplete: false
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => {
      if (!response.ok) {
        throw new Error("Todo konnte nicht gespeichert werden.");
      }

      return response.json();
    });
  }

  // call using window.removeTodo(1);
  function removeTodo(id) {
    return fetch("https://f73webapi.azurewebsites.net/api/items/" + id, {
      method: "DELETE"
    }).then(response => {
      if (!response.ok) {
        throw new Error("Todo konnte nicht entfernt werden.");
      }
    });
  }

  // call using window.updateTodo({id: n, key: 'key', value: 'value', isComplete: true, appId: 12345})
  function updateTodo(todo) {
    return fetch("https://f73webapi.azurewebsites.net/api/items/" + todo.id, {
      method: "PUT",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => {
      if (!response.ok) {
        throw new Error("Todo konnte nicht aktualisiert werden.");
      }
    });
  }

  window.remoteTodoService = {
    loadTodos,
    addTodo,
    removeTodo,
    updateTodo
  };
})();
