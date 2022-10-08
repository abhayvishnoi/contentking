import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidePalleteComponent } from './side-pallete.component';

describe('SidePalleteComponent', () => {
  let component: SidePalleteComponent;
  let fixture: ComponentFixture<SidePalleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidePalleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidePalleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
