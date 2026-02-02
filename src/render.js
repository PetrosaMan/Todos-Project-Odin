// render.js
import { projects } from "./index.js";
import { activeProjectId, setActiveProjectId } from "./index.js";

export function renderProjects() {
  const projectsContainer = document.getElementById("projects");
  projectsContainer.innerHTML = "";

  const allProjects = projects.viewAllProjects();

  if (allProjects.length === 0) {
    projectsContainer.textContent = "No projects";
    return;
  }

  allProjects.forEach((proj) => {
    const div = document.createElement("div");
    div.classList.add("project-item");
    div.textContent = proj.name;

    // Highlight active project
    if (proj.id === activeProjectId) {
      div.classList.add("active-project");
    }

    // Click to set active project
    div.addEventListener("click", () => {
      setActiveProjectId(proj.id);
      renderProjects(); // re-render to highlight active
      renderTodos(activeProjectId); // show todos for active project
    });

    // Delete button
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // prevent triggering project click
      projects.deleteProject(proj.id);
      if (activeProjectId === proj.id) {
        setActiveProjectId(null);
        document.getElementById("todos").innerHTML = "<p>No todos</p>";
      }
      renderProjects();
    });

    div.appendChild(delBtn);
    projectsContainer.appendChild(div);
  });
}

// renderTodos.js
// Render todos for a given project ID into #todos div
export function renderTodos(projectId) {
  const todosContainer = document.getElementById("todos");
  todosContainer.innerHTML = ""; // clear old content

  const todos = projects.getTodosByProjectId(projectId);

  if (!todos || todos.length === 0) {
    todosContainer.innerHTML = "<p>No todos</p>";
    return;
  }

  todos.forEach((todo) => {
    const div = document.createElement("div");
    div.classList.add("todo-item");
    div.textContent = `${todo.title} — Due: ${todo.dueDate} — Priority: ${todo.priority}`;

    // Optional: add delete button
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.classList.add("delete-todo");
    delBtn.addEventListener("click", () => {
      const project = projects.getProject(projectId);
      project.deleteTodo(todo.id);
      renderTodos(projectId);
    });

    div.appendChild(delBtn);
    todosContainer.appendChild(div);
  });
}
