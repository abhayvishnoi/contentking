import { Component, OnInit } from '@angular/core';
import { ManageResourcesService } from '../shared/manage-resources.service';

@Component({
  selector: 'app-canvas-toolbar',
  templateUrl: './canvas-toolbar.component.html',
  styleUrls: ['./canvas-toolbar.component.scss'],
})
export class CanvasToolbarComponent implements OnInit {
  fonts: any = [];
  fontSizes = Array(10)
    .fill('')
    .map((e, i) => ({
      name: `${i * 2}`,
      value: `${i * 2}px`,
    }));
  constructor(private sharedService: ManageResourcesService) {
    this.sharedService.getReq('/google-fonts').subscribe((res) => {
      // console.log(res.message);
      this.fonts = res.message;
    });
  }
  ngOnInit(): void {}
  changeColor() {
    console.log(window.getSelection()?.anchorNode);
  }
}
