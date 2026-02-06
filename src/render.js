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
    delBtn.style = "border: solid 2px #800080";
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
      console.log(
        "Edit button clicked for todo:",
        todo.title,
        "with priority:",
        todo.priority,
      );
      const dialog = document.querySelector(".todo-dialog");
      // mark dialog as editing so the add-todo handler will skip
      dialog.dataset.editing = "true";
      dialog.showModal();

      // Pre-fill modal
      document.getElementById("todo-title").value = todo.title;
      document.getElementById("todo-description").value = todo.description;
      document.getElementById("todo-due-date").value = todo.dueDate;

      // Set priority radio button safely (scope to dialog)      // First uncheck ALL priority radios
      dialog.querySelectorAll('input[name="priority"]').forEach((r) => {
        r.checked = false;
      });
      const priorityRadio = dialog.querySelector(
        `input[name="priority"][value="${todo.priority}"]`,
      );
      if (priorityRadio) {
        console.log("Setting priority radio to:", todo.priority);
        priorityRadio.checked = true;
      } else {
        // Fallback to "low" if priority doesn't match
        console.log("Priority not found, defaulting to low");
        const low = document.getElementById("low");
        if (low) low.checked = true;
      }

      document.getElementById("todo-completed").checked = !!todo.completed;

      // Override form submit for editing
      const form = dialog.querySelector("form");
      form.onsubmit = (e) => {
        console.log("Edit form submitted for todo:", todo.title);
        e.preventDefault();
        e.stopPropagation();
        const priorityChecked = form.querySelector(
          'input[name="priority"]:checked',
        );
        console.log("Priority selected in form:", priorityChecked?.value);
        if (!priorityChecked) {
          alert("Please select a priority");
          return;
        }
        console.log(
          "Calling todo.edit() with priority:",
          priorityChecked.value,
        );
        todo.edit(
          document.getElementById("todo-title").value,
          document.getElementById("todo-description").value,
          document.getElementById("todo-due-date").value,
          priorityChecked.value,
          document.getElementById("todo-completed").checked,
        );
        console.log("After edit, todo.priority is:", todo.priority);
        projects.saveToLocalStorage();
        renderTodos(projectId);
        form.onsubmit = null; // Clear the handler
        // reset editing flag
        dialog.dataset.editing = "false";
        dialog.close();
      };
      // editing flag already set before opening
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
