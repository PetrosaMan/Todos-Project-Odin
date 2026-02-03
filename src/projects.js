// projects.js
import { Project } from "./project.js";
import { Todo } from "./todo.js";

export class Projects {
  constructor() {
    this.projects = [];
    this.loadFromLocalStorage();
  }

  addProject(project) {
    this.projects.push(project);
    this.saveToLocalStorage();
  }

  deleteProject(projId) {
    this.projects = this.projects.filter((p) => p.id !== parseInt(projId));
    this.saveToLocalStorage();
  }

  getProject(projId) {
    return this.projects.find((p) => p.id === projId);
  }

  getTodosByProjectId(projId) {
    const project = this.getProject(projId);
    return project ? project.todos : [];
  }

  viewAllProjects() {
    return this.projects.map((project) => ({
      name: project.name,
      id: project.id,
    }));
  }

  // 🔹 LocalStorage persistence
  saveToLocalStorage() {
    localStorage.setItem("projects", JSON.stringify(this.projects));
  }

  loadFromLocalStorage() {
    const data = localStorage.getItem("projects");
    if (data) {
      const parsed = JSON.parse(data);
      // Rehydrate into Project and Todo instances
      this.projects = parsed.map((p) => {
        const project = new Project(p.name);
        project.id = p.id;
        project.todos = p.todos.map((t) => {
          const todo = new Todo(
            t.title,
            t.description,
            t.dueDate,
            t.priority,
            t.completed,
          );
          todo.id = t.id;
          return todo;
        });
        return project;
      });
    }
  }
}
