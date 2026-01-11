/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ \"./src/projects.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n// main.js\n\n\n\n\n\n/************* Test classes **************/\n\nlet projects = new _projects_js__WEBPACK_IMPORTED_MODULE_0__.Projects();\nlet project = new _project_js__WEBPACK_IMPORTED_MODULE_1__.Project(\"The Odin Project\");\nconsole.log(project.name, \" id: \", project.id);\n\nlet todo = new _todo_js__WEBPACK_IMPORTED_MODULE_2__.Todo(\n  \"Planning\",\n  \"Create a project plan\",\n  \"20-07-2026\",\n  \"low\",\n  false\n);\n\nproject.addTodo(todo);\nprojects.addProject(project);\n\nproject = new _project_js__WEBPACK_IMPORTED_MODULE_1__.Project(\"Central Heating\");\nprojects.addProject(project);\n\nconsole.log(\"console.log projects: \", projects);\n\nproject = projects.getProjectByName(\"The Odin Project\");\nconsole.log(\"project: \", project);\n\nconst projectId = projects.getProjectId(\"The Odin Project\");\nconsole.log(projectId);\n\nconst todosByProjId = projects.getTodoslistByPojectId(projectId);\nconsole.table(todosByProjId);\n\nlet myProjects = projects.viewAllProjects();\nconsole.table(myProjects);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUV5QztBQUNGO0FBQ047O0FBRWpDOztBQUVBLG1CQUFtQixrREFBUTtBQUMzQixrQkFBa0IsZ0RBQU87QUFDekI7O0FBRUEsZUFBZSwwQ0FBSTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxjQUFjLGdEQUFPO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXByYWN0aWNlLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbWFpbi5qc1xuXG5pbXBvcnQgeyBQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzLmpzXCI7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuaW1wb3J0IHsgVG9kbyB9IGZyb20gXCIuL3RvZG8uanNcIjtcblxuLyoqKioqKioqKioqKiogVGVzdCBjbGFzc2VzICoqKioqKioqKioqKioqL1xuXG5sZXQgcHJvamVjdHMgPSBuZXcgUHJvamVjdHMoKTtcbmxldCBwcm9qZWN0ID0gbmV3IFByb2plY3QoXCJUaGUgT2RpbiBQcm9qZWN0XCIpO1xuY29uc29sZS5sb2cocHJvamVjdC5uYW1lLCBcIiBpZDogXCIsIHByb2plY3QuaWQpO1xuXG5sZXQgdG9kbyA9IG5ldyBUb2RvKFxuICBcIlBsYW5uaW5nXCIsXG4gIFwiQ3JlYXRlIGEgcHJvamVjdCBwbGFuXCIsXG4gIFwiMjAtMDctMjAyNlwiLFxuICBcImxvd1wiLFxuICBmYWxzZVxuKTtcblxucHJvamVjdC5hZGRUb2RvKHRvZG8pO1xucHJvamVjdHMuYWRkUHJvamVjdChwcm9qZWN0KTtcblxucHJvamVjdCA9IG5ldyBQcm9qZWN0KFwiQ2VudHJhbCBIZWF0aW5nXCIpO1xucHJvamVjdHMuYWRkUHJvamVjdChwcm9qZWN0KTtcblxuY29uc29sZS5sb2coXCJjb25zb2xlLmxvZyBwcm9qZWN0czogXCIsIHByb2plY3RzKTtcblxucHJvamVjdCA9IHByb2plY3RzLmdldFByb2plY3RCeU5hbWUoXCJUaGUgT2RpbiBQcm9qZWN0XCIpO1xuY29uc29sZS5sb2coXCJwcm9qZWN0OiBcIiwgcHJvamVjdCk7XG5cbmNvbnN0IHByb2plY3RJZCA9IHByb2plY3RzLmdldFByb2plY3RJZChcIlRoZSBPZGluIFByb2plY3RcIik7XG5jb25zb2xlLmxvZyhwcm9qZWN0SWQpO1xuXG5jb25zdCB0b2Rvc0J5UHJvaklkID0gcHJvamVjdHMuZ2V0VG9kb3NsaXN0QnlQb2plY3RJZChwcm9qZWN0SWQpO1xuY29uc29sZS50YWJsZSh0b2Rvc0J5UHJvaklkKTtcblxubGV0IG15UHJvamVjdHMgPSBwcm9qZWN0cy52aWV3QWxsUHJvamVjdHMoKTtcbmNvbnNvbGUudGFibGUobXlQcm9qZWN0cyk7XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n\n}");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project)\n/* harmony export */ });\n// project.js\n\nclass Project {\n  constructor(name) {\n    this.id = Date.now() + Math.floor(Math.random() * 1000);\n    this.name = name;\n    this.todos = [];\n  }\n\n  editTodo(todoId, { title, description, dueDate, priority, completed }) {\n    const todo = this.todos.find((t) => t.id === todoId);\n    if (todo) {\n      todo.edit(title, description, dueDate, priority, completed);\n    }\n  }\n\n  addTodo(todo) {\n    this.todos.push(todo);\n  }\n\n  deleteTodo(todoId) {\n    // add code here\n    this.todos = this.todos.filter((todo) => todo.id !== todoId);\n  }\n\n  getTodos() {\n    return this.todos;\n  }\n\n  getProjectId() {\n    return this.id;\n  }\n} // end of Project class\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJvamVjdC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixrREFBa0Q7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXByYWN0aWNlLy4vc3JjL3Byb2plY3QuanM/ZjU5YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwcm9qZWN0LmpzXG5cbmV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMuaWQgPSBEYXRlLm5vdygpICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCk7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRvZG9zID0gW107XG4gIH1cblxuICBlZGl0VG9kbyh0b2RvSWQsIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGVkIH0pIHtcbiAgICBjb25zdCB0b2RvID0gdGhpcy50b2Rvcy5maW5kKCh0KSA9PiB0LmlkID09PSB0b2RvSWQpO1xuICAgIGlmICh0b2RvKSB7XG4gICAgICB0b2RvLmVkaXQodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGVkKTtcbiAgICB9XG4gIH1cblxuICBhZGRUb2RvKHRvZG8pIHtcbiAgICB0aGlzLnRvZG9zLnB1c2godG9kbyk7XG4gIH1cblxuICBkZWxldGVUb2RvKHRvZG9JZCkge1xuICAgIC8vIGFkZCBjb2RlIGhlcmVcbiAgICB0aGlzLnRvZG9zID0gdGhpcy50b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHRvZG8uaWQgIT09IHRvZG9JZCk7XG4gIH1cblxuICBnZXRUb2RvcygpIHtcbiAgICByZXR1cm4gdGhpcy50b2RvcztcbiAgfVxuXG4gIGdldFByb2plY3RJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pZDtcbiAgfVxufSAvLyBlbmQgb2YgUHJvamVjdCBjbGFzc1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/project.js\n\n}");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Projects: () => (/* binding */ Projects)\n/* harmony export */ });\n// projects.js\n\nclass Projects {\n  constructor() {\n    this.projects = [];\n    this.getProjectsFromLocalStorage();\n  } // end of constructor code\n\n  getProjectsFromLocalStorage() {\n    // loads projects from local storage\n    console.log(\"Get local storage function call\");\n  }\n\n  addProject(project) {\n    this.projects.push(project);\n  }\n\n  deleteProject(projId) {\n    // code to remove project\n    this.projects = this.projects.filter((p) => p.id !== projId);\n  }\n\n  getProject(projId) {\n    return this.projects.filter((p) => p.id === projId);\n  }\n\n  getProjectByName(name) {\n    return this.projects.filter((p) => p.name === name);\n  }\n\n  getProjectId(name) {\n    const projectIndex = this.projects.findIndex(\n      (project) => project.name === name\n    );\n    //console.log(\"index: \", projectIndex);\n    return this.projects[projectIndex].id;\n  }\n\n  getTodoslistByPojectId(projId) {\n    console.log(\"Todos by project called\");\n    const projectIndex = this.projects.findIndex(\n      (project) => project.id === projId\n    );\n    return this.projects[projectIndex].todos;\n  }\n\n  viewAllProjects() {\n    let allProjects = this.projects.map((project) => {\n      return {\n        name: project.name,\n        id: project.id,\n      };\n    });\n    return allProjects;\n  }\n\n  editTodo(todoId, { title, description, dueDate, priority, completed }) {\n    const project = this.projects.find((p) => p.id === todoId);\n    if (project) {\n      project.editTodo(todoId, {\n        title,\n        description,\n        dueDate,\n        priority,\n        completed,\n      });\n    }\n  }\n} // end of Projects class\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJvamVjdHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxxQkFBcUIsa0RBQWtEO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXByYWN0aWNlLy4vc3JjL3Byb2plY3RzLmpzPzEyMTAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcHJvamVjdHMuanNcblxuZXhwb3J0IGNsYXNzIFByb2plY3RzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xuICAgIHRoaXMuZ2V0UHJvamVjdHNGcm9tTG9jYWxTdG9yYWdlKCk7XG4gIH0gLy8gZW5kIG9mIGNvbnN0cnVjdG9yIGNvZGVcblxuICBnZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKSB7XG4gICAgLy8gbG9hZHMgcHJvamVjdHMgZnJvbSBsb2NhbCBzdG9yYWdlXG4gICAgY29uc29sZS5sb2coXCJHZXQgbG9jYWwgc3RvcmFnZSBmdW5jdGlvbiBjYWxsXCIpO1xuICB9XG5cbiAgYWRkUHJvamVjdChwcm9qZWN0KSB7XG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICB9XG5cbiAgZGVsZXRlUHJvamVjdChwcm9qSWQpIHtcbiAgICAvLyBjb2RlIHRvIHJlbW92ZSBwcm9qZWN0XG4gICAgdGhpcy5wcm9qZWN0cyA9IHRoaXMucHJvamVjdHMuZmlsdGVyKChwKSA9PiBwLmlkICE9PSBwcm9qSWQpO1xuICB9XG5cbiAgZ2V0UHJvamVjdChwcm9qSWQpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5maWx0ZXIoKHApID0+IHAuaWQgPT09IHByb2pJZCk7XG4gIH1cblxuICBnZXRQcm9qZWN0QnlOYW1lKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5maWx0ZXIoKHApID0+IHAubmFtZSA9PT0gbmFtZSk7XG4gIH1cblxuICBnZXRQcm9qZWN0SWQobmFtZSkge1xuICAgIGNvbnN0IHByb2plY3RJbmRleCA9IHRoaXMucHJvamVjdHMuZmluZEluZGV4KFxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QubmFtZSA9PT0gbmFtZVxuICAgICk7XG4gICAgLy9jb25zb2xlLmxvZyhcImluZGV4OiBcIiwgcHJvamVjdEluZGV4KTtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0c1twcm9qZWN0SW5kZXhdLmlkO1xuICB9XG5cbiAgZ2V0VG9kb3NsaXN0QnlQb2plY3RJZChwcm9qSWQpIHtcbiAgICBjb25zb2xlLmxvZyhcIlRvZG9zIGJ5IHByb2plY3QgY2FsbGVkXCIpO1xuICAgIGNvbnN0IHByb2plY3RJbmRleCA9IHRoaXMucHJvamVjdHMuZmluZEluZGV4KFxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHByb2pJZFxuICAgICk7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdHNbcHJvamVjdEluZGV4XS50b2RvcztcbiAgfVxuXG4gIHZpZXdBbGxQcm9qZWN0cygpIHtcbiAgICBsZXQgYWxsUHJvamVjdHMgPSB0aGlzLnByb2plY3RzLm1hcCgocHJvamVjdCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogcHJvamVjdC5uYW1lLFxuICAgICAgICBpZDogcHJvamVjdC5pZCxcbiAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIGFsbFByb2plY3RzO1xuICB9XG5cbiAgZWRpdFRvZG8odG9kb0lkLCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlZCB9KSB7XG4gICAgY29uc3QgcHJvamVjdCA9IHRoaXMucHJvamVjdHMuZmluZCgocCkgPT4gcC5pZCA9PT0gdG9kb0lkKTtcbiAgICBpZiAocHJvamVjdCkge1xuICAgICAgcHJvamVjdC5lZGl0VG9kbyh0b2RvSWQsIHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBkdWVEYXRlLFxuICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgY29tcGxldGVkLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59IC8vIGVuZCBvZiBQcm9qZWN0cyBjbGFzc1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/projects.js\n\n}");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Todo: () => (/* binding */ Todo)\n/* harmony export */ });\n// todo.js\n\nclass Todo {\n  constructor(title, description, dueDate, priority, completed) {\n    this.id = Date.now() + Math.floor(Math.random() * 1000);\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n    this.completed = completed;\n  }\n\n  edit({ title, description, dueDate, priority, completed }) {\n    if (title) this.title = title;\n    if (description) this.description = description;\n    if (dueDate) this.dueDate = dueDate;\n    if (priority) this.priority = priority;\n    if (completed !== undefined) this.completed = completed;\n  }\n\n  toggleCompleted() {\n    this.completed = !this.completed;\n  }\n} // end of Todo class\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdG9kby5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVMsa0RBQWtEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1wcmFjdGljZS8uL3NyYy90b2RvLmpzPzI0ZDkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gdG9kby5qc1xuXG5leHBvcnQgY2xhc3MgVG9kbyB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlZCkge1xuICAgIHRoaXMuaWQgPSBEYXRlLm5vdygpICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCk7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgfVxuXG4gIGVkaXQoeyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0ZWQgfSkge1xuICAgIGlmICh0aXRsZSkgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIGlmIChkZXNjcmlwdGlvbikgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIGlmIChkdWVEYXRlKSB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIGlmIChwcmlvcml0eSkgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIGlmIChjb21wbGV0ZWQgIT09IHVuZGVmaW5lZCkgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG4gIH1cblxuICB0b2dnbGVDb21wbGV0ZWQoKSB7XG4gICAgdGhpcy5jb21wbGV0ZWQgPSAhdGhpcy5jb21wbGV0ZWQ7XG4gIH1cbn0gLy8gZW5kIG9mIFRvZG8gY2xhc3NcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/todo.js\n\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;