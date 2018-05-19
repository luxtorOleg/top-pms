import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

import {Task} from '../../common/protocols';
import {TasksService} from '../tasks.service';


@Component({
  selector: 'app-task-update',
  templateUrl: './task-update.component.html',
  styleUrls: ['./task-update.component.css']
})
export class TaskUpdateComponent implements OnInit, OnDestroy {
  index: number;
  task: Task;
  paramSubscription: Subscription;
  constructor(public tasksService: TasksService, public activatedRouter: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.paramSubscription = this.activatedRouter.params.subscribe(params =>
      this.task = this.tasksService.getTaskById(params['id']));
    this.index = this.tasksService.tasks.indexOf(this.task);
    this.task = JSON.parse(JSON.stringify(this.task));

  }

  updateTask(form: NgForm) {
    this.task = form.value;
    this.tasksService.updateTask(this.index, this.task);
    this.router.navigate(['./tasks']);
  }

  ngOnDestroy() {
    this.paramSubscription.unsubscribe();
  }
}
