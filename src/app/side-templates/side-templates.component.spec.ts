import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideTemplatesComponent } from './side-templates.component';

describe('SideTemplatesComponent', () => {
  let component: SideTemplatesComponent;
  let fixture: ComponentFixture<SideTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideTemplatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
