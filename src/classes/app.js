module.exports = class App {
  constructor(task, view, dnd, toggle) {
    this.task = task;
    this.view = view;
    this.dnd = dnd;
    this.toggle = toggle;

    this.task.bindTaskListChange(this.onTaskListChanged);
    this.view.bindAddTask(this.handleAddTask);
    this.view.bindToggleTask(this.handleToggleTask);
    this.view.bindDeleteTask(this.handleDeleteTask);
    this.view.bindEditTask(this.handleEditTask);
    this.view.bindClearCompletedTask(this.handleCompletedTask);

    this.onTaskListChanged(this.task.tasks);

    this.dnd.sort(this.hendleDndTask);
  }

  onTaskListChanged = (tasks) => {
    this.view.displayTasks(tasks);
  }

  handleAddTask = (taskText) => {
    this.task.addTask(taskText);
  }

  handleToggleTask = (id) => {
    const toggle = this.toggle.toggleTask(id, this.task.tasks);
    this.task.commit(toggle);
  }

  hendleDndTask = (currentpos, droppedpos) => {
    this.task.sort(currentpos, droppedpos);
  }

  handleDeleteTask = (id) => {
    this.task.deleteTask(id);
  }

  handleEditTask = (index, taskText) => {
    this.task.editTask(index, taskText);
  }

  handleCompletedTask = () => {
    this.task.clearCompetedTasks();
  }
};