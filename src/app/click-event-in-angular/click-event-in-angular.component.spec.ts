import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickEventInAngularComponent } from './click-event-in-angular.component';

describe('ClickEventInAngularComponent', () => {
  let component: ClickEventInAngularComponent;
  let fixture: ComponentFixture<ClickEventInAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickEventInAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickEventInAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
