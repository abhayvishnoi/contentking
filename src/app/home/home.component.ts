import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  pageData = {
    second: [
      {
        h1: 'Generate Unlimited Content',
        p: 'Generate unlimited content on demand with Content King.',
        img: 'https://source.unsplash.com/random/1920x1080/?nature,landscape',
      },
      {
        h1: 'All Social Platforms Supported. Market & Grow like a PRO!',
        p: 'Content King is the only platform that supports all social platforms.Market & grow like a PRO!',
        img: 'https://source.unsplash.com/random/1920x1080/?nature,landscape',
      },
      {
        h1: 'Unimagined Tools',
        p: 'Get the power of automing tools & features never seen before boost your brand and reach',
        img: 'https://source.unsplash.com/random/1920x1080/?nature,landscape',
      },
    ],
  };

  constructor(private auth: AuthService, private router: Router) {}
  ngOnInit(): void {
    if (this.auth.loggedIn()) {
      this.router.navigate(['/auth']);
    }
  }
}
