import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManageResourcesService } from '../shared/manage-resources.service';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  templates: any = [{}];
  filterTemplates = [];
  filterT = false;
  constructor(private sharedService: ManageResourcesService) {}
  ngOnInit() {
    this.sharedService.getAllTemplates().subscribe(
      (res) => {
        this.templates = res.message;
        this.filterT = false;
      },
      (error) => []
    );
  }
  loadTemplates(query: string) {
    this.filterT = true;
    let templateName = query.trim().toLowerCase().replace(' ', '');
    if (templateName !== '') {
      // console.log(templateName);
      this.filterTemplates = this.templates.filter((template: any) =>
        template.name.includes(templateName)
      );
      console.log(this.filterTemplates);
    } else {
      this.filterT = false;
    }
  }
  elementVisibility: boolean = false;
  toggleVisibility() {
    this.elementVisibility = !this.elementVisibility;
  }

  scroll(toScroll: number) {
    document.getElementById('search-container')!.scrollLeft += toScroll;
  }

  // buttonLeft.onclick = function () {
  //   document.getElementById('container').scrollLeft -= 20;
  // };
}
