import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

  tasks: Array<String> = ["Make breakfast", "Make dinner", "Buy milk"];
  finishedTasks: Array<String> = [];

  constructor() { }

  ngOnInit() {
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

}
