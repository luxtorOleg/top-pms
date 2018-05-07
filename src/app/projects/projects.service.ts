import { Injectable } from '@angular/core';

import { Project, Member } from '../common/protocols';

@Injectable()
export class ProjectsService {
  public projects: Array<Project> = [
    {
      id: 0,
      name: 'VizLocal',
      type: 'web',
      owner: 'Marian BB',
      members: new Array<Member>()
    },
    {
      id: 1,
      name: 'Elicall',
      type: 'mobile',
      owner: 'Volodia DD',
      members: new Array<Member>()
    },
    {
      id: 2,
      name: 'Divtricks',
      type: 'web',
      owner: 'Volodia DD',
      members: new Array<Member>()
    }
  ];
  getProjectById(id: number): Project {
    for (let i = 0; i < this.projects.length; i++) {
      if (this.projects[i].id === id) {
        return this.projects[i];
      }
    }
     // console.log(this.projects.find(project => project.id === id));
  }
}
