// todo.js

export class Todo {
  constructor(title, description, dueDate, priority, completed) {
    this.id = Date.now() + Math.floor(Math.random() * 1000);
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = completed;
  }

  edit({ title, description, dueDate, priority, completed }) {
    if (title) this.title = title;
    if (description) this.description = description;
    if (dueDate) this.dueDate = dueDate;
    if (priority) this.priority = priority;
    if (completed !== undefined) this.completed = completed;
  }

  toggleCompleted() {
    this.completed = !this.completed;
  }
} // end of Todo class
