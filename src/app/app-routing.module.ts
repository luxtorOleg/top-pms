import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {NavbarComponent} from './navbar/navbar.component';
import {ProjectsComponent} from './projects/projects.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {TasksComponent} from './tasks/tasks.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'projects' , component: ProjectsComponent},
  { path: 'tasks', component: TasksComponent}
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
