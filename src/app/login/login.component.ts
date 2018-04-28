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
   userModel = {
    login: '',
    pass: '',
  };
  constructor( public navbarService: NavbarService, private router: Router) { }
  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    if (form.value.login !== '' && form.value.pass !== '') {
      this.navbarService.setUserModel(this.userModel);
      this.router.navigate(['/navbar']);
    }
  }
}
