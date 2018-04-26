import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  private userModel = {
    login: '',
    pass: '',
    name: '',
    surname: ''
  };
  constructor() { }
  setUserModel(userModel): void {
    this.userModel = userModel;
  }
  getUserModel(): any {
    return this.userModel;
  }

}
