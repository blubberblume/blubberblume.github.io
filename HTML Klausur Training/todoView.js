(function() {
  function createTodoNode(todo) {
    const node = document.createElement("li");
    node.classList.add("todo-item");
    node.innerHTML = `
            <button class="done-state">
                <div class="done-state-filler"></div>
            </button>
            <div class="todo-name"></div>
            <button class="delete-todo">✖</button>
            `;

    node.querySelector(".todo-name").textContent = todo.value;

    const doneButton = node.querySelector("button.done-state");
    const deleteButton = node.querySelector("button.delete-todo");

    node.setAttribute("data-completed", todo.isComplete); // 3.

    doneButton.addEventListener("click", () => {
      // 6.
      const currentlyCompleted = JSON.parse(
        node.getAttribute("data-completed") || "false"
      );
      node.setAttribute("data-completed", !currentlyCompleted);

      todo.isComplete = !currentlyCompleted;
      todoService.updateTodo(todo);
    });

    deleteButton.addEventListener("click", () => {
      node.parentNode.removeChild(node); // 5.
      todoService.removeTodo(todo.id);
    });
    return node;
  }

  window.todoView = {
    createTodoNode
  };
})();
