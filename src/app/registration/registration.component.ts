import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

import {LoginService} from '../login.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    if (form.value.login !== '' && form.value.pass !== '') {
      const userModel = {
        login: form.value.login,
        pass: form.value.pass,
        name: form.value.name,
        surname: form.value.surname
      };
      this.loginService.setUserModel(userModel);
      console.log(form.value);
      this.router.navigate(['/login']);
    }
  }

}
