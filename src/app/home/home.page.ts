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
  inputText: String;
  inputButtonText: String;

  constructor() { }

  ngOnInit() {
    this.setInputNames();
  }

  addTask() {
    if (this.editTask) {
      this.tasks.forEach((task: String, i) => {
        if (task === this.originalTask) {
          this.tasks[i] = this.taskInput;
        }
      });
    } else {
      this.tasks.push(this.taskInput);
    }

    this.taskInput = "";
    this.editTask = false;
    this.setInputNames();
  }

  markFinished(task) {
    this.deleteTask(task);
    this.finishedTasks.push(task);
  }

  deleteTask(task) {
    this.tasks = this.tasks.filter((t: String) => t !== task);
  }

  deleteFinishedTask(task) {
    this.finishedTasks = this.finishedTasks.filter((t: String) => t !== task);
  }

  triggerEditOneTask(task) {
    this.editTask = true;
    this.originalTask = task;
    this.taskInput = task;
    this.setInputNames();
  }

  setInputNames() {
    if (this.editTask) {
      this.inputText = "Edit task:";
      this.inputButtonText = "Edit";
    } else {
      this.inputText = "Add new task:";
      this.inputButtonText = "Add task";
    }
  }
}
