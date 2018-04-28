import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    if (form.value.login !== '' && form.value.pass !== '') {
      this.router.navigate(['/login']);
    }
  }

}
