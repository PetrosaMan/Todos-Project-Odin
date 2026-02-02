// index.js
import { Projects } from "./projects.js";
import { Project } from "./project.js";
import { Todo } from "./todo.js";
import "./style.css";

export const projects = new Projects();

import { renderProjects, renderTodos } from "./render.js"; // import render functions
import "./todoModal.js";
import "./projectModal.js";

export let activeProjectId = null;

export function setActiveProjectId(id) {
  activeProjectId = id;
}

// Date display
function updateDate() {
  const now = new Date();
  const formattedDate = now.toLocaleDateString("en-GB");
  document.getElementById("date").textContent = formattedDate;
}
updateDate();
setInterval(updateDate, 3600000);

// Initial render
renderProjects();
document.getElementById("todos").innerHTML = "<p>No todos</p>";
