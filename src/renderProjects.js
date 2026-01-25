import { Projects } from "./projects.js";
import { projects } from "./index.js";

export function renderProjects() {
  console.log("Rendering projects...");
  const projectsContainer = document.getElementById("projects");
  // Clear existing content
  projectsContainer.innerHTML = "";

  // Add  projects to container
  projects.viewAllProjects().forEach((project) => {
    // Create a container for each project
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project-container");

    // Project name
    const projectNameElement = document.createElement("p");
    projectNameElement.classList.add("project-item");
    projectNameElement.textContent = `${project.name}`;
    projectDiv.appendChild(projectNameElement);

    // Project ID (for debugging purposes)
    const projectIdElement = document.createElement("p");
    projectIdElement.classList.add("project-id");
    projectIdElement.textContent = `id: ${project.id}`;
    projectDiv.appendChild(projectIdElement);

    //Delete button
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-project-btn");
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("data-project-id", project.id);
    deleteButton.addEventListener("click", (event) => {
      const projId = event.target.getAttribute("data-project-id");
      projects.deleteProject(projId);
      renderProjects(); // Re-render projects after deletion
    });
    projectDiv.appendChild(deleteButton);

    // Append the project container to the main projects container
    projectsContainer.appendChild(projectDiv);
  });
  projects.viewAllProjects();
}
