import { Injectable } from '@angular/core';
import { Task } from '../common/protocols';

@Injectable()
export class TasksService {

  constructor() { }
  public tasks: Array<Task> = [
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

  getTaskById(id: string): Task {
    return this.tasks.find(task => task.id === id);
  }
  deleteTask(task: Task) {
    const taskIndex = this.tasks.indexOf(task);
    this.tasks.splice(taskIndex, 1);
  }
  createTask(task: Task) {
    this.tasks.push(task);
  }
  updateTask( task: Task) {
    const index = this.tasks.indexOf(task);
    this.tasks[index] = task;
  }
}
