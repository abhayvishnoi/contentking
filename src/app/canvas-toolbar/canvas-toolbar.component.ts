import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canvas-toolbar',
  templateUrl: './canvas-toolbar.component.html',
  styleUrls: ['./canvas-toolbar.component.scss'],
})
export class CanvasToolbarComponent implements OnInit {
  fonts = Array(10)
    .fill('')
    .map((e, i) => ({
      name: `Font - ${i + 1}`,
      value: `font${i + 1}`,
    }));
  fontSizes = Array(10)
    .fill('')
    .map((e, i) => ({
      name: `${i * 2}`,
      value: `${i * 2}px`,
    }));

  constructor() {}

  ngOnInit(): void {}
  changeColor() {
    console.log(window.getSelection()?.anchorNode);
  }
}
