import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PassValuesFromComponentToViewComponent } from './pass-values-from-component-to-view/pass-values-from-component-to-view.component';
import { PassObjectFromComponentToViewComponent } from './pass-object-from-component-to-view/pass-object-from-component-to-view.component';
// tslint:disable-next-line:max-line-length
import { PassObjectsListFromComponentToViewComponent } from './pass-objects-list-from-component-to-view/pass-objects-list-from-component-to-view.component';
import { ClickEventInAngularComponent } from './click-event-in-angular/click-event-in-angular.component';
import { KeyUpEventInAngularComponent } from './key-up-event-in-angular/key-up-event-in-angular.component';
import { KeyUp } from './key-up.enter-event-in-angular/key-up.enter-event-in-angular.component';
import { ChangeEventInAngularComponent } from './change-event-in-angular/change-event-in-angular.component';
// tslint:disable-next-line:max-line-length
import { SelectElementFromListWithChangeEventComponent } from './select-element-from-list-with-change-event/select-element-from-list-with-change-event.component';
import { SelectFileWithChangeEventComponent } from './select-file-with-change-event/select-file-with-change-event.component';
import { SelectMultipleFileWithChangeEventComponent } from './select-multiple-file-with-change-event/select-multiple-file-with-change-event.component';
import { TwoWayDatabindingComponent } from './Databindin/two-way-databinding/two-way-databinding.component';
import { OneWayDatabindingComponent } from './Databindin/one-way-databinding/one-way-databinding.component';

@NgModule({
  declarations: [
    // array of components
    AppComponent,
    PassValuesFromComponentToViewComponent,
    PassObjectFromComponentToViewComponent,
    PassObjectsListFromComponentToViewComponent,
    ClickEventInAngularComponent,
    KeyUpEventInAngularComponent,
    // KeyUp.EnterEventInAngularComponent,
    ChangeEventInAngularComponent,
    SelectElementFromListWithChangeEventComponent,
    SelectFileWithChangeEventComponent,
    SelectMultipleFileWithChangeEventComponent,
    TwoWayDatabindingComponent,
    OneWayDatabindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
