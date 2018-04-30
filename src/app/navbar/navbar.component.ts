import { Component, OnInit , Input } from '@angular/core';

import {UserService} from '../login/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userModel;
  constructor(public userService: UserService) {
    this.userModel = {
        login: null,
        pass: null
    };
  }
  ngOnInit() {
    this.userModel = this.userService.getUserModel();
    console.log(this.userService.getUserModel());
  }

}
