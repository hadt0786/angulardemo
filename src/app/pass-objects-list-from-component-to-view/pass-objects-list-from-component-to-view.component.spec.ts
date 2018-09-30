import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassObjectsListFromComponentToViewComponent } from './pass-objects-list-from-component-to-view.component';

describe('PassObjectsListFromComponentToViewComponent', () => {
  let component: PassObjectsListFromComponentToViewComponent;
  let fixture: ComponentFixture<PassObjectsListFromComponentToViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassObjectsListFromComponentToViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassObjectsListFromComponentToViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
