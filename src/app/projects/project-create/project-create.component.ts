import { Component, OnInit } from '@angular/core';
import { ProjectsService} from '../projects.service';
import {TasksService} from '../../tasks/tasks.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

import {Project, Member, Task} from '../../common/protocols';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit {
  project: Project = {
    id: '',
    name: '',
    type: '',
    owner: '',
    members: Array<Member>(),
    tasks: Array<Task>()
  };
  constructor(public projectService: ProjectsService, public taskService: TasksService, public router: Router) {

  }

  ngOnInit() {

  }

  createProject(form: NgForm) {
    this.projectService.createProject(form.value);
    this.router.navigate(['./projects']);
  }
}
