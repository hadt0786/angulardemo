import { ProductService } from '.src/app/services/product.services.ts';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  FormControl,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';


import { MathService } from './services/math.service';

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
// tslint:disable-next-line:max-line-length
import { SelectMultipleFileWithChangeEventComponent } from './select-multiple-file-with-change-event/select-multiple-file-with-change-event.component';
import { TwoWayDatabindingComponent } from './Databindin/two-way-databinding/two-way-databinding.component';
import { OneWayDatabindingComponent } from './Databindin/one-way-databinding/one-way-databinding.component';
import { FormsControlComponent } from './forms-control/forms-control.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { CustomValidatorsComponent } from './custom-validators/custom-validators.component';
import { CreateAndUseServiceComponent } from './service/create-and-use-service/create-and-use-service.component';
import { UseObjectAndObjectListComponent } from './service/use-object-and-object-list/use-object-and-object-list.component';




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
    OneWayDatabindingComponent,
    FormsControlComponent,
    FormValidationComponent,
    CustomValidatorsComponent,
    CreateAndUseServiceComponent,
    UseObjectAndObjectListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FormControl,
    FormGroup
  ],
  providers: [MathService,
    ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
