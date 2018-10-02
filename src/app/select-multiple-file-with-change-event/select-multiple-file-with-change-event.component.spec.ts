import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMultipleFileWithChangeEventComponent } from './select-multiple-file-with-change-event.component';

describe('SelectMultipleFileWithChangeEventComponent', () => {
  let component: SelectMultipleFileWithChangeEventComponent;
  let fixture: ComponentFixture<SelectMultipleFileWithChangeEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectMultipleFileWithChangeEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectMultipleFileWithChangeEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
