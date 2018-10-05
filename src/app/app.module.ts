import { ProductService } from './services/product.service';

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
import { CallAServiceFromAnotherServiceComponent } from './call-a-service-from-another-service/call-a-service-from-another-service.component';
import { CalculatorService } from './services/calculator.service';
import { BuildTemplateWithRoutingAndNavigationComponent } from './routing-and-navigation/build-template-with-routing-and-navigation/build-template-with-routing-and-navigation.component';
import { HomeComponent } from './routing-and-navigation/children/home/home.component';
import { AboutUsComponent } from './routing-and-navigation/children/about-us/about-us.component';
import { NewsComponent } from './routing-and-navigation/children/news/news.component';
import { MainComponent } from './routing-and-navigation/main/main.component';
import { AboutusComponent } from './routing-and-navigation/aboutus/aboutus.component';
import { Menu1Component } from './routing-and-navigation/aboutus/components/menu1/menu1.component';
import { Menu2Component } from './routing-and-navigation/aboutus/components/menu2/menu2.component';
import { RouteParametersComponent } from './routing-and-navigation/route-parameters/route-parameters.component';
import { MoreparametersComponent } from './routing-and-navigation/route-parameters/components/moreparameters/moreparameters.component';
import { OneparameterComponent } from './routing-and-navigation/route-parameters/components/oneparameter/oneparameter.component';
import { DynamicComponentsComponent } from './dynamic-components/dynamic-components.component';
import { GoodbyeComponent } from './Dynamic-Components/goodbye/goodbye.component';
import { HiComponent } from './Dynamic-Components/hi/hi.component';
import { HelloComponent } from './Dynamic-Components/hello/hello.component';




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
    UseObjectAndObjectListComponent,
    CallAServiceFromAnotherServiceComponent,
    BuildTemplateWithRoutingAndNavigationComponent,
    HomeComponent,
    AboutUsComponent,
    NewsComponent,
    MainComponent,
    AboutusComponent,
    Menu1Component,
    Menu2Component,
    RouteParametersComponent,
    MoreparametersComponent,
    OneparameterComponent,
    DynamicComponentsComponent,
    GoodbyeComponent,
    HiComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FormControl,
    FormGroup
  ],
  providers: [
    MathService,
    ProductService,
    CalculatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
