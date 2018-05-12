import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {ProjectsService} from '../../projects/projects.service';
import {Task} from '../../common/protocols';
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {
  task: Task = {
    id: '',
    name: '',
    type: ''
  };

  constructor(public tasksService: TasksService, public router: Router) { }

  ngOnInit() {
  }
  createProject(form: NgForm) {
    this.task = form.value;
    this.tasksService.createTask(this.task);
    this.router.navigate(['./tasks']);
  }
}
