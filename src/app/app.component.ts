import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ManageResourcesService } from './shared/manage-resources.service';
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
    private meta: Meta,
    private sharedService: ManageResourcesService
  ) {}
  title = 'brandrocket';
  darkMode: any = false;
  isLoggedIn = false;
  ngOnInit(): void {
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
    this.auth.isLoggedIn.subscribe((res) => {
      this.isLoggedIn = res;
      // console.log(this.isLoggedIn);
    });
    if (this.sharedService.isBrowser()) {
      this.darkMode = localStorage.getItem('dark') === 'true';
      // console.log('onint', this.darkMode);
    }
  }
  changeDarkMode() {
    // console.log('before', this.darkMode);
    // let dark = this.darkMode === 'false' ? 'true' : 'false';
    // console.log(dark);
    localStorage.setItem('dark', String(!this.darkMode));
    this.darkMode = localStorage.getItem('dark') === 'true';
    // console.log('after', this.darkMode);
  }
  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
  login() {
    this.router.navigate(['/auth']);
  }
}
