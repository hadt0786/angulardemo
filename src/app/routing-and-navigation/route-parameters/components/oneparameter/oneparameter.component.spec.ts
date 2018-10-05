import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneparameterComponent } from './oneparameter.component';

describe('OneparameterComponent', () => {
  let component: OneparameterComponent;
  let fixture: ComponentFixture<OneparameterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneparameterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneparameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
