import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { Task } from '../../common/protocols';
import {Subscription} from 'rxjs/Subscription';
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit, OnDestroy {
  public task: Task = null;
  paramSubscription: Subscription;

  constructor(private tasksService: TasksService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.paramSubscription = this.router.params.subscribe(params => this.task = this.getTaskById( params['id']));
  }

  getTaskById(id: string): Task {
    return this.tasksService.getTaskById(id);
  }

  ngOnDestroy() {
    this.paramSubscription.unsubscribe();
  }

}
