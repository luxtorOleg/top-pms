import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { UserService } from './login/user.service';
import { RegistrationComponent } from './registration/registration.component';
import { ProjectsComponent } from './projects/projects.component';
import { TasksComponent } from './tasks/tasks.component';
import {ProjectsService} from './projects/projects.service';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { ProjectCreateComponent } from './projects/project-create/project-create.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegistrationComponent,
    ProjectsComponent,
    TasksComponent,
    ProjectDetailComponent,
    ProjectCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    UserService,
    ProjectsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
