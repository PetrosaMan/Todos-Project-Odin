// project.js

export class Project {
  constructor(name) {
    this.id = Date.now() + Math.floor(Math.random() * 1000);
    this.name = name;
    this.todos = [];
  }

  editTodo(todoId, { title, description, dueDate, priority, completed }) {
    const todo = this.todos.find((t) => t.id === todoId);
    if (todo) {
      todo.edit(title, description, dueDate, priority, completed);
    }
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  deleteTodo(todoId) {
    // add code here
    this.todos = this.todos.filter((todo) => todo.id !== todoId);
  }

  getTodos() {
    return this.todos;
  }

  getProjectId() {
    return this.id;
  }
} // end of Project class
