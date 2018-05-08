import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {NavbarComponent} from './navbar/navbar.component';
import {ProjectsComponent} from './projects/projects.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {TasksComponent} from './tasks/tasks.component';
import {ProjectDetailComponent} from './projects/project-detail/project-detail.component';
import {ProjectCreateComponent} from './projects/project-create/project-create.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'projects' , component: ProjectsComponent},
  { path: 'projects/:id', component: ProjectDetailComponent},
  { path: 'tasks', component: TasksComponent},
  { path: 'create', component: ProjectCreateComponent}
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
