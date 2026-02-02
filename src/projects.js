// projects.js

export class Projects {
  constructor() {
    this.projects = [];
    // If you plan to add persistence later, you can re‑enable localStorage here.
    // For now, we’ll skip getProjectsFromLocalStorage since it’s unused.
  }

  addProject(project) {
    this.projects.push(project);
  }

  deleteProject(projId) {
    this.projects = this.projects.filter((p) => p.id !== parseInt(projId));
  }

  getProject(projId) {
    // Return a single project object instead of an array
    return this.projects.find((p) => p.id === projId);
  }

  getTodosByProjectId(projId) {
    const project = this.projects.find((p) => p.id === projId);
    return project ? project.todos : [];
  }

  viewAllProjects() {
    return this.projects.map((project) => ({
      name: project.name,
      id: project.id,
    }));
  }
}
