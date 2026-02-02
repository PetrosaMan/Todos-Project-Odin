// todoModal.js
import { Todo } from "./todo.js";
import { projects, activeProjectId } from "./index.js";
import { renderTodos } from "./render.js";

document.getElementById("add-todo").addEventListener("click", () => {
  if (!activeProjectId) {
    alert("Please select a project first.");
    return;
  }
  document.getElementById("projectId").value = activeProjectId;
  document.querySelector(".todo-dialog").showModal();
});

document.querySelector(".todo-dialog form").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("todo dialog form");
  const projectId = parseInt(document.getElementById("projectId").value);
  const project = projects.getProject(projectId);
  if (!project) return;

  const newTodo = new Todo(
    document.getElementById("todo-title").value,
    document.getElementById("todo-description").value,
    document.getElementById("todo-due-date").value,
    document.getElementById("todo-priority").value,
    document.getElementById("todo-completed").value,
  );

  project.addTodo(newTodo);
  renderTodos(projectId); // update UI
  e.target.closest("dialog").close();
  e.target.reset();
});
