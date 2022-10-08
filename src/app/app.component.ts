import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from './user/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private auth: AuthService,
    private meta: Meta
  ) {}
  title = 'brandrocket';
  darkMode: boolean = true;
  isLoggedIn = this.auth.loggedIn();
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.meta.addTags([
      {
        name: 'description',
        content:
          'BrandRocket - Launch Your Brand With Us,With Brandrocket you can create your social media content in few clicks',
      },
      {
        name: 'keywords',
        content: 'brandrocket,canvas,design,social media,branding',
      },
    ]);
    this.isLoggedIn = this.auth.loggedIn();
  }
  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
  login() {
    this.router.navigate(['/auth']);
  }
}
