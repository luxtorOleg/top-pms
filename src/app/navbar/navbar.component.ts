import { Component, OnInit } from '@angular/core';

import {NavbarService} from '../navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userModel;
  constructor(public navbarService: NavbarService) {
    this.userModel = {
        login: '',
        pass: ''
    };
  }

  ngOnInit() {
    this.userModel = this.navbarService.getUserModel();
    console.log(this.navbarService.getUserModel());
  }

}
