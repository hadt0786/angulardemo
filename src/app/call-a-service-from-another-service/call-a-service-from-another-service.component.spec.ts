import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallAServiceFromAnotherServiceComponent } from './call-a-service-from-another-service.component';

describe('CallAServiceFromAnotherServiceComponent', () => {
  let component: CallAServiceFromAnotherServiceComponent;
  let fixture: ComponentFixture<CallAServiceFromAnotherServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallAServiceFromAnotherServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallAServiceFromAnotherServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
