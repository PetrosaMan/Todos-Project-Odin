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
  // Set default priority to "low"
  document.getElementById("low").checked = true;
  // mark dialog as not-editing so the add-todo submit handler runs
  document.querySelector(".todo-dialog").dataset.editing = "false";
  document.querySelector(".todo-dialog").showModal();
});

document.querySelector(".todo-dialog form").addEventListener("submit", (e) => {
  const form = e.target;
  const dialog = document.querySelector(".todo-dialog");

  // Always prevent default form submission first
  e.preventDefault();

  // If form has an onsubmit handler (set by edit), call it and skip add-todo logic
  if (form.onsubmit) {
    form.onsubmit(e);
    return;
  }

  console.log("todo dialog form");
  const projectId = parseInt(document.getElementById("projectId").value);
  const project = projects.getProject(projectId);
  if (!project) return;

  const priorityChecked = document
    .querySelector(".todo-dialog")
    .querySelector('input[name="priority"]:checked');
  if (!priorityChecked) {
    alert("Please select a priority");
    return;
  }

  const newTodo = new Todo(
    document.getElementById("todo-title").value,
    document.getElementById("todo-description").value,
    document.getElementById("todo-due-date").value,
    /*document.getElementById("todo-priority").value,*/
    priorityChecked.value,
    document.getElementById("todo-completed").checked,
  );

  project.addTodo(newTodo);
  renderTodos(projectId); // update UI

  const priorityE1 = document.getElementById("todo-piority");
  if (priorityE1) priorityE1.value = "low"; //Safely reset value

  e.target.closest("dialog").close();
  e.target.reset();
});
