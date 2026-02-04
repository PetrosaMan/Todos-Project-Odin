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

    // Checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed === true || todo.completed === "yes";
    checkbox.addEventListener("change", () => {
      todo.completed = checkbox.checked;
      projects.saveToLocalStorage();
      renderTodos(projectId);
    });

    // Text
    const textSpan = document.createElement("span");
    textSpan.innerHTML = `${todo.title}<br>
    Descr: ${todo.description}<br>
    Due: ${todo.dueDate}<br>
    Priority: ${todo.priority}<br>
    Completed: ${todo.Completed}`;
    if (todo.completed) textSpan.classList.add("completed");

    // 🔹 Edit button (inserted here)
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => {
      const dialog = document.querySelector(".todo-dialog");
      dialog.showModal();

      // Pre-fill modal
      document.getElementById("todo-title").value = todo.title;
      document.getElementById("todo-description").value = todo.description;
      document.getElementById("todo-due-date").value = todo.dueDate;
      document.getElementById("todo-priority").value = todo.priority;
      document.getElementById("todo-completed").checked = todo.completed;

      // Override form submit for editing
      const form = dialog.querySelector("form");
      const handler = (e) => {
        e.preventDefault();
        todo.edit(
          document.getElementById("todo-title").value,
          document.getElementById("todo-description").value,
          document.getElementById("todo-due-date").value,
          document.getElementById("todo-priority").value,
          document.getElementById("todo-completed").checked,
        );
        projects.saveToLocalStorage();
        renderTodos(projectId);
        form.removeEventListener("submit", handler);
        dialog.close();
      };
      form.addEventListener("submit", handler);
    });

    // Delete button
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", () => {
      const project = projects.getProject(projectId);
      project.deleteTodo(todo.id);
      projects.saveToLocalStorage();
      renderTodos(projectId);
    });

    // Append everything
    div.appendChild(checkbox);
    div.appendChild(textSpan);
    div.appendChild(editBtn); // 🔹 right before delete
    div.appendChild(delBtn);
    todosContainer.appendChild(div);
  });
}
