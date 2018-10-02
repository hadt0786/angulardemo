import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFileWithChangeEventComponent } from './select-file-with-change-event.component';

describe('SelectFileWithChangeEventComponent', () => {
  let component: SelectFileWithChangeEventComponent;
  let fixture: ComponentFixture<SelectFileWithChangeEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectFileWithChangeEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectFileWithChangeEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
