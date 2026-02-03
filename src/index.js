// index.js
import { Projects } from "./projects.js";
import { Project } from "./project.js";
import { renderProjects, renderTodos } from "./render.js";
import "./style.css";
import "./projectModal.js";
import "./todoModal.js";

export const projects = new Projects();
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

// 🔹 Auto-render on page load
window.addEventListener("DOMContentLoaded", () => {
  // If no projects exist, create a default one
  if (projects.viewAllProjects().length === 0) {
    const defaultProject = new Project("Default Project");
    projects.addProject(defaultProject);
    projects.saveToLocalStorage();
  }

  renderProjects();

  // Set first project as active
  const allProjects = projects.viewAllProjects();
  if (allProjects.length > 0) {
    activeProjectId = allProjects[0].id;
    renderTodos(activeProjectId);
  } else {
    document.getElementById("todos").innerHTML = "<p>No todos</p>";
  }
});
