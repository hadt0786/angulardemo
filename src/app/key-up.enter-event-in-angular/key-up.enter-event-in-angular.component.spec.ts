import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyUp.EnterEventInAngularComponent } from './key-up.enter-event-in-angular.component';

describe('KeyUp.EnterEventInAngularComponent', () => {
  let component: KeyUp.EnterEventInAngularComponent;
  let fixture: ComponentFixture<KeyUp.EnterEventInAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyUp.EnterEventInAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyUp.EnterEventInAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
