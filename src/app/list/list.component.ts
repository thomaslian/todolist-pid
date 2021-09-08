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
  @Input() makeDelete?: boolean;
  @Input() makeEdit?: boolean;

  @Output() deleteTaskEvent = new EventEmitter<String>();
  @Output() markFinishedEvent = new EventEmitter<String>();
  @Output() editTaskEvent = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
  }
}
