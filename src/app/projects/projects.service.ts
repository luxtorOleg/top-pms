import { Injectable } from '@angular/core';

import { Project, Member } from '../common/protocols';

@Injectable()
export class ProjectsService {
  public projects: Array<Project> = [
    {
      id: '0',
      name: 'VizLocal',
      type: 'web',
      owner: 'Marian BB',
      members: new Array<Member>()
    },
    {
      id: '1',
      name: 'Elicall',
      type: 'mobile',
      owner: 'Volodia DD',
      members: new Array<Member>()
    },
    {
      id: '2',
      name: 'Divtricks',
      type: 'web',
      owner: 'Volodia DD',
      members: new Array<Member>()
    }
  ];
  getProjectById(id: string): Project {
    return this.projects.find(project => project.id === id);
  }
  deleteProject(project: Project) {
   const projectIndex = this.projects.indexOf(project);
    this.projects.splice(projectIndex, 1);
  }
  createProject(project: Project) {
    this.projects.push(project);
  }
  updateProject(index: number, project: Project) {
    this.projects[index] = project;
  }
}
