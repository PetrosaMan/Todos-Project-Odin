// projects.js

export class Projects {
  constructor() {
    this.projects = [];
    this.getProjectsFromLocalStorage();
  } // end of constructor code

  getProjectsFromLocalStorage() {
    // loads projects from local storage
    console.log("Get local storage function call");
  }

  addProject(project) {
    this.projects.push(project);
  }

  deleteProject(projId) {
    // code to remove project
    console.log("projId:", projId);
    this.projects = this.projects.filter((p) => p.id !== parseInt(projId));
  }

  getProject(projId) {
    return this.projects.filter((p) => p.id === projId);
  }

  getProjectByName(name) {
    return this.projects.filter((p) => p.name === name);
  }

  getProjectId(name) {
    const projectIndex = this.projects.findIndex(
      (project) => project.name === name,
    );
    //console.log("index: ", projectIndex);
    return this.projects[projectIndex].id;
  }

  getTodoslistByPojectId(projId) {
    console.log("Todos by project called");
    const projectIndex = this.projects.findIndex(
      (project) => project.id === projId,
    );
    return this.projects[projectIndex].todos;
  }

  viewAllProjects() {
    let allProjects = this.projects.map((project) => {
      return {
        name: project.name,
        id: project.id,
      };
    });
    return allProjects;
  }

  editTodo(todoId, { title, description, dueDate, priority, completed }) {
    const project = this.projects.find((p) => p.id === todoId);
    if (project) {
      project.editTodo(todoId, {
        title,
        description,
        dueDate,
        priority,
        completed,
      });
    }
  }
} // end of Projects class
