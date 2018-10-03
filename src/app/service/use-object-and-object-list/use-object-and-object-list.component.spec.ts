import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseObjectAndObjectListComponent } from './use-object-and-object-list.component';

describe('UseObjectAndObjectListComponent', () => {
  let component: UseObjectAndObjectListComponent;
  let fixture: ComponentFixture<UseObjectAndObjectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseObjectAndObjectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseObjectAndObjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
