import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyUpEventInAngularComponent } from './key-up-event-in-angular.component';

describe('KeyUpEventInAngularComponent', () => {
  let component: KeyUpEventInAngularComponent;
  let fixture: ComponentFixture<KeyUpEventInAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyUpEventInAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyUpEventInAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
