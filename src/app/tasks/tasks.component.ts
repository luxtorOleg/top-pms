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
  getTaskDetailsURL(task: Task) {
    return ['/tasks/' + task.id];
  }
  getTaskUpdateURL(task: Task) {
    return ['/tasts/update/' + task.id];
  }
  deleteProject(task: Task) {
    this.tasksService.deleteTask(task);
  }
  createTask() {
    this.router.navigate(['./create']);
  }
}
