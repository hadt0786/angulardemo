import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PassValuesFromComponentToViewComponent } from './pass-values-from-component-to-view/pass-values-from-component-to-view.component';
import { PassObjectFromComponentToViewComponent } from './pass-object-from-component-to-view/pass-object-from-component-to-view.component';
// tslint:disable-next-line:max-line-length
import { PassObjectsListFromComponentToViewComponent } from './pass-objects-list-from-component-to-view/pass-objects-list-from-component-to-view.component';
import { ClickEventInAngularComponent } from './click-event-in-angular/click-event-in-angular.component';
import { KeyUpEventInAngularComponent } from './key-up-event-in-angular/key-up-event-in-angular.component';

@NgModule({
  declarations: [
    // array of components
    AppComponent,
    PassValuesFromComponentToViewComponent,
    PassObjectFromComponentToViewComponent,
    PassObjectsListFromComponentToViewComponent,
    ClickEventInAngularComponent,
    KeyUpEventInAngularComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
