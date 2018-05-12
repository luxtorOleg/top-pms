import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent implements OnInit {

  constructor() { }

  @Input() item: any = null;
  @Input() detailsTaskRouterLink: any = null;
  @Input() updateTaskRouterLink: any = null;

  @Output() delete: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
  }

  deleteTaskItem() {
    this.delete.emit(this.item);
  }
}
