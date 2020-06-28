import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EMPdetailsComponent } from './empdetails.component';

describe('EMPdetailsComponent', () => {
  let component: EMPdetailsComponent;
  let fixture: ComponentFixture<EMPdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EMPdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EMPdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
