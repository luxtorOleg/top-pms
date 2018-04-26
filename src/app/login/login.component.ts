import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

import {NavbarService} from '../navbar.service';
import {LoginService} from '../login.service';

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
  constructor(public loginService: LoginService, public navbarService: NavbarService, private router: Router) { }
  ngOnInit() {
    if (this.loginService) {
      this.userModel = this.loginService.getUserModel();
    }
  }
  onSubmit(form: NgForm) {
    if (form.value.login !== '' && form.value.pass !== '') {
      this.navbarService.setUserModel(this.userModel);
      this.router.navigate(['/navbar']);
    }
  }
}
