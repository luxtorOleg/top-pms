import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { AppRouting } from './/app-routing';
import { UserService } from './login/user.service';
import { RegistrationComponent } from './registration/registration.component';
import { ProjectsComponent } from './projects/projects.component';
import { TasksComponent } from './tasks/tasks.component';
import {ProjectsService} from './projects/projects.service';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { ProjectCreateComponent } from './projects/project-create/project-create.component';
import { ProjectUpdateComponent } from './projects/project-update/project-update.component';
import { ListItemComponent } from './list-item/list-item.component';
import { TaskCreateComponent } from './tasks/task-create/task-create.component';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';
import { TaskUpdateComponent } from './tasks/task-update/task-update.component';
import { TaskListItemComponent } from './task-list-item/task-list-item.component';
import {TasksService} from './tasks/tasks.service';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegistrationComponent,
    ProjectsComponent,
    TasksComponent,
    ProjectDetailComponent,
    ProjectCreateComponent,
    ProjectUpdateComponent,
    ListItemComponent,
    TaskCreateComponent,
    TaskDetailComponent,
    TaskUpdateComponent,
    TaskListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouting,
    ReactiveFormsModule
  ],
  providers: [
    UserService,
    ProjectsService,
    TasksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
