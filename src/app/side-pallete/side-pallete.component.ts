import { Component, OnInit } from '@angular/core';
import { ManageResourcesService } from '../shared/manage-resources.service';

@Component({
  selector: 'app-side-pallete',
  templateUrl: './side-pallete.component.html',
  styleUrls: ['./side-pallete.component.scss'],
})
export class SidePalleteComponent implements OnInit {
  brandColors: any = [];
  constructor(private sharedService: ManageResourcesService) {}

  ngOnInit(): void {
    this.sharedService
      .getReq('/colors/1')
      .subscribe((r) => (this.brandColors = r.message));
  }
}
