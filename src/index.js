// index.js

import { Projects } from "./projects.js";
import { Project } from "./project.js";
import { Todo } from "./todo.js";
import "./style.css";

function updateDate() {
  const now = new Date();
  // 'en-GB' naturally uses the dd/mm/yyyy format
  const formattedDate = now.toLocaleDateString("en-GB");

  document.getElementById("date").textContent = formattedDate;
  console.log(formattedDate);
}

// Initial call to display the date immediately
updateDate();

// Update every hour (3,600,000 milliseconds)
setInterval(updateDate, 3600000);

/************* Test classes **************/
/*
let projects = new Projects();
let project = new Project("The Odin Project");
console.log(project.name, " id: ", project.id);

let todo = new Todo(
  "Planning",
  "Create a project plan",
  "20-07-2026",
  "low",
  false
);

project.addTodo(todo);
projects.addProject(project);

project = new Project("Central Heating");
projects.addProject(project);

console.log("console.log projects: ", projects);

project = projects.getProjectByName("The Odin Project");
console.log("project: ", project);

const projectId = projects.getProjectId("The Odin Project");
console.log(projectId);

const todosByProjId = projects.getTodoslistByPojectId(projectId);
console.table(todosByProjId);

let myProjects = projects.viewAllProjects();
console.table(myProjects);
*/
