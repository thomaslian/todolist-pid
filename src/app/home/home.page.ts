import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

  tasks: Array<String> = ["Make breakfast", "Make dinner", "Buy milk"];
  finishedTasks: Array<String> = [];
  taskInput: String;
  editTask: Boolean = false;
  originalTask: String;

  constructor() { }

  ngOnInit() {
  }

  addTask() {
    if (this.editTask) {
      const indexOfTask = this.tasks.findIndex((task: String) => task === this.originalTask);
      this.tasks[indexOfTask] = this.taskInput;
    } else {
      this.tasks.push(this.taskInput);
    }

    this.taskInput = "";
    this.editTask = false;
  }

  markFinished(task: String) {
    this.deleteTask(task);
    this.finishedTasks.push(task);
  }

  deleteTask(task: String) {
    this.tasks = this.removeOneFromArray(task, this.tasks)
  }

  deleteFinishedTask(task: String) {
    this.finishedTasks = this.removeOneFromArray(task, this.finishedTasks);
  }

  triggerEditOneTask(task: String) {
    this.editTask = true;
    this.originalTask = this.taskInput = task;
    this.taskInput = task;
  }

  /**
   * Removes a task from an array of tasks
   * @param task Task that should be removed
   * @param tasks Array that contains the task that should be removed
   * @returns Array without the task passed in the parameters
   */
  private removeOneFromArray(task: String, tasks: Array<String>): Array<String> {
    return tasks.filter((t: String) => t !== task);
  }
}
