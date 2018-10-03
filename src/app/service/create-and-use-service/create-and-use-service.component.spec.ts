import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAndUseServiceComponent } from './create-and-use-service.component';

describe('CreateAndUseServiceComponent', () => {
  let component: CreateAndUseServiceComponent;
  let fixture: ComponentFixture<CreateAndUseServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAndUseServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAndUseServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
