import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ManageResourcesService } from '../shared/manage-resources.service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private sharedService: ManageResourcesService) {}
  reqUrl = this.sharedService.reqUrl;
  signup(email: string, password: string, passwordConfirm: string) {
    return this.sharedService.postReq('/signup', {
      email: email,
      password: password,
      passwordConfirm: passwordConfirm,
    });
  }
  login(email: string, password: string) {
    return this.sharedService.postReq('/login', {
      email: email,
      password: password,
    });
  }
  resetPassword(email: string) {
    return this.sharedService.postReq('/resetPassword', {
      email: email,
    });
  }
  updatePassword(password: string, token: string) {
    return this.sharedService.updateReq(`/updatePassword`, {
      password: password,
      token: token,
    });
  }
  loggedIn() {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }
  logout() {
    localStorage.removeItem('token');
  }
}
