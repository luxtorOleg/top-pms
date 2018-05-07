import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { ProjectsService} from '../projects.service';
import { Project } from '../../common/protocols';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  project: Project = null;
  constructor(private projectService: ProjectsService, private router: ActivatedRoute) { }

  ngOnInit() {
      this.router.params.subscribe(params => this.project = this.getProjectById( params['id']));
  }

  getProjectById(id: number): Project {
    return this.projectService.getProjectById(id);
  }

}
