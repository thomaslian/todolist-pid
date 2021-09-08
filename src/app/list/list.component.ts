import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() headerText: String;
  @Input() tasks: Array<String>;
  @Input() markFinished?: boolean;
  @Input() markTodo?: boolean;
  @Input() makeDelete?: boolean;

  @Output() deleteTaskEvent = new EventEmitter<String>();
  @Output() markFinishedEvent = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
  }

  markTaskFinished(task: String) {
    this.markFinishedEvent.emit(task);
  }

  deleteTask(task: String) {
    this.deleteTaskEvent.emit(task);
  }

}
