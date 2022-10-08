import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent implements OnInit {
  params!: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.params = this.route.snapshot.params;
    console.log('canva id', this.params);
  }
}
