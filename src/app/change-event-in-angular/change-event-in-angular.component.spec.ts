import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeEventInAngularComponent } from './change-event-in-angular.component';

describe('ChangeEventInAngularComponent', () => {
  let component: ChangeEventInAngularComponent;
  let fixture: ComponentFixture<ChangeEventInAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeEventInAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeEventInAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
