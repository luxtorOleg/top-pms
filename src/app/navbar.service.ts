import { Injectable } from '@angular/core';

@Injectable()
export class NavbarService {
  private userModel = {
    login: '',
    pass: ''
  };
  constructor() {}
  setUserModel(userModel): void {
    this.userModel = userModel;
  }
  getUserModel(): any {
    return this.userModel;
  }
}
