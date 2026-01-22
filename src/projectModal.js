// Modal add project
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
  addProject();
  dialog.close();
});

let btn1 = "btn_add_project";
btn1 = document.querySelector(".add-project");

btn1.addEventListener("click", () => {
  console.log("add project button clicked");
});

function addProject() {
  console.log("addProject() function called");
}

// Function to access the input value when submit is clicked
submitBtn.addEventListener("click", () => {
  // Acccess the content using the .value property
  const projectName = nameInput.value;

  // Display the value (or process it further)
  outputName.textContent = projectName;
});

// Export everything needed
export { addProject, dialog, nameInput, outputName, showBtn, submitBtn, btn1 };
