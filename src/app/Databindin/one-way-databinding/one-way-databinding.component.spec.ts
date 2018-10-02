import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneWayDatabindingComponent } from './one-way-databinding.component';

describe('OneWayDatabindingComponent', () => {
  let component: OneWayDatabindingComponent;
  let fixture: ComponentFixture<OneWayDatabindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneWayDatabindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneWayDatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
