import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildTemplateWithRoutingAndNavigationComponent } from './build-template-with-routing-and-navigation.component';

describe('BuildTemplateWithRoutingAndNavigationComponent', () => {
  let component: BuildTemplateWithRoutingAndNavigationComponent;
  let fixture: ComponentFixture<BuildTemplateWithRoutingAndNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildTemplateWithRoutingAndNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildTemplateWithRoutingAndNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
