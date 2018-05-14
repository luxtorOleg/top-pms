import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {NavbarComponent} from './navbar/navbar.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {ProjectsComponent} from './projects/projects.component';
import {ProjectDetailComponent} from './projects/project-detail/project-detail.component';
import {ProjectCreateComponent} from './projects/project-create/project-create.component';
import {ProjectUpdateComponent} from './projects/project-update/project-update.component';
import {TasksComponent} from './tasks/tasks.component';
import {TaskCreateComponent} from './tasks/task-create/task-create.component';
import {TaskDetailComponent} from './tasks/task-detail/task-detail.component';
import {TaskUpdateComponent} from './tasks/task-update/task-update.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'projects' , component: ProjectsComponent},
  { path: 'projects/:id', component: ProjectDetailComponent},
  { path: 'create/projects', component: ProjectCreateComponent},
  { path: 'projects/update/:id', component: ProjectUpdateComponent},
  { path: 'tasks', component: TasksComponent},
  { path: 'tasks/create', component: TaskCreateComponent},
  { path: 'tasks/:id', component: TaskDetailComponent},
  { path: 'tasks/update/:id', component: TaskUpdateComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouting { }
