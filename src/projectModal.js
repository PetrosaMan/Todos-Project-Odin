// Modal add project
import { Project } from "./project.js";
//import { Projects } from "./projects.js";
import { projects } from "./index.js";
import { renderProjects } from "./renderProjects.js";

// Get references to the dialog and buttons
const dialog = document.querySelector("dialog");
const showBtn = document.getElementById("add-project");
const submitBtn = document.querySelector("dialog button");
const nameInput = document.getElementById("project-name");
const outputName = document.getElementById("outputName");

// "Show the dialog" button opens the dialog modally
showBtn.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
submitBtn.addEventListener("click", (event) => {
  //addProject();
  dialog.close();
});

let btn1 = "btn_add_project";
btn1 = document.querySelector(".add-project");

btn1.addEventListener("click", () => {
  console.log("add project button clicked");
  let projectName = nameInput.value;
});

// Function to access the input value when submit is clicked
submitBtn.addEventListener("click", () => {
  // Acccess the content using the .value property
  let projectName = nameInput.value;
  if (projectName.trim() === "") {
    projectName = "Untitled Project";
    console.log("Untitled project");
  }
  let project = new Project(projectName);
  projects.addProject(project);
  console.log("projects:", projects.viewAllProjects());
  renderProjects();
});

// Export everything needed
export { dialog, showBtn, submitBtn, btn1 };
