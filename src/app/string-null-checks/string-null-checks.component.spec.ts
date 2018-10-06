import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringNullChecksComponent } from './string-null-checks.component';

describe('StringNullChecksComponent', () => {
  let component: StringNullChecksComponent;
  let fixture: ComponentFixture<StringNullChecksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringNullChecksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringNullChecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
