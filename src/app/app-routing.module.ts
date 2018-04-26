import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {NavbarComponent} from './navbar/navbar.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'navbar', component: NavbarComponent},
  { path: 'login', component: LoginComponent}
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
