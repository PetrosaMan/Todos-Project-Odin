// project.js

export class Project {
  constructor(name) {
    this.id = Date.now() + Math.floor(Math.random() * 1000);
    this.name = name;
    this.todos = [];
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  editTodo(todoId, { title, description, dueDate, priority, completed }) {
    const todo = this.todos.find((t) => t.id === todoId);
    if (todo && typeof todo.edit === "function") {
      todo.edit(title, description, dueDate, priority, completed);
    }
  }

  deleteTodo(todoId) {
    this.todos = this.todos.filter((todo) => todo.id !== todoId);
  }

  getTodos() {
    return this.todos;
  }
}
