import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { ProjectsService} from '../projects.service';
import { Project } from '../../common/protocols';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit, OnDestroy {
  public project: Project = null;
  paramSubscription: Subscription;

  constructor(private projectService: ProjectsService, private router: ActivatedRoute) { }

  ngOnInit() {
      this.paramSubscription = this.router.params.subscribe(params => this.project = this.getProjectById( params['id']));
  }

  getProjectById(id: string): Project {
    return this.projectService.getProjectById(id);
  }

  ngOnDestroy() {
    this.paramSubscription.unsubscribe();
  }

}
