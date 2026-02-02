// todo.js

export class Todo {
  constructor(title, description, dueDate, priority, completed = false) {
    this.id = Date.now() + Math.floor(Math.random() * 1000);
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = completed;
  }

  edit(title, description, dueDate, priority, completed) {
    if (title !== undefined) this.title = title;
    if (description !== undefined) this.description = description;
    if (dueDate !== undefined) this.dueDate = dueDate;
    if (priority !== undefined) this.priority = priority;
    if (completed !== undefined) this.completed = completed;
  }
}
