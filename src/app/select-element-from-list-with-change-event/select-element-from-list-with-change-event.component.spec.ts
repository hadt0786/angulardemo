import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectElementFromListWithChangeEventComponent } from './select-element-from-list-with-change-event.component';

describe('SelectElementFromListWithChangeEventComponent', () => {
  let component: SelectElementFromListWithChangeEventComponent;
  let fixture: ComponentFixture<SelectElementFromListWithChangeEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectElementFromListWithChangeEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectElementFromListWithChangeEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
