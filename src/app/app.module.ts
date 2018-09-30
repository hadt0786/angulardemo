import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PassValuesFromComponentToViewComponent } from './pass-values-from-component-to-view/pass-values-from-component-to-view.component';
import { PassObjectFromComponentToViewComponent } from './pass-object-from-component-to-view/pass-object-from-component-to-view.component';
import { PassObjectsListFromComponentToViewComponent } from './pass-objects-list-from-component-to-view/pass-objects-list-from-component-to-view.component';

@NgModule({
  declarations: [
    AppComponent,
    PassValuesFromComponentToViewComponent,
    PassObjectFromComponentToViewComponent,
    PassObjectsListFromComponentToViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
