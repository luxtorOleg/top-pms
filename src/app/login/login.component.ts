import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

import {NavbarService} from '../navbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public navbarService: NavbarService, private router: Router) { }
  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    const userModel = {
      login: form.value.login,
      pass: form.value.pass
    }
    this.navbarService.setUserModel(userModel);
    this.router.navigate(['/navbar']);
  }
}
