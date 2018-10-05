import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreparametersComponent } from './moreparameters.component';

describe('MoreparametersComponent', () => {
  let component: MoreparametersComponent;
  let fixture: ComponentFixture<MoreparametersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreparametersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreparametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
