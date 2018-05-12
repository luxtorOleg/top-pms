import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {TasksService} from './tasks.service';
import {Project, Task} from '../common/protocols';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(public tasksService: TasksService, public router: Router) { }

  ngOnInit() {
  }
  getDetailsURL(task: Task) {
    return ['/tasks/' + task.id];
  }
  getUpdateURL(task: Task) {
    return ['/tasks/update/' + task.id];
  }
  deleteTask(task: Task) {
    this.tasksService.deleteTask(task);
  }
  createTask() {
    this.router.navigate(['./tasks/create']);
  }
}
