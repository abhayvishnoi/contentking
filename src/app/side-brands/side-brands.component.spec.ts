import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBrandsComponent } from './side-brands.component';

describe('SideBrandsComponent', () => {
  let component: SideBrandsComponent;
  let fixture: ComponentFixture<SideBrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBrandsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
