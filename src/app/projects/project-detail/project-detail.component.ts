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
  constructor(public projectService: ProjectsService, public router: ActivatedRoute) { }

  ngOnInit() {
      this.router.params.subscribe(params => this.project = this.getProjectDetailValueById( Number(params['id'])));
  }

  getProjectDetailValueById(id: number): Project {
    return this.projectService.getProjectById(id);
  }

}
