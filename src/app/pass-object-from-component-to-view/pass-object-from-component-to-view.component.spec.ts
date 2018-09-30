import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassObjectFromComponentToViewComponent } from './pass-object-from-component-to-view.component';

describe('PassObjectFromComponentToViewComponent', () => {
  let component: PassObjectFromComponentToViewComponent;
  let fixture: ComponentFixture<PassObjectFromComponentToViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassObjectFromComponentToViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassObjectFromComponentToViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
