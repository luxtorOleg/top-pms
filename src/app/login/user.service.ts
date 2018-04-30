import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private userModel = {
    login: null,
    pass: null
  };
  constructor() {}
  setUserModel(userModel): void {
    this.userModel = userModel;
  }
  getUserModel(): any {
    return this.userModel;
  }
}
