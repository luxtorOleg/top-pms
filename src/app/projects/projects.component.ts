import { Component, OnInit } from '@angular/core';


import {ProjectsService} from './projects.service';
import {Project} from '../common/protocols';
import {Router} from '@angular/router';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  constructor(public projectsService: ProjectsService, public router: Router) { }
  ngOnInit() {
    this.projectsService.getProjects().then( data=> {
      console.log(data);
    });
  }
  getProjectDetailsURL(project: Project) {
    return ['/projects/' + project.id];
  }a
  getProjectUpdateURL(project: Project) {
    return ['/projects/update/' + project.id];
  }
  deleteProject(project: Project) {
    this.projectsService.deleteProject(project);
  }
  createProject() {
    this.router.navigate(['./projects/create']);
  }
}
