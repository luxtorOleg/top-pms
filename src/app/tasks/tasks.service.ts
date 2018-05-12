import { Injectable } from '@angular/core';
import { Task } from '../common/protocols';

@Injectable()
export class TasksService {

  constructor() { }
  public projects: Array<Task> = [
    {
      id: '0',
      name: 'fix',
      type: 'web',
    },
    {
      id: '1',
      name: 'create',
      type: 'mobile',
    },
    {
      id: '2',
      name: 'update',
      type: 'web',
    }
  ];
}
