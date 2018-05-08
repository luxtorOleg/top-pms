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
  }
  getProjectDetailsURL(project: Project) {
    return ['/projects/' + project.id];
  }
  getProjectUpdateURL(project: Project) {
    return ['/projects/update/' + project.id];
  }
  deleteProject(id: string) {
    const project: Project = this.projectsService.projects.find(p => p.id === id);
    this.projectsService.deleteProject(this.projectsService.projects.indexOf(project));
  }
  createProject() {
    this.router.navigate(['./create']);
  }
}
