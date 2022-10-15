import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolsbar',
  templateUrl: './toolsbar.component.html',
  styleUrls: ['./toolsbar.component.scss'],
})
export class ToolsbarComponent implements OnInit {
  sideMenu: 'templates' | 'pallete' | 'asset' | 'brand' | 'closed' = 'closed';
  constructor() {}

  ngOnInit(): void {}
  toggleSideMenu(menu: any) {
    this.sideMenu = menu;
  }
}
