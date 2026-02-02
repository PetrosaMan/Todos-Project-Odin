// projectModal.js
import { Project } from "./project.js";
import { projects } from "./index.js";
import { renderProjects } from "./render.js";

document.getElementById("add-project").addEventListener("click", () => {
  document.querySelector(".project-dialog").showModal();
});

document
  .querySelector(".project-dialog form")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("project-name").value;
    const newProject = new Project(name);
    projects.addProject(newProject);
    renderProjects(); // update UI
    e.target.closest("dialog").close();
  });
