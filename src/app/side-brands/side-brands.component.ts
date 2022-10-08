import { Component, OnInit } from '@angular/core';
import { ManageResourcesService } from '../shared/manage-resources.service';

@Component({
  selector: 'app-side-brands',
  templateUrl: './side-brands.component.html',
  styleUrls: ['./side-brands.component.scss'],
})
export class SideBrandsComponent implements OnInit {
  brands!: any;
  constructor(private sharedService: ManageResourcesService) {}

  ngOnInit(): void {
    this.sharedService.getAllTemplates().subscribe(
      (res) => {
        this.brands = res.message;
      },
      (error) => []
    );
  }
}
