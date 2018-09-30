import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassValuesFromComponentToViewComponent } from './pass-values-from-component-to-view.component';

describe('PassValuesFromComponentToViewComponent', () => {
  let component: PassValuesFromComponentToViewComponent;
  let fixture: ComponentFixture<PassValuesFromComponentToViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassValuesFromComponentToViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassValuesFromComponentToViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
