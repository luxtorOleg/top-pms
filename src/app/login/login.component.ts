import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

import {UserService} from './user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   userModel = {
    login: '',
    pass: '',
  };
  constructor( private userService: UserService, private router: Router) { }
  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    if (form.value.login && form.value.pass) {
      this.userService.setUserModel(this.userModel);
      this.router.navigate(['/projects']);
   }
  }
}

