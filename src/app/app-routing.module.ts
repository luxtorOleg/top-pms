import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {NavbarComponent} from './navbar/navbar.component';
import {ProjectsComponent} from './projects/projects.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {TasksComponent} from './tasks/tasks.component';
import {ProjectDetailComponent} from './projects/project-detail/project-detail.component';
import {ProjectCreateComponent} from './projects/project-create/project-create.component';
import {ProjectUpdateComponent} from './projects/project-update/project-update.component';
import {TaskCreateComponent} from './tasks/task-create/task-create.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'projects' , component: ProjectsComponent},
  { path: 'projects/:id', component: ProjectDetailComponent},
  { path: 'projects/create', component: ProjectCreateComponent},
  { path: 'projects/update/:id', component: ProjectUpdateComponent},
  { path: 'tasks', component: TasksComponent},
  { path: 'tasks/create', component: TaskCreateComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
