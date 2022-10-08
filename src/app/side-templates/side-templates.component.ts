import { Component, OnInit } from '@angular/core';
import { ManageResourcesService } from '../shared/manage-resources.service';

@Component({
  selector: 'app-side-templates',
  templateUrl: './side-templates.component.html',
  styleUrls: ['./side-templates.component.scss'],
})
export class SideTemplatesComponent implements OnInit {
  templates: any;
  constructor(private sharedService: ManageResourcesService) {}

  ngOnInit(): void {
    this.sharedService.getAllTemplates().subscribe(
      (res) => {
        this.templates = res.message;
      },
      (error) => []
    );
  }
}
