import { ManageResourcesService } from '../shared/manage-resources.service';
import { PLATFORM_ID, Inject, Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
// @ts-ignore
@Injectable({ providedIn: 'root' })
export class AuthService {
  isLoggedIn = new BehaviorSubject(false);
  // loggedStage = this.isLoggedIn.asObservable();

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
  // ngAfterContentInit(): void {
  //   //Called after ngOnInit when the component's or directive's content has been initialized.
  //   //Add 'implements AfterContentInit' to the class.
  // }
  setToken(token: string) {
    localStorage.setItem('token', token);
    this.isLoggedIn.next(true);
  }

  loggedIn() {
    if (this.sharedService.isBrowser()) {
      // let item = { key1: 'value1', key2: 'valu2' };
      // localStorage.setItem(itemIndex, JSON.stringify(item));
      if (localStorage.getItem('token')) {
        this.isLoggedIn.next(true);
        return true;
      }
      return false;
    }
    return false;
  }
  logout() {
    this.isLoggedIn.next(false);
    localStorage.removeItem('token');
  }
}
